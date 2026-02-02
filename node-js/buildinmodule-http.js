//builtinmodule_http.js:
// Definition:
// http is a built-in Node.js module that allows you to create and handle web servers and send or receive HTTP requests.

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello Node.js Server!");
});

server.listen(5000, () => console.log("Server running at http://localhost:5000"));