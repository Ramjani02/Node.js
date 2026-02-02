//Delete_Request:
//Server.js:
const express = require("express");
const cors = require("cors");

const app = express();

//Accept requests from anywhere”
app.use(cors());
app.use(express.json());

// Temporary user data
let user = { name: "Ramjani", age: 23 };

// Test GET
app.get("/", (req, res) => {
  res.send("DELETE Server running 🚀");
});

// DELETE route
//"If client sends DELETE request to /delete-user, I will handle it”
app.delete("/delete-user", (req, res) => {
  console.log("DELETE /delete-user called");
  

  if (!user) {
    return res.status(404).json({
      message: "No user to delete ❌"
    });
  }
const body=req.body;
// 🔹 We remove the user from server memory
// 🔹 This is the actual DELETE
if (req.body.name==user.name){
  user.name="";
  console.log(user);
}


  res.json({
    message: "User deleted ✅",
    user
  });
});

app.listen(3003, () => {
  console.log("DELETE server running on http://localhost:3003");
});


// 1️⃣ Server running
// 2️⃣ Client sends DELETE request
// 3️⃣ Server finds matching route
// 4️⃣ Server checks if user exists
// 5️⃣ Server deletes user
// 6️⃣ Server sends response
// 7️⃣ Client prints response
