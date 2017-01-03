module.exports = function(port, callback){
    var net = require('net');
    var strftime = require('strftime');
    var server = net.createServer(listener);
    function listener(socket){
        var date = strftime('%F %H:%M');
        
        socket.end(date + '\n');
    }
    server.listen(port);
};