// Install:
// npm install express passport passport-jwt jsonwebtoken
// JSON Web Token:
// JSON → Data format
// Web → Internet / HTTP use
// Token → Proof / key for access
const express = require("express");
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
// ================= JWT STRATEGY =================
const opts = {
 jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
 secretOrKey: "jwtSecret",
};
passport.use(
 new JwtStrategy(opts, (jwtPayload, done) => {
 return done(null, jwtPayload);
 })
);
app.use(passport.initialize());
// ================= ROUTES =================
// Home
app.get("/", (req, res) => {
 res.send(`
 <h2>JWT Demo</h2>
 <ul>
 <li><a href="/login">Generate Token</a></li>
 <li>Use token in Authorization header to access /profile</li>
 </ul>
 `);
});
// LOGIN (GET – browser-la token paaka)
app.get("/login", (req, res) => {
 const user = { id: 1, name: "Ajay" };
 const token = jwt.sign(user, "jwtSecret", { expiresIn: "1h" });
 res.json({
 message: "Token generated successfully",
 token: token,
 });
});
// PROTECTED ROUTE
app.get(
 "/profile",
 passport.authenticate("jwt", { session: false }),
 (req, res) => {
 res.json({
 message: "JWT Authentication SUCCESS",
 user: req.user,
 });
 }
);
// ================= SERVER =================
app.listen(3000, () => {
 console.log("JWT Server running on http://localhost:3000");
});
// Browser (only token generate): http://localhost:3000/login
// JWT Behavior – Browser vs Postman:
// When the token is present
// Browser (with header extension) → returns data
// Postman → returns data
// When the token is missing
// Postman →
 // Returns 401 Unauthorized
 // Shows a clear error message
// Browser →
// Shows only Unauthorized
// Does not display detailed error information
// Browser is silent
// Postman is expressive
// Simple conclusion
// Both Browser and Postman work when a token is provided, but Postman clearly 
// explains errors when the token is missing.