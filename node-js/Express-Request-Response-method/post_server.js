///Server.js:
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
// Test GET
app.get("/", (req, res) => { // "/" = ROOT PATH
 res.send("Server running ");
});
// POST route
app.post("/create-user", (req, res) => {
 console.log("POST /create-user called");
 console.log("Body:", req.body);

//  const name = req.body.name;
// const age = req.body.age;
 const { name, age } = req.body;
 
 if (!name || !age) {
 return res.status(400).json({
 message: "Name & Age required "
 });
 }
 res.status(201).json({
 message: "User created ",
 user: { name, age }
 });
});
app.listen(3003, () => {
 console.log("Server running on http://localhost:3003");
});
// Workflow:
// client.js (JS code)s
// |
// | POST (JSON)
// ↓
// Express Server (3003)
// |
// | console.log(req.body)
// ↓
// Response JSON

//WHAT IS CORS?

// CORS = Cross Origin Resource Sharing
// ❓ What problem does it solve?

// Browser rule:
// ❌ “Website A cannot talk to Website B”

// Example:
// Client → file://
// Server → http://localhost:3003
// Browser says ❌ Blocked

// 🧠 Real-world example:

// Apartment security 🚪
// Visitors from other buildings are blocked.
// cors() = Security guard 

// About app
// express() → creates server
// app → your server object
//app = your server

//about use-app
// 3️⃣ app.use(cors());
// Enables CORS for all routes
// Allows client to access server
// 🧠 Real-world:
// Office security allows everyone to enter
// Without this → browser blocks request.


// //About Line 6
// 🔁 COMPLETE FLOW (THIS IS THE KEY 🔑)
// 1️⃣ Client side
// { name: "Ramjani", age: 23 }   // JS object
// ↓ JSON.stringify
// "{\"name\":\"Ramjani\",\"age\":23}"   // TEXT


// 📦 Internet carries ONLY TEXT
// 2️⃣ Server receives TEXT

// Server receives:
// "{\"name\":\"Ramjani\",\"age\":23}"


// ❌ Server does NOT automatically understand it

// 3️⃣ express.json() steps in
// app.use(express.json());


// 👉 It reads the text
// 👉 Converts it back to JS object
// 👉 Puts it inside req.body

// req.body = { name: "Ramjani", age: 23 }