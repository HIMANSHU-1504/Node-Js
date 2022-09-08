var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("welcome to <br/> Node JS");
}).listen(3000);

console.log("Server is starting at http://127.0.0.1:3000");