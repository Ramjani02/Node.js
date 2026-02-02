const express = require("express");
const User = require("../models/User");
const router = express.Router();
// CREATE
router.post("/users", async (req, res) => {
 try {
 const user = await User.create(req.body);
 res.status(201).json(user);
 } catch (error) {
 res.status(400).json({ message: error.message });
 }
});
// READ
router.get("/users", async (req, res) => {
 try {
 const users = await User.find();
 res.json(users);
 } catch (error) {
 res.status(500).json({ message: error.message });
 }
});
// UPDATE
router.put("/users/:id", async (req, res) => {
 try {
 const user = await User.findByIdAndUpdate(
 req.params.id,
 req.body,
 { new: true }
 );
 res.json(user);
 } catch (error) {
 res.status(400).json({ message: error.message });
 }
});
// DELETE
router.delete("/users/:id", async (req, res) => {
 try {
 await User.findByIdAndDelete(req.params.id);
 res.json({ message: "User deleted successfully" });
 } catch (error) {
 res.status(400).json({ message: error.message });
 }
});
module.exports = router;