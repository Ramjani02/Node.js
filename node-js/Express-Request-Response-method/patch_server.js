//Patch_Request:
//Server.js:
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

// 🟢 Convert JSON text → JS object
// 🟢 Needed to read req.body
app.use(express.json());

// Temporary user data
let user = { name: "Ramjani", age: 22 };

// Test GET
app.get("/", (req, res) => {
  res.send("PATCH Server running 🚀");
});

// PATCH route (PARTIAL UPDATE)
app.patch("/update-user", (req, res) => {
  // console.log("PATCH /update-user called");
  // console.log("Body:", req.body);
//MY OWN------------------------------------------------------
 const sample1="PATCH /update-user called"
 const sample2= req.body

  if (!user) {
    return res.status(404).json({
      message: "User not found ❌"
    });
  }

  // Partial update
  //merge data
  user = { ...user, ...req.body }; 

  res.json({ //🟢 JS object → JSON text
    message: "User partially updated (PATCH) ✅",
    user,
    //MY OWN------------------------------------------------
    sample:sample1,
    sam:sample2
  });
});

app.listen(3003, () => {
  console.log("PATCH server running on http://localhost:3003");
});


// Workflow:

// client.js
//    |
//    | PATCH (JSON)
//    ↓
// Express Server (3003)
//    |
//    | console.log(req.body)
//    ↓
// Response JSON
