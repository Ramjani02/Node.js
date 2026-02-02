//server_exp.js:
// Concept Summary:
// 1.) Node.js alone → backend only → runs JS in terminal → cannot directly show web pages (document, HTML, etc. won’t work).
// 2.) Express.js → Node.js framework → helps send HTML pages to browser → so that the user can see frontend output.

import express from 'express';      // Importing Express.js library
const app = express();              // Creating an Express application
const PORT = 5000;                  // Port number for the local server

// Local objects
let username = "Ajay";
let age = 25;
let fruits = ["Apple", "Banana", "Mango"];

// Route to send data to frontend
app.get("/", (req, res) => {   // [req = Browser → Express → Node (to get data)],  [res = Node → Express → Browser (to send data)], [res.send() executes inside Node.js (backend)]...
    //  here / is not must but"" is must
    res.send(`
        <h1>Hello, ${username}!</h1>
        <p>Age: ${age}</p>
        <p>Fruits: ${fruits.join(", ")}</p>
    `);
});

app.listen(PORT, () => {
    console.log("Server running at http://localhost:${PORT}");
});