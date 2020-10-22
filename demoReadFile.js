var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    fs.readFile('demoFile1.html', function(err, data) {
        res.writeHead(200,{'Containte-Type' : 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);