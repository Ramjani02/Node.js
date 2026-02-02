const http = require('http');
const server = http.createServer((req, res) => {
 if (req.url === "/data") {
 res.writeHead(200, { "Content-Type": "application/json" });
 res.end(JSON.stringify({ name: "Ajay", role: "Frontend Developer" }));
 } else {
 res.writeHead(404, { "Content-Type": "application/json" });
 res.end(JSON.stringify({ error: "Page not found" }));
 }
});
server.listen(3000, () => console.log("Server running at http://localhost:3000"));