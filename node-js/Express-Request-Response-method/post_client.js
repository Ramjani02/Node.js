//Client.js:
// 🔸 GET vs POST
//     GET → ask / check
//     POST → send / create

fetch("http://localhost:3003/create-user", {
 method: "POST",
 headers: {
 "Content-Type": "application/json"
 },
 body: JSON.stringify({
 name: "Ramjani",
 age: 23
 })
})
 .then(res => res.json())
 .then(data => {console.log("Response from server:", data);})//gives success value
 .catch(err => console.error(err));//gives error value
//data and err just a variable name can change anything

 //About POST Method:

 //Real-world example 🏫
// Client → a student filling a registration form
// Server → school office
// POST → “Here is my data, please save it”
// POST is used to SEND data to the server.

//About FETCH()

// fetch → browser tool to talk to server
// "http://localhost:3003/create-user" →
// 👉 address of the server
// 👉 create-user = door name on server

//About METHOD

// method → what type of request
// "POST" → sending data

// //About HEADERS

// headers → extra information about data
// "Content-Type" → what kind of data
// "application/json" → “I am sending JSON data” application word is must
// application/json
// text/plain
// text/html


//About BODY
// body → actual data
// JSON.stringify → convert JS object → text
// { name, age } → user details

//About .then

// .then → “when server replies”
// res → response from server
// res.json() → convert reply to JS object

//About .then(data)

// data → server message
// console.log → show resul

//About .catch

// .catch → if something goes wrong
// err → error message




// FLOW (IMPORTANT 🔁)
// 1️⃣ Client sends
// JS Object → JSON.stringify → TEXT

// 2️⃣ Server replies
// TEXT → Client receives TEXT

// 3️⃣ Browser converts back
// TEXT → JS Object (res.json())