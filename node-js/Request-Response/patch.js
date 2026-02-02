const express = require("express");
const cors = require("cors");
const app = express();
// Enable CORS for all origins
app.use(cors());
// Parse JSON body
app.use(express.json());
// Simple in-memory user data
let user = {
 name: "Ajay",
 age: 22,
 city: "Chennai"
};
// GET current user
app.get("/user", (req, res) => {
 res.json(user);
});
// PATCH user (partial update)
app.patch("/user", (req, res) => {
 const patchData = req.body;
 // Merge existing user with patch data
 user = { ...user, ...patchData };
 console.log("Patched User:", user);
 res.json({ message: "User patched successfully", user });
});
app.listen(3000, () => {
 console.log("Express server running on http://localhost:3000");
});