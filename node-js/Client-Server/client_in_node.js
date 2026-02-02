// Node 18+ fetch built-in, else use: npm i node-fetch
// const fetch = require("node-fetch"); // Uncomment if Node <18
// Fetch root message
fetch("http://localhost:3000/")
 .then(res => res.json())
 .then(data => console.log("Server Message:", data))
 .catch(err => console.error("Error:", err));
// Fetch users
fetch("http://localhost:3000/users")
 .then(res => res.json())
 .then(users => console.log("Users List:", users))
 .catch(err => console.error("Error:", err));