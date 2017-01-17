module.exports = function(port, callback)
{
  var http = require('http');
  var map = require('through2-map');
  
  
  function requestHandle(request, response)
  {
    request.on('error', function(err)
      {
        console.log("there was an error" + err);
      });
      
      
    if(request.method.toString().toUpperCase() === 'POST'){
      
      response.writeHead(200, 'content-type: "text/plain');

      
      request.pipe(map(function(chunk) 
      {
          return chunk.toString().toUpperCase();
      })).pipe(response);
     
    }
  }
  var server = http.createServer(requestHandle);
  
  
  server.listen(port);
  
    
};