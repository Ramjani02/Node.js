// Install:
// npm install express express-session passport passport-local bcrypt
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const app = express();
app.use(express.urlencoded({ extended: true }));
// SESSION
app.use(session({
 secret: "secret",
 resave: false,
 saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
// Dummy user
const user = {
 id: 1,
 username: "admin",
 password: bcrypt.hashSync("12345", 10)
};
// Passport Local Strategy
passport.use(new LocalStrategy((username, password, done) => {
 if (username !== user.username) return done(null, false);
 if (!bcrypt.compareSync(password, user.password)) return done(null, false);
 return done(null, user);
}));
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => done(null, user));
// ROUTES
app.get("/", (req, res) => {
 res.send("Home Page");
});
app.get("/login", (req, res) => {
 res.send(`
 <h2>Login</h2>
 <form method="post" action="/login">
 <input name="username" placeholder="username" /><br/><br/>
 <input name="password" type="password" placeholder="password" /><br/><br/>
 <button>Login</button>
 </form>
 `);
});
app.post("/login",
 passport.authenticate("local", {
 successRedirect: "/dashboard",
 failureRedirect: "/login"
 })
);
app.get("/dashboard", (req, res) => {
 if (!req.isAuthenticated()) return res.redirect("/login");
 res.send(`Welcome ${req.user.username}`);
});
// START SERVER
app.listen(3000, () => {
 console.log("Server running on http://localhost:3000");
});