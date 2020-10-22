var http = require('http');
var url = require('url');
//var dt = require('./myfirstmodule');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    
    //res.write("The date and time currently : " + dt.myDateTime()); //1
    
    //res.write(req.url); //2

    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    
    res.end(txt);
}).listen(8080);

