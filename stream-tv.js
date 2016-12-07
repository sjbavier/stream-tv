// start server

var http = require('http');
var path = require('path');
var async = require('async');
// var socketio = require('socket.io');
var express = require('express');

var router = express();
var server = http.createServer(router);
var fs = require('fs');
// var io = socketio.listen(server);
var pathToFile = process.argv[2];

var buff = fs.readFile(pathToFile, function callback(err, data){
    if(err){ return console.log("there was an error reading the file") }
    var str = data.toString().split('\n');
    return console.log(str.length -1);
});
