const express = require('express');
const app = express();
// Route: Home page
app.get('/', (req, res) => {
 res.send('<h1>Hello, Ramjnai!</h1><p>Welcome to my Express server</p>');
});
// Route: About page
app.get('/about', (req, res) => {
 res.send('<h2>About Page</h2><p>This is an example Express app.</p>');
});
// Start server
app.listen(3000, () => {
 console.log("Server running at http://localhost:3000");
});
