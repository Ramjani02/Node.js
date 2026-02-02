// Introduction:
 // Middleware is a function in Express.js that runs after a request comes from the client and before the response is sent back.
 // It helps the server check, modify, or log the request before it reaches the route.
// Middleware is commonly used for:
 // Logging request details.
 // Checking user authentication.
 // Validating data.
 // Handling errors.

 //Middleware = a function that runs BETWEEN request and response
 //CLIENT REQUEST  →  MIDDLEWARE  →  ROUTE  →  RESPONSE

const express = require("express"); // Import Express framework
const app = express(); // Create Express application
// GLOBAL MIDDLEWARE
app.use((req, res, next) => { // Middleware function
 console.log("Request URL:", req.url); // Logs the requested URL
 console.log("Request Method:", req.method); // Logs HTTP method (GET, POST, etc.)
 next(); // Pass control to next middleware or route
});
// ROUTE HANDLER
app.get("/", (req, res) => { // Handles GET request for root (/)
 res.send("Hello from Middleware Example!"); // Sends response to client
});

// START SERVER
app.listen(3000, () => { // Server listens on port 3000
 console.log("Server running on http://localhost:3000"); // Server status message
});
// Request Work Flow:
 // Client Request
 // ↓
 // Middleware (app.use)
 // ↓
 // Log URL & Method
 // ↓
 // next()
 // ↓
 // Route Handler
 // ↓
 // Response to Client
// Notes:
 // app.use() → Runs for every request
 // req.url → Requested URL path
 // req.method → HTTP method (GET, POST, PUT, DELETE)
 // next() → Moves to the next middleware or route