//#!/bin/env node
"use strict";

let ROOT_DIRECTORY = __dirname + "/";
let HTTP_DIRECTORY = "HACC-AP/";
let ERROR_DIRECTORY = "error/";

let listenAddress = "0.0.0.0";
let listenPort = 8080;

let application = require("express")();
let http = require("http");
let server = http.createServer(application);
let fs = require("fs");

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
application.get("*", function (request, response) {
	if (request == "/") {
		response.sendFile(ROOT_DIRECTORY + HTTP_DIRECTORY + "index.html");
	}
	
	// Removes the leading slash
	let path = request.path.substring("/".length);
	
	fs.access(ROOT_DIRECTORY + HTTP_DIRECTORY + path, fs.constants.R_OK, function (error) {
		if (error) {
			// Return a 404
			response.status(404);
			response.sendFile(ROOT_DIRECTORY + ERROR_DIRECTORY + "404.html");
			
			return;
		}
		
		response.sendFile(ROOT_DIRECTORY + HTTP_DIRECTORY + path)
	});
});

server.listen(listenPort, listenAddress, function () {
	console.log("Listening on " + listenAddress + ":" + listenPort);
});

// Catch SIGTERM sent to process
process.on("SIGTERM", function () {
	// Stop accepting new connections, and finish serving already established connections
	server.close(function () {
		// Once all requests have been served, exit
		process.exit(0);
	});
});