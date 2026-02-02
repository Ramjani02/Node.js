const http = require("http");
const server = http.createServer((req, res) => {
 res.writeHead(200, { "Content-Type": "text/plain" });
 res.end("Hello from the Server!");
});
server.listen(3000, () => {
 console.log("Server running on http://localhost:3000");
});


// 🧠 Final Summary (Very Simple)
// require("http") → get server tools
// createServer → create server
// req → client request
// res → server response
// 200 → success
// Content-Type → type of data
// res.end() → send & close
// 3000 → port (door number)


//🔄 FLOWCHART (LOGIC FLOW)

// START
//   |
//   |-- Start Server
//   |     |
//   |     |-- server.listen(3000)
//   |     |-- Server waiting
//   |
//   |-- Run Client
//         |
//         |-- http.get()
//         |
//         |-- Request sent to server
//         |
//         |-- Server receives request
//         |
//         |-- Server sends response
//         |
//         |-- Client receives data chunks
//         |
//         |-- Client receives end event
//         |
//         |-- Client prints response
//   |
//  END
