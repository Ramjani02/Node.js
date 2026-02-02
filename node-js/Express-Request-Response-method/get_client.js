//Client.js:
//👉 GET = ASK / READ
fetch("http://localhost:3003/", {
 method: "GET"
})
 .then(res => res.json())
 .then(data => {
 console.log("Response from server:");
 console.log(data);
 //console.log(typeof data);//for conformation about JSON to JSobject
 })
 .catch(err => console.error(err));

//1
//👉 fetch means send a request
// "http://localhost:3003/get-user"
// localhost → your own computer
// 3003 → server door number
// /get-user → what you are asking for

//2
// 🔹 method: "GET"
// 👉 This tells:
// “I am only reading data”
// ⚠️ GET:
// ❌ No body
// ❌ No data sending
// ✅ Only receiving data