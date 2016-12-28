var http = require('http');
var path = require('path');

var async = require('async');

var bl = require('bl');

var url = [];

for(var x = 2; x < process.argv.length; x++){
    url.push(process.argv[x]);
}

var httpGET = require('./httpGET');

httpGET(url, function(data){
    console.log(data);
    
})