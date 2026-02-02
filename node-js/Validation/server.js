// Install:
// npm install express-validator
// Import Express framework to create a server
const express = require("express");
// Import CORS middleware to allow requests from other origins (Live Server, etc.)
const cors = require("cors");
// Import validation helpers from express-validator
const { body, validationResult } = require("express-validator");
// Create an Express application
const app = express();
// Enable CORS so frontend (Live Server) can talk to this backend
app.use(cors());
// Parse incoming JSON data from frontend requests
app.use(express.json());
// ---------------- REGISTER API WITH VALIDATIONS ----------------
app.post(
 "/register", // API endpoint: POST /register
 [
 // Check if email field is not empty
 body("email")
 .notEmpty()
 .withMessage("Email is required")
 // Check if email format is valid (abc@gmail.com)
 .isEmail()
 .withMessage("Invalid email format"),
 // Check if password field is not empty
 body("password")
 .notEmpty()
 .withMessage("Password is required")
 // Check if password length is at least 6 characters
 .isLength({ min: 6 })
 .withMessage("Password must be at least 6 characters"),
 ],
 // Controller function – runs after validations
 (req, res) => {
 // Log the data received from frontend
 console.log("\n Data received from frontend:");
 console.log(req.body);
 // Collect validation errors (if any)
 const errors = validationResult(req);
 // If validation errors exist, stop the request
 if (!errors.isEmpty()) {
 console.log(" Validation Errors:");
 console.table(errors.array());
 // Send error response back to frontend
 return res.status(400).json({
 success: false,
 errors: errors.array(),
 });
 }
 // If no validation errors, continue with success logic
 console.log(" Validation Success");
 // Send success response
 res.json({
 success: true,
 message: "User registered successfully",
 });
 }
);
// Start the server on port 3000
app.listen(3000, () => {
 console.log(" Server running on http://localhost:3000");
});
// | Step | Explanation |
// | --------------- | ----------------- |
// | User fills form | Frontend |
// | JS sends data | fetch() |
// | Server receives | req.body |
// | Rules applied | express-validator |
// | Wrong data | stopped |
// | Correct data | allowed |
// Workflow:
// Client Request
// ↓
// Validation Middleware
// ↓
// Error? → STOP + send error
// ↓
// No error → Controller / DB