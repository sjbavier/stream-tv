// start server

var http = require('http');
var path = require('path');
var async = require('async');
// var socketio = require('socket.io');
var express = require('express');

var router = express();
var server = http.createServer(router);
// var io = socketio.listen(server);
var commandargs = process.argv;
var stdout = function (commandargs){
    var tempnum = 0;
    for(var x = 2; x <= (commandargs.length - 1); x++){
        tempnum += Number(commandargs[x]);
    }
    console.log(tempnum);
    };

stdout(commandargs);