var http = require('http');
var path = require('path');

var async = require('async');

var bl = require('bl');

var url = [];

var port = process.argv[2];
var tcpDate = require('./TCP');

tcpDate(port, function(data){
    console.log(data);
    
})