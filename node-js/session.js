// Installation:
// npm install express-session
// Import modules
const express = require("express");
const session = require("express-session");
const app = express();
app.use(express.json());
// ---------------- SESSION SETUP ----------------
app.use(
 session({
 secret: "mySecretKey", // Secret key to sign session ID
 resave: false, // Save session only if modified
 saveUninitialized: true, // Save new sessions
 cookie: { maxAge: 30 * 60 * 1000 } // 30 minutes
 })
);
// ---------------- LOGIN ----------------


app.post("/login", (req, res) => { 
 const { username, password } = req.body;
 // Simple auth check
 if (username === "Ramjani" && password === "123456") {
 req.session.user = username; // Save username in session
 return res.send("Login successful, session created!");
 }
 res.status(401).send("Invalid credentials");
});
// ---------------- DASHBOARD ----------------
app.get("/dashboard", (req, res) => {
 if (req.session.user) {
 return res.send(`Welcome ${req.session.user}, this is your dashboard`);
 }
 res.status(401).send("Please login first");
});
// ---------------- LOGOUT ----------------
app.get("/logout", (req, res) => {
 req.session.destroy(); // Remove session from server
 res.send("Logged out successfully, session destroyed");
});
// ---------------- SERVER ----------------
app.listen(3000, () => {
 console.log(" Server running on http://localhost:3000");
});
// | Storage Type | Where Stored | Size / Scope | Use Case / Notes 

// | ------------------ | ------------------ | ------------------------------------------ | ----------------------------------------------------------------------------- 
// | **Cookie** | Browser | Small (~4 KB) | Stores session ID / small info, auto sent to server |
// | **LocalStorage** | Browser | Medium (~5–10 MB) | Frontend-only, user prefs, cache |
// | **Session** | Server (memory/DB) | Can be large (depends on server memory/DB) | Stores login status, cart, roles, etc. → backend global storage for each user |
// | **Global storage** | Server / DB | Large / shared across users | App-wide configs, shared data |
// Cookie → small, frontend + server usage (ID only)
// LocalStorage → frontend-only, medium size, not sent automatically
// Session → backend/global storage, can hold larger, sensitive user data, safer than cookies
// Session = server-side “global storage per user”
// Wrong Statement:
// Client → cookie → server → session
// Correct Statement:
// Client → Server (creates session) → Cookie sent → Browser stores → Next requests → Server