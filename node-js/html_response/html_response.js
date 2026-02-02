const http = require('http');
const server = http.createServer((req, res) => {
 res.writeHead(200, { "Content-Type": "text/html" });
 res.write("<h1>Hello, Ajay!</h1>");
 res.write("<p>Welcome to my Node.js server.</p>");
 res.end();
});
server.listen(3000, () => console.log("Server running at http://localhost:3000"));