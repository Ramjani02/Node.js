// Import express
const express = require("express");
// Create Router object
const router = express.Router();
// GET /user/profile
router.get("/profile", (req, res) => {
 res.send("User Profile Page");
});
// GET /user/settings
router.get("/settings", (req, res) => {
 res.send("User Settings Page");
});
// Export router
module.exports = router;
// Test in Browser (GET requests):
// | URL | Result |
// | -------------------------------------------------------------------------- | ------------------ |
// | [http://localhost:3000/](http://localhost:3000/) | Home Page |
// | [http://localhost:3000/about](http://localhost:3000/about) | About Page |
// | [http://localhost:3000/user/profile](http://localhost:3000/user/profile) | User Profile Page |
// | [http://localhost:3000/user/settings](http://localhost:3000/user/settings) | User Settings Page |