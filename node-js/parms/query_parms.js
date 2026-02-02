// Query_parameters.js:
// Query parameters are a way to send small pieces of data to the server through the URL in a web application.
// They are written after the ? symbol in the URL and are mostly used with GET requests.
const express = require("express");
const app = express();
app.get("/search", (req, res) => {
 // Print full query object in terminal
 console.log("Query Parameters:", req.query);
 // Individual values
 console.log("Name:", req.query.name);
 console.log("Age:", req.query.age);
 // Send response to browser
 res.send("Query parameters received. Check terminal console.");
});
app.listen(3002, () => {
 console.log("Server running on http://localhost:3002");
 // console.log("Server running on http://localhost:3002/search?name=Ajay&age=22");
});
// Open Browser: http://localhost:3002/search?name=Ajay&age=22