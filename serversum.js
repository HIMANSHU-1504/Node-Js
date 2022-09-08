var http = require('http');

var a = 10;
var b = 20;
var c = a+b;
var msg = "sum is" +c;
if(c==30) {
    msg+="<br/> C is 30";
}
else{
    msg+="C is not 30";
}
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(msg);
}).listen(3000);

console.log("Server is starting at http://127.0.0.1:3000");