// Introduction:
//  Password encryption in an Express JS app means securely hashing user passwords 
//  using bcrypt before storing them in the database, and verifying them during 
//  login using hash comparison.
// Installation:
//  npm install express bcrypt
// server.js:
 const express = require("express");
 const bcrypt = require("bcrypt");
 const app = express();
 app.use(express.json());
 // REGISTER
 app.post("/register", async (req, res) => {
 const { password } = req.body;
 // Hash password
 const hashedPassword = await bcrypt.hash(password, 10);
 res.json({
 originalPassword: password,
 storedPassword: hashedPassword
 });
 });
 // LOGIN
 app.post("/login", async (req, res) => {
 const { password, storedHash } = req.body;
 const isMatch = await bcrypt.compare(password, storedHash);
 if (isMatch) {
 res.json({ message: "Login success" });
 } else {
 res.json({ message: "Invalid password" });
 }
 });
 app.listen(3000, () => {
 console.log("Server running on port 3000");
 });