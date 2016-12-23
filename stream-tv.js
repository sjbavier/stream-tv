var http = require('http');
var path = require('path');

var async = require('async');

var url = process.argv[2];

var httpGET = require('./httpGET');

httpGET(url, function(data){
    
    console.log(data);
    
})