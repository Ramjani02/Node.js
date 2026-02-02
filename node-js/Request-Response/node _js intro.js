// Introduction:
// In Node.js, a request (req) is the data sent by a client to the server, like URL, method, headers, or 
// body.
// A response (res) is what the server sends back to the client, such as HTML, JSON, or status codes.
// Examples of requests:
// | Property | Meaning | Example |
// | ------------- | ---------------------- | -------------------------------- |
// | req.url | Client request path | /home |
// | req.method | HTTP method | GET, POST, PUT, DELETE |
// | req.headers | Metadata about request | Content-Type: application/json |
// | req.body | POST/PUT data | { "name": "Ajay" } |
// Examples of responses:
// | Method | Meaning | Example |
// | -------------------------------- | ------------------------------ | --------------------------------------------------- |
// | res.writeHead(status, headers) | Set HTTP status code & headers | res.writeHead(200, {"Content￾Type": "text/html"}) |
// | res.write(data) | Send response body | res.write("Hello Ajay!") |
// | res.end() | Finish response | res.end() |
// | Method | Purpose | Body | Use Case |
// | ---------- | -------------- | ----- | -------------------- |
// | *GET* | Fetch data | No | Retrieve list / item |
// | *POST* | Create data | Yes | Signup, create user |
// | *PUT* | Full update | Yes | Replace whole object |
// | *PATCH* | Partial update | Yes | Update single field |
// | *DELETE* | Delete data | No | Remove item |
// GET /users/1 → user 1 data fetch
// POST /users → new user create
// PUT /users/1 → user 1 full update
// PATCH /users/1 → user 1 partial update
// DELETE /users/1 → user 1 remove
// Response Types:
// 1.) 1xx — Informational Responses (100–199):
//  The server says: “I received your request… you can continue.”
//  Temporary responses. Not commonly used.
//  (i) 100 Continue
//  Sent when the client is about to send a large request body.
//  Server checks the headers first, then says “Okay, continue sending the body.”
//  (ii) 101 Switching Protocols
//  Used when switching from HTTP to another protocol.
//  Example: Upgrading an HTTP connection to WebSockets.
// 2.) 2xx — Successful Responses (200–299):
//  The server says: “Everything is correct and successful.”
//  (i) 200 OK
//  Standard success for GET, PUT, PATCH, DELETE.
//  Example:
//  200 OK
//  {
//  "users": ["Ajay", "Thowfeek"]
//  }
//  (ii) 201 Created
//  Used when a new resource is created (mainly POST).
//  Example:
//  201 Created
//  {
//  "message": "User created"
//  }
//  (iii) 204 No Content:
//  Action succeeded but no response body is sent.
//  Mostly used for DELETE.
//  Example: DELETE /user/1 → 204 No Content
//  (iv) 206 Partial Content:
//  Used for video streaming or resuming file downloads.
//  Example: YouTube loads your video in chunks.
// 3.) 3xx — Redirection Responses (300–399)
//  The server says: “Go to another URL.”
//  (i) 301 Moved Permanently:
//  Old URL is permanently moved to a new URL.
//  Example: /blog → permanently moved to /articles.
//  (ii) 302 Found:
//  Temporary redirect.
//  Example: If you're not logged in, server redirects you to /login.
//  (iii) 307 Temporary Redirect:
//  Same as 302, but the HTTP method doesn't change.
//  POST stays POST after redirection.
//  (iv) 308 Permanent Redirect:
//  Same as 301, but method is preserved.
// 4.) 4xx — Client Errors (400–499):
//  The server says: “The problem is in your request.”
//  (i) 400 Bad Request
//  The request body or format is wrong.
//  Example:
//  POST /login
//  Body: { "username": "" } ← invalid
//  → 400 Bad Request
//  (ii) 401 Unauthorized
//  No authentication / missing token.
//  Example: You try to access an API without logging in.
//  (iii) 403 Forbidden:
//  You have a token, but no permission.
//  Example: A normal user tries to access an admin page.
//  (iv) 404 Not Found:
//  URL or resource not found.
//  Example: GET /products/9999 → 404 Not Found
//  (v) 409 Conflict:
//  Duplicate or conflicting request.
//  Example: Trying to register with an email that already exists.
//  (vi) 429 Too Many Requests:
//  Client is sending too many requests.
//  Example: 100 API calls in one second.
// 5.) 5xx — Server Errors (500–599):
//  The server says: “The mistake is on my side.”
//  (i) 500 Internal Server Error:
//  Generic server crash.
//  Example: Uncaught error, undefined variable, code exception.
//  (ii) 502 Bad Gateway:
//  Proxy or gateway receiving an invalid response.
//  Example: Nginx can’t reach backend.
//  (iii) 503 Service Unavailable:
//  Server is down temporarily or overloaded.
//  Example: Too many users → server under maintenance.
//  (iv) 504 Gateway Timeout:
//  Server didn't respond in time.
//  Example: A backend function takes too long to run.
// | Category | Range | Meaning | Example Codes |
// | -------- | ------- | ------------- | ---------------------------- |
// | *1xx* | 100–199 | Informational | 100, 101 |
// | *2xx* | 200–299 | Success | 200, 201, 204, 206 |
// | *3xx* | 300–399 | Redirection | 301, 302, 307, 308 |
// | *4xx* | 400–499 | Client error | 400, 401, 403, 404, 409, 429 |
// | *5xx* | 500–599 | Server error | 500, 502, 503, 504 |
// Tips:
//  REQUEST = Method.
//  RESPONSE = Status.
// 1.) Same Origin (Frontend & Backend same domain + port):
//  Frontend → http://localhost:3000
//  Backend → http://localhost:3000
//  All methods work without CORS:
//  | Method | Works? |
//  | ------ | ------ |
//  | GET | Yes |
//  | POST | Yes |
//  | PUT | Yes |
//  | PATCH | Yes |
//  | DELETE | Yes |
// 2.) Different Origin (Frontend & Backend different domain/port):
//  Frontend → http://localhost:5500
//  Backend → http://localhost:3000
//  Result without CORS headers:
//  | Method | Works? |
//  | ------ | ------------------------------- |
//  | GET | Sometimes (if simple request) |
//  | POST | No |
//  | PUT | No |
//  | PATCH | No |
//  | DELETE | No |
// Two types of CORS:
// | Method | CORS Headers Needed? | Preflight Handled? | Complexity |
// | -------------- | -------------------- | ---------------------- | ---------- |
// | Manual headers | Must set | Must handle manually | Medium |
// | cors package | Auto set | Auto handled | Easy |
// Eg: 1.) Manual headers:
// server_manual.js
 const http = require("http");
 const server = http.createServer((req, res) => {
 // Manual CORS headers
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
 res.end("GET request received");
 } else if (req.method === "POST") {
 let body = "";
 req.on("data", chunk => body += chunk);
 req.on("end", () => {
 console.log("POST body:", body);
 res.end("POST request received");
 });
 } else if (req.method === "PUT") {
 res.end("PUT request received");
 } else if (req.method === "PATCH") {
 res.end("PATCH request received");
 } else if (req.method === "DELETE") {
 res.end("DELETE request received");
 } else {
 res.end("Method not supported");
 }
 });
 server.listen(3000, () => {
 console.log("Server running on http://localhost:3000/");
 });


//Get.js:
 // GET example
 fetch("http://localhost:3000")
 .then(res => res.text())
 .then(data => console.log(data));

 // POST example
 fetch("http://localhost:3000", {
 method: "POST",
 headers: { "Content-Type": "application/json" },
 body: JSON.stringify({ name: "Ajay" })
 })
 .then(res => res.text())
 .then(data => console.log(data));


//Eg: 2.) CORS Package:
server_cors.js
 const express = require("express");
 const cors = require("cors"); // Import the CORS...
 const app = express();
 // Enable CORS for all routes
 app.use(cors());
 // Parse JSON body
 app.use(express.json());
 app.get("/", (req, res) => {
 res.send("GET request received");
 });
 app.post("/", (req, res) => {
 console.log("POST body:", req.body);
 res.send("POST request received");
 });
 app.put("/", (req, res) => res.send("PUT request received"));
 app.patch("/", (req, res) => res.send("PATCH request received"));
 app.delete("/", (req, res) => res.send("DELETE request received"));
 app.listen(3000, () => {
 console.log("Express server running on http://localhost:3000/");
 });


//Post.js:
 fetch("http://localhost:3000", {
 method: "POST",
 headers: { "Content-Type": "application/json" },
 body: JSON.stringify({ name: "Ajay" })
 })
 .then(res => res.text())
 .then(data => console.log(data));