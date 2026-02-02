// Route-parameters.js
// Demonstrates how to use route parameters in Express.js
// Route parameters are part of the URL path
const express = require("express");
const app = express();
// Route with parameter
app.get("/user/:id", (req, res) => {
 // Print route parameters in terminal
 console.log("Route Parameters:", req.params);
 // Access individual parameter
 const userId = req.params.id;
 console.log("User ID:", userId);
 // Send response to browser
 res.send("Route parameter received. Check terminal console.");
});
// Start server
app.listen(3001, () => {
 // console.log("Server running on http://localhost:3001");
 // console.log("Server running on http://localhost:3001/user/101");
});
// Browser: http://localhost:3001/user/101
// Notes:
// | Feature | Query Params | Route Params |
// | ----------- | ------------------- | ------------ |
// | URL Example | /search?name=Ajay | /user/101 |
// | Access | req.query | req.params |
// | Optional | Yes | No |
// | Visibility | URL | URL path |