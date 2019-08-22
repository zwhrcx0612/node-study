let http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {"content-Type": "text/plain"});
    res.end("hello world")
}).listen(8888)

console.log("server is running")