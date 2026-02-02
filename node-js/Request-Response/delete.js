const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
let user = {
 id: 1,
 name: "Ajay",
 age: 25
};
app.delete("/user", (req, res) => {
 user = {}; // delete user data
 res.json({
 message: "DELETE: User deleted successfully!",
 deleted: true
 });
});
app.listen(4000, () => console.log("DELETE Server → http://localhost:4000"));