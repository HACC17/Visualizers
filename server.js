//#!/bin/env node
"use strict";

let ROOT_DIRECTORY = __dirname + "/";

let listenAddress = "0.0.0.0";
let listenPort = 8080;

let application = require("express")();
let http = require("http");
let server = http.createServer(application);

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

application.get("/", function (request, response) {
	response.sendFile(ROOT_DIRECTORY + "/HACC-AP/index.html");
    
    //let path = request.path.substring("/file/".length);
	//response.sendFile(ROOT_DIRECTORY + Path);
});

server.listen(listenPort, listenAddress, function () {
	console.log("Listening on " + listenAddress + ":" + listenPort);
});
