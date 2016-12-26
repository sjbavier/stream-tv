module.exports = function(url, callback){
    
    
    var http = require('http');
    var bl = require('bl');
    
    http.get(url, function(response){
        
        // response.setEncoding('utf8');//set encoding to utf8
        
        var data;//initialize data variable
        var characters;
        
        response.pipe(bl(function(err, data){
            
             if(err){console.log(data + "there was an error with the response object");}
             
                data = data.toString();
                characters = data.length;
           
              
              callback(data, characters);
        }));
     
  
    });


}