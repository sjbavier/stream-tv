module.exports = function(url, callback){
    
    
    var http = require('http');
    
    
    http.get(url, function(response){
        
        response.on("error", function(data){
            console.log(data + "there was an error with the response object");
        });
  
        
        response.setEncoding('utf8');//set encoding to utf8
        
        var data = "";//initialize data variable
        
        response.on("data", function(chunk){
            data += chunk + '\n';
        });
        response.on("end", function(){
            callback(data);
        })
        
     
  
    });


}