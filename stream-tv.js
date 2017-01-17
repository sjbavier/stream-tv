var http = require('http');
var path = require('path');


var port = process.argv[2];
var portserver = require('./portserver');

portserver(port);