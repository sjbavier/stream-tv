module.exports = function(port, filePath)
{
  var http = require('http');
  var fs = require('fs');
  
  function requestHandle(request, response)
  {
    
      request.on('error', function(err)
      {
        console.log("there was an error" + err);
      });
      
      response.writeHead(200, "text/plain");
      
      var fileText = fs.createReadStream(filePath);
      
      fileText.pipe(response);
      
      
  }
  var server = http.createServer(requestHandle);
  
  
  server.listen(port);
  
    
};