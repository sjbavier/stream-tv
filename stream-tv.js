// start server

var http = require('http');
var path = require('path');
var async = require('async');
// var socketio = require('socket.io');
var express = require('express');


var router = express();
var server = http.createServer(router);

// var io = socketio.listen(server);
var fs = require('fs');
var directory = process.argv[2];
var fileType = process.argv[3];

var OnlyFileType = require('./async.js');


OnlyFileType(directory, fileType, function(err, filList){
    if(err){console.log(err)}
    filList.forEach(function(file){
        console.log(file);
    })
});