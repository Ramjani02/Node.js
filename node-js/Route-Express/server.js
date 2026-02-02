// Import express
const express = require("express");
// Create express app
const app = express();
// Middleware to parse JSON
app.use(express.json());
// ---------------- BASIC ROUTES ----------------
// GET / → Home page
app.get("/", (req, res) => {
 res.send("Home Page");
});
// GET /about → About page
app.get("/about", (req, res) => {
 res.send("About Page");
});
// POST /login → Login action
app.post("/login", (req, res) => {
 res.send("Login Successful");
});
// ---------------- ROUTER IMPORT ----------------
// Import user routes
const userRoutes = require("./route");
// Mount router at /user
app.use("/user", userRoutes);
// ---------------- SERVER START ----------------
app.listen(3000, () => {
 console.log(" Server running on http://localhost:3000");
});