//#!/bin/env node
"use strict";

const ROOT_DIRECTORY = __dirname + "/";
const HTTP_DIRECTORY = "HACC-AP/";
const ERROR_DIRECTORY = "error/";

const LISTEN_ADDRESS = "0.0.0.0";
const LISTEN_PORT = 8080;

let application = require("express")();
let http = require("http");
let server = http.createServer(application);
let fs = require("fs");
let util = require("util");
let crypto = require("crypto");

// Add headers
/*
application.use(function (request, response, next) {
	// Website you wish to allow to connect
	response.setHeader("Access-Control-Allow-Origin", "http://we.dont.have.a.domain/");
	
	// Request methods you wish to allow
	response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
	
	// Request headers you wish to allow
	response.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
	
	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	// response.setHeader("Access-Control-Allow-Credentials", true);
	
	// Pass to next layer of middleware
	next();
});
*/

// TODO: Consolidate duplicate error handling code into reusable functions

// Attempt to serve any file requested from the HACC-AP directory
application.use(function (request, response, next) {
	// Handle only GET requests
	if (request.method != "GET") {
		// Pass the request down the chain
		next();
		
		return;
	}
	
	// Removes the leading slash
	let path = request.path.substring("/".length);
	
	if (request.path.charAt(request.path.length - 1) == "/") {
		// Try to serve an index.html if the request is for a directory
		path += "index.html";
	}
	
	fs.access(ROOT_DIRECTORY + HTTP_DIRECTORY + path, fs.constants.R_OK, function (error) {
		if (error) {
			let error = new Error("404 Not Found");
			error.status = 404;
			
			// Trigger the error handler chain
			next(error);
			
			return;
		}
		
		response.sendFile(ROOT_DIRECTORY + HTTP_DIRECTORY + path)
	});
});

// Catch 405 errors
application.use(function (request, response, next) {
	// Temporarily filter for GET and POST requests
	if (request.method == "GET" || request.method == "POST") {
		// Pass the request down the chain
		next();
		
		return;
	}
	
	let error = new Error("405 Method Not Allowed");
	error.status = 405;
	
	// Trigger the error handler chain
	next(error);
});

// Catch 500 errors (catch-all)
application.use(function (request, response, next) {
	let error = new Error("500 Internal Server Error");
	error.status = 500;
	
	// Trigger the error handler chain
	next(error);
});

// Handle 404 errors
application.use(function (mainError, request, response, next) {
	if (mainError.status != 404) {
		// Pass the error down the chain
		next(mainError);
		
		return;
	}
	
	// Return a 404 Not Found
	response.status(404);
	response.sendFile(ROOT_DIRECTORY + ERROR_DIRECTORY + "404.html");
});

// Handle 405 errors
application.use(function (mainError, request, response, next) {
	if (mainError.status != 405) {
		// Pass the error down the chain
		next(mainError);
		
		return;
	}
	// Return a 405 Method Not Allowed
	response.status(405);
	
	// 405.html contains three %s, where the method, request URL, and error ID is intended to go
	fs.readFile(ROOT_DIRECTORY + ERROR_DIRECTORY + "405.html", "utf-8", function (error, data) {
		if (error) {
			// Couldn't read the error file
			console.error("Application error:");
			console.error(mainError);
			console.error("Error reading 405.html");
			console.error(error);
			
			response.send("405 Method Not Allowed")
			
			return;
		}
		
		// Generate an error ID
		crypto.randomBytes(25, function(error, buffer) {
			if (error) {
				// Couldn't generate an ID
				console.error("Application error:");
				console.error(mainError);
				console.error("Error generating error ID");
				console.error(error);
				
				// Format the string (405 error file) and send it
				response.send(util.format(data, request.method, request.path, "Unable to generate reference ID"));
				
				return;
			}
			
			let errorID = buffer.toString("base64").replace(/\//g, "_").replace(/\+/g, "-");
			
			console.error("Application error reference ID: " + errorID);
			console.error(mainError);
			
			// Format the string (405 error file) and send it
			response.send(util.format(data, request.method, request.path, errorID));
		});
	});
	
	// Don't call next() because we're done
	return;
});

// Handle 500 errors
// Temporary catch-all
application.use(function (mainError, request, response, next) {
	// Return a 500 Internal Server Error
	response.status(500);
	
	// 500.html contains a %s, where the error ID is intended to go
	fs.readFile(ROOT_DIRECTORY + ERROR_DIRECTORY + "500.html", "utf-8", function (error, data) {
		if (error) {
			// Couldn't read the error file
			console.error("Application error:");
			console.error(mainError);
			console.error("Error reading 500.html");
			console.error(error);
			
			response.send("500 Internal Server Error")
			
			return;
		}
		
		// Generate an error ID
		crypto.randomBytes(25, function(error, buffer) {
			if (error) {
				// Couldn't generate an ID
				console.error("Application error:");
				console.error(mainError);
				console.error("Error generating error ID");
				console.error(error);
				
				// Format the string (500 error file) and send it
				response.send(util.format(data, "Unable to generate reference ID"));
				
				return;
			}
			
			let errorID = buffer.toString("base64").replace(/\//g, "_").replace(/\+/g, "-");
			
			console.error("Application error reference ID: " + errorID);
			console.error(mainError);
			
			// Format the string (500 error file) and send it
			response.send(util.format(data, errorID));
		});
	});
	
	// Don't call next() because we're done
	return;
});

server.listen(LISTEN_PORT, LISTEN_ADDRESS, function () {
	console.log("Listening on " + LISTEN_ADDRESS + ":" + LISTEN_PORT);
});

// Catch SIGTERM sent to process
process.on("SIGTERM", function () {
	// If server.close doesn't close within 5 seconds, exit
	setTimeout(function () {
		process.exit(0);
	}, 5000);
	
	// Stop accepting new connections, and finish serving already established connections
	server.close(function () {
		// Once all requests have been served, exit
		process.exit(0);
	});
});