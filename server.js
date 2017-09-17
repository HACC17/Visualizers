//#!/bin/env node
"use strict";

const ROOT_DIRECTORY = __dirname + "/";
const HTTP_DIRECTORY = ROOT_DIRECTORY + "HACC-AP/";
const INCLUDE_DIRECTORY = ROOT_DIRECTORY + "include/";
const TEMPLATE_DIRECTORY = ROOT_DIRECTORY + "template/";

const ALLOWED_METHODS = ["GET", "POST"];
const LISTEN_ADDRESS = "0.0.0.0";
const LISTEN_PORT = 8080;

let application = require("express")();
let http = require("http");
let server = http.createServer(application);
let fs = require("fs");

let ServerError = require(INCLUDE_DIRECTORY + "serverErrors");
let template = require(INCLUDE_DIRECTORY + "template");
let utilities = require(INCLUDE_DIRECTORY + "utilities");

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

// Attempt to serve any file requested from the HACC-AP directory
application.use((request, response, next) => {
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
	
	// Look for the explicit file
	fs.access(HTTP_DIRECTORY + path, fs.constants.R_OK, (error) => {
		if (error) {
			// Look for a file with the same path but with the .html extension appended
			// This allows /test to point to /test.html
			fs.access(HTTP_DIRECTORY + path + ".html", fs.constants.R_OK, (error) => {
				if (error) {
					let error = new Error("404 Not Found");
					error.status = 404;
					error._method = request.method;
					error._originalPath = request.path;
					error._impliedPath = path;

					// Trigger the error handler chain
					next(error);

					return;
				}

				response.sendFile(HTTP_DIRECTORY + path + ".html")
			});
			
			return;
		}
		
		response.sendFile(HTTP_DIRECTORY + path)
	});
});

application.use((request, response, next) => {
	// Handle only POST requests
	if (request.method != "POST") {
		// Pass the request down the chain
		next();
		
		return;
	}
	
	response.setHeader("Content-Type", "text/plain");
	response.send("POST request received!");
});

// Catch 405 errors
// Supported methods are in ALLOWED_METHODS
application.use((request, response, next) => {
	// Filter for methods
	if (request.method in ALLOWED_METHODS) {
		// Pass the request down the chain
		next();
		
		return;
	}
	
	let error = new Error("405 Method Not Allowed");
	error.status = 405;
	error._method = request.method;
	error._originalPath = request.path;
	
	// Trigger the error handler chain
	next(error);
});

// Catch 500 errors (catch-all)
application.use((request, response, next) => {
	let error = new Error("500 Internal Server Error");
	error.status = 500;
	error._method = request.method;
	error._originalPath = request.path;
	
	// Trigger the error handler chain
	next(error);
});

// Handle errors
application.use((mainError, request, response, next) => {
	// If there is a specific error object for the given error, use it. Otherwise, use 500
	// Internal Server Error
	let errorType = mainError.status in ServerError ? ServerError[mainError.status] : ServerError[500];
	
	// Return a return the correct status code header
	response.status(errorType.code);
	
	utilities.randomString(25, (error, errorID) => {
		if (error) {
			// Couldn't generate an ID
			console.error("Application error reference ID: " + errorID);
			console.error(mainError);
			console.error("Error generating error ID:");
			console.error(error);
			
			// Send a plain text error
			response.setHeader("Content-Type", "text/plain");
			response.send(errorType.code + " " + errorType.name);
			
			return;
		}
		
		template.parseFile(TEMPLATE_DIRECTORY + "error", {
			errorCode: errorType.code,
			errorName: errorType.name,
			errorMessage: errorType.message,
			errorInformation: () => {
				if (typeof errorType.information == "function") {
					return errorType.information(request.method, request.path);
				}
				
				return errorType.information;
			},
			errorHelpText: () => {
				if (typeof errorType.helpText == "function") {
					return errorType.helpText(errorID);
				}
				
				return errorType.helpText;
			}
		}, (error, data) => {
			if (error) {
				// Couldn't read or parse the error template
				console.error("Application error reference ID: " + errorID);
				console.error(mainError);
				console.error("Error getting template:");
				console.error(error);
				
				// Send a plain text error
				response.setHeader("Content-Type", "text/plain");
				response.send(errorType.code + " " + errorType.name + "\nError Reference ID: " + errorID);
				
				return;
			}
			
			console.error("Application error reference ID: " + errorID);
			console.error(mainError);
			
			response.send(data);
		});
	});
});

server.listen(LISTEN_PORT, LISTEN_ADDRESS, () => {
	console.log("Listening on " + LISTEN_ADDRESS + ":" + LISTEN_PORT);
});

// Catch SIGTERM sent to process
process.on("SIGTERM", () => {
	// If server.close doesn't close within 5 seconds, exit
	setTimeout(() => {
		process.exit(0);
	}, 5000);
	
	// Stop accepting new connections, and finish serving already established connections
	server.close(() => {
		// Once all requests have been served, exit
		process.exit(0);
	});
});