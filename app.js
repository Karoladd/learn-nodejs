var http = require('http')

/* http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end("Welcome Karoline!")
}).listen(8081) */

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end("Welcome Karoline!")
}).listen(8081)