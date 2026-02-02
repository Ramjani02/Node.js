//Without HTTP, you cannot
//send requests
//receive responses
const http = require("http");//importing HTTP
//http.get() → Sending a to server and get RESPONSE from server through the port "localhost:3000"
//(res) => { → Response from server ,It contains:data sent by server,headers,status code
http.get("http://localhost:3000", (res) => { 
//Server sends data piece by piece, not all at once
//data = "" -> 
// “Let me keep an empty box and collect everything.”
let data = "";
//server send a response like a piece by piece->Each piece is called "CHUNK" ->all chunk store in "data"
// 👉 res = response from the server
// 👉 .on() = “listen for an event”
res.on("data", chunk => {
data += chunk;//store the chunk into "data"
});
//when the server dones sending Response the console will give the all response together
res.on("end", () => {
//() means:This function takes NO input
//Event names are strings
//Strings must be in quotes->"end"
console.log("Response from server:", data);
});
});


// Client → sends request
// Server → sends data in pieces
// Client → listens using res.on("data")
// Client → collects chunks
// Server → finishes sending
// Client → res.on("end") fires


// 🔄 COMPLETE FLOW (VERY EASY)
// Client sends request → http.get
// Server sends data in small pieces →chunk
// Client collects pieces → data
// Server finishes → end
// Client prints full response



// | Term        | Meaning                 |
// | ----------- | ----------------------- |
// | `http.get`  | Client sends request    |
// | `localhost` | Your own computer       |
// | `3000`      | Server’s door (port)    |
// | `res`       | Server response         |
// | `chunk`     | Small piece of data     |
// | `data`      | Collected full response |
// | `end`       | Server finished sending |
