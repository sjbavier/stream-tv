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
var directory = process.argv[2];
var fileType = process.argv[3];

 fs.readdir(directory, function(err, list){
    if(err){ return console.error(err)}
    var filList = [];
    for(var x = 0; x < list.length; x++){
        if("." + fileType == path.extname(list[x])){
            filList.push(list[x]);
        }
    }
    return console.log(filList.join('\n'));
});


