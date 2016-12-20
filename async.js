module.exports = function (directory, fileType, callback){
    var fs = require('fs');
    var path = require('path');
    var filList = [];
    
    fs.readdir(directory, function(err, list){
       if(err){ return console.log(err) + "cannot readdir"}

       
       for(var x = 0; x < list.length; x++){
           if("." + fileType == path.extname(list[x])){
             filList.push(list[x]);
             
           }
       }
        return callback(null, filList);
    });
  
    
};