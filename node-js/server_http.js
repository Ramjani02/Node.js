//server_http.js:
import http from 'http';

//const http = require("http"); //For me

// Local variables
let username = "Ramjuu";
let count = 0;

// Create HTTP server
const server = http.createServer((req, res) => {

    // Set content type as HTML
    res.writeHead(200, {"Content-Type": "text/html"});//200-> called as "status code"
    //Yes, I must put a number because that’s how the syntax of writeHead works.”
    
    // Send HTML content
    res.write(`<h1>Hello, ${username}</h1>`);
    // Display current count
    res.write(`<p>Counter: ${count}</p>`);
    res.end(); // end response
});

// Update count every second (backend only)
setInterval(() => {
    count++;
    console.log("Backend Count:", count); // Terminal log
//if (count===6) clearInterval(interval); //"clearInterval"for stop the  repeation
}, 1000);

// Listen on port 3000
// ❓ Can we give any number?
// ✔ Yes, mostly.
// Valid port range:
// 1024 – 65535 (safe to use)

server.listen(4000, () => {
   console.log("Server running at http://localhost:4000");
   //localhost = your computer(The house)
   //4000 = door number (port) where your server is waiting

   //console.log( `http://localhost:${server.address().port}`);//This way even if you change the port later, it will still print correctly
   
});

 // Browser (Client)
    //    ↓ sends HTTP request (req)
    // Node (HTTP module)
    //    ↓
    // Express (Middleware layer)
    //    ↓ handle route, logic, response
    // Browser (Client)
    //    ↑ receives response (res)


//404 → Page not found
//500 → Server error
//301 → Page moved
//302 → Redirect
//403 → Forbidden
//404 → Page not found


/*const port = 4000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});*/
//Now the code works because:
//port is defined (const port = 4000)
//You can safely use ${port} inside console.log