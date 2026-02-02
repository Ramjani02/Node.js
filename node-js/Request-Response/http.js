const http = require('http');
const server = http.createServer((req, res) => {
 console.log("Request URL:", req.url); // client request path
 console.log("Request Method:", req.method); // GET or POST
 console.log("Request Headers:", req.headers);
 console.log("Request Body:", req.body);
 console.log("Response WriteHead:", res.writeHead);
 console.log("Response Write:", res.write);
 console.log("Response End:", res.end);
 // Set response header
 res.writeHead(200, { "Content-Type": "text/plain" });
 // Send response
 res.write("Hello, Ajay! This is a response from Node.js server.");
 res.end();
});
server.listen(3000, () => {
 console.log("Server running at http://localhost:3000/");
});
// Explanation:
// req.url → client path (e.g., /home, /about)
// req.method → HTTP method (GET, POST, etc.)
// res.writeHead() → status code + content type
// res.write() → response body
// res.end() → finish response