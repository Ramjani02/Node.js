const express = require("express"); // Import Express framework (used to create Node.js server)
const cors = require("cors"); // Import CORS middleware (prevents cross-origin errors)
const app = express(); // Create an instance of Express app
app.use(cors()); // Enable CORS for all routes (allow requests from any origin)
const data = { // Sample data to send via server
 message: "Server running successfully!", // Root message
 users: [ // Users list
 { id: 1, name: "Ajay" },
 { id: 2, name: "Thowfeek" },
 ],
};
// Root route
app.get("/", (req, res) => { // When client requests "/", send root message
 res.json({ message: data.message }); // Send JSON response { message: ... }
});
// Users route
app.get("/users", (req, res) => { // When client requests "/users", send users list
 res.json(data.users); // Send JSON response with users array
});
// Start server
app.listen(3000, () => console.log("Server running at http://localhost:3000")); 
// Listen on port 3000 and log message when server starts