//Server.js:
//👉 Express helps build server easily
const express = require("express");

//👉 Allows browser to talk to server
const cors = require("cors");

// 👉 app is your SERVER OBJECT
const app = express();

//👉 Allow all clients to access server
app.use(cors());

//👉 Converts incoming JSON → JS object
app.use(express.json());

// Temporary data 
let user = { name: "Ramjani", age: 23 };

// app.get👉 CLIENT is “getting”
// http://localhost:3003 == / (both same)
app.get("/", (req, res) => {
 res.send("GET Server running ");
});

//👉 This route runs when client calls:
app.get("/get-user", (req, res) => {
 console.log("GET /get-user called");

 //👉 Sends JSON response
 res.json({
 message: "User fetched successfully ",
 user
 });
});

//👉 Start server
//👉 Listen at port 3003
app.listen(3003, () => {
 console.log("GET server running on http://localhost:3003");
});


//about JSON ans JS Object
//📌 Internet understands only TEXT
//JS Object is for working, JSON is for traveling
// 👉 JSON text → JS object conversion is done INSIDE response.json()
// 👉 It is hidden (internal implementation)
// 👉 We confirm it by behavior, not by seeing source code
//WORK FLOW OF JSON AND JS OBJECT
// SERVER
// JS Object
// ↓ res.json()
// JSON TEXT
// ↓ Internet
// JSON TEXT
// ↓ response.json()
// JS Object



// CLIENT (browser / JS)
//         |
//         |   GET request
//         |   "Give me user data"
//         ↓
// SERVER (Express)
//         |
//         |   Finds data
//         |   Sends JSON
//         ↓
// CLIENT receives data


// | Thing     | Meaning               |
// | --------- | --------------------- |
// | GET       | Ask / Read            |
// | fetch     | Send request          |
// | res       | Server reply          |
// | json()    | Convert text → object |
// | app.get   | Handle GET request    |
// | /get-user | Route name            |
// | res.json  | Send JSON             |


