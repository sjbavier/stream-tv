module.exports = function(url, callback)
{
    
    
    var http = require('http');
    var bl = require('bl');
    var allData = [];//initialize data variable
    var count = 0;
    
    url.forEach(function(urlRequest)
    {
        
        getURL(urlRequest, count);
        
        count++;
        
    });
    
    function getURL(urlRequest, count)
    {
        
        
        http.get(urlRequest, function(response){
            response.pipe(bl(function(err, data){

             if(err){console.log(data + "there was an error with the response object");}
                
                data = data.toString();
    
                allData[count] = data;
                // console.log("count iteration " + count);
                
                collectData(allData);
                
              
            }));
     
  
        });
        
    }
    
  function collectData(allData)
  {
      
        if((allData.length) == url.length)
        {
            
            allData = allData.join("\n");
            callback(allData);
        }
  }
    

}