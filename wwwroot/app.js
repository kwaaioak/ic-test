/*jslint node: true */
"use strict";

var domain = require('domain');

var startServer = function(callback){
    var http = require('http');
    var port = process.env.port || 1137;
    http.createService(function(req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World\n');
    }).listen(port);
};
