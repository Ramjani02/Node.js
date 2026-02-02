const express = require("express");
const cors = require("cors"); // npm install cors
const app = express();
app.use(cors()); // Allow all requests
// ROOT ROUTE - gives JSON
app.get("/", (req, res) => {
 res.json({ message: "Server working successfully!" });
});
// Start Server
app.listen(3000, () => {
 console.log("Server running on http://localhost:3000");
});
// Notes:
// CORS (Cross-Origin Resource Sharing):
// CORS = Browser security rule.
// Frontend (HTML/React) one server.
// Backend (Node/Express) another server.
// Technical Meaning
// Frontend → http://localhost:5500
// Backend → http://localhost:3000