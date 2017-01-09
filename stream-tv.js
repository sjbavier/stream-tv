var http = require('http');
var path = require('path');


var port = process.argv[2];
var filePath = process.argv[3];
var portserver = require('./portserver');

portserver(port, filePath, function(data){

    
})