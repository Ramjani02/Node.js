const http = require("http");
const url = require("url");
const server = http.createServer((req, res) => {
 // CORS headers manually set
 res.setHeader("Access-Control-Allow-Origin", "*"); // any frontend origin allow
 res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE"); // allowed methods
 res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // allowed headers
 if (req.method === "GET") {
 const parsedUrl = url.parse(req.url, true);
 console.log("GET Request URL:", req.url);
 console.log("Query Params:", parsedUrl.query);
 res.end("GET request received");
 } else {
 res.end("Use GET method");
 }
});
server.listen(3000, () => {
 console.log("Server running on http://localhost:3000/");
});