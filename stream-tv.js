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

var buff = fs.readFileSync(pathToFile);
var str = buff.toString();
function lines(str){
    var splitstr = str.split('\n');
    console.log(splitstr);
    return console.log(splitstr.length - 1);
    
}
lines(str);