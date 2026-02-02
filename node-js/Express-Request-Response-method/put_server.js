//Server.js:

// 🟢 Import Express framework
// 🟢 Express helps build server easily
const express = require("express");

// 🟢 Allows requests from browser
// 🟢 Without CORS → browser blocks request
const cors = require("cors");

//🟢 app = your server object
const app = express();

//🟢 Enables CORS for all requests
app.use(cors());

// 🟢 Converts incoming JSON TEXT → JS object
// 🟢 Without this → req.body = undefined
app.use(express.json());

// Temporary user data
let user = { name: "Riya", age: 22 };

// 🟢 / = root path
app.get("/", (req, res) => {
  res.send("PUT Server running 🚀");
});

// PUT route (FULL UPDATE)
//🟢 app.put → server listens for PUT request
app.put("/update-user", (req, res) => {
  console.log("PUT /update-user called");
  console.log("Body:", req.body);

// const name = req.body.name;
// const age = req.body.age;
  const { name, age } = req.body;

// 🟢 Checks:
// name missing?
// OR age missing?
  if (!name || !age) {
    return res.status(400).json({
      message: "Name & Age required for PUT ❌"
    });
  }

  // FULL replace
  user = { name, age };

  res.json({
    message: "User fully updated (PUT) ✅",
    user
  });
});

// 🟢 Starts server
// 🟢 Port = 3003 (door number)
app.listen(3003, () => {
  console.log("PUT server running on http://localhost:3003");
});

// | Method | Purpose       |
// | ------ | ------------- |
// | POST   | Create new    |
// | PUT    | Replace fully |
