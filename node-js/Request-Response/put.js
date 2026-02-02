const http = require("http");
// Simple in-memory user data
let user = {
 name: "Ajay",
 age: 22
};
const server = http.createServer((req, res) => {
 // CORS headers
 res.setHeader("Access-Control-Allow-Origin", "*");
 res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
 res.setHeader("Access-Control-Allow-Headers", "Content-Type");
 // Handle preflight OPTIONS request
 if (req.method === "OPTIONS") {
 res.writeHead(200);
 res.end();
 return;
 }
 if (req.method === "GET") {
 res.setHeader("Content-Type", "application/json");
 res.end(JSON.stringify(user));
 } 
 else if (req.method === "PUT") {
 let body = "";
 req.on("data", chunk => body += chunk);
 req.on("end", () => {
 try {
 const updatedData = JSON.parse(body);
 // Update the user details
 user = { ...user, ...updatedData };
 console.log("Updated User:", user);
 res.setHeader("Content-Type", "application/json");
 res.end(JSON.stringify({ message: "User updated successfully", user }));
 } catch (err) {
 res.writeHead(400);
 res.end("Invalid JSON");
 }
 });
 } else {
 res.end("Method not supported");
 }
});
server.listen(3000, () => {
 console.log("Server running on http://localhost:3000/");
});