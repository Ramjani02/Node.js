// 1.) Install another Dependency (Express)
// npm install express
// 2.) Using express to create a simple server
const express = require('express');
const app = express();
app.get('/', (req, res) => {
 res.send('<h1>Hello, Ajay! Welcome to Express Server</h1>');
});
app.listen(3000, () => console.log("Server running at http://localhost:3000"));