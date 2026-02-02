// Install:
// npm init -y
// npm install express cookie-parser
 
// Import express
const express = require("express");
// Import cookie-parser
const cookieParser = require("cookie-parser");
// Create express app
const app = express();
// Middleware
app.use(express.json());
app.use(cookieParser()); // Enable cookies
// ---------------- SET COOKIE ----------------
// GET /set-cookie
app.get("/set-cookie", (req, res) => {
 // Set a cookie
 res.cookie("username", "Ajay", {
 maxAge: 24 * 60 * 60 * 1000, // 1 day
 httpOnly: true, // JS can't access cookie
 });
 res.send("Cookie has been set");
});
// ---------------- READ COOKIE ----------------
// GET /get-cookie
app.get("/get-cookie", (req, res) => {
 const username = req.cookies.username;
 res.send(`Cookie value is: ${username}`);
});
// ---------------- CLEAR COOKIE ----------------
// GET /clear-cookie
app.get("/clear-cookie", (req, res) => {
 res.clearCookie("username");
 res.send("Cookie cleared");
});
// ---------------- SERVER START ----------------
app.listen(3000, () => {
 console.log(" Server running on http://localhost:3000");
});
// Client Request
// ↓
// Server sets cookie
// ↓
// Browser stores cookie
// ↓
// Next request
// ↓
// Cookie sent back to server
// | Storage | Size | Browser → Server? | Usage |
// | ------------ | --------- | ----------------- | ------------------------- |
// | Cookie | 4 KB | Yes | Small data, session token |
// | LocalStorage | ~5-10 MB | No | Big data in frontend |
// | Database | Unlimited | No | Full user data, files |
// Local Storage vs Global Storage:
// | Feature | Local Storage | Global Storage |
// | ------------------------ | ------------------------- | -------------------------- |
// | Location | Browser | Server / DB |
// | Accessible by | Frontend JS only | Backend / multiple clients |
// | Lifetime | Permanent (until cleared) | Depends on server/DB |
// | Size limit | 5-10 MB per domain | Large (depends on storage) |
// | Security | Less secure | Can be secured |
// | Automatic send to server | No | Depends on request |
// Simple Analogy:
// Local Storage = Notebook in your desk
// → Only you can read/write
// Global Storage = Office database
// → Everyone in office can read/write via server
// Rule:
// Small user-specific data → LocalStorage / Cookies
// Shared / large data → Global storage / Database
// Cookies vs Local Storage:
// | Feature | Cookie | Local Storage |
// | ------------------- | ----------------------------- | ------------------------------------ |
// | Storage Location | Browser (small data) | Browser (small/medium data) |
// | Size Limit | ~4 KB per cookie | ~5-10 MB per domain |
// | Auto send to server | Yes (every request) | No, only JS can read/write |
// | Lifetime | Configurable (maxAge/Expires) | Permanent until cleared |
// | Security | httpOnly, secure possible | JS can access (less secure) |
// | Use Case | Session token, login info | User prefs, cached data, form drafts |
// | Storage | Automatic server send? | Who can read/write? |
// | ------------ | ---------------------- | ------------------------------------ |
// | Cookie | Yes | Browser + Server (HttpOnly optional) |
// | LocalStorage | No | Only JS (frontend) |
// Wrong statement:
// Client → cookie → Server
// This is wrong because cookie is not created by client manually.
// Correct statement:
// Client → Server → Cookie → Client → Next request → Server