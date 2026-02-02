const http = require('http');
const server = http.createServer((req, res) => {
 if (req.method === "POST") {
 let body = "";
 req.on("data", chunk => {
 body += chunk;
 });
 req.on("end", () => {
 console.log("Request URL:", req.url); 
 console.log("Request Method:", req.method);
 console.log("Request Headers:", req.headers);
 console.log("Request Body:", body);
 res.end("POST received");
 });
 } else {
 res.end("GET received");
 }
});
server.listen(3000, () => {
 console.log("Server running at http://localhost:3000/");
});



// 🔹 GET → Client asks the server for data
// 🔹 POST → Client sends data to the server
// 🔹 Server ALWAYS receives data
// 🔹 Server decides whether to store it or not

// ✔ GET = request data
// ✔ POST = send data



// 🏦 Bank example
// GET:
// You ask the bank:
// “What is my balance?”
// Bank already has data
// Bank gives it to you
// You just see it

// POST:
// You give the bank:
// “Here is my filled form”
// Bank receives it
// Bank reads it
// Bank decides what to do


// GET is used when the client wants to READ data from the server.
// POST is used when the client wants to SEND data to the server.
// In both cases, the server receives the request and controls the data.