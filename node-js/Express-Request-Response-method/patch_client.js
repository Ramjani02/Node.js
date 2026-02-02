//Client.js:
//👉 PATCH = PARTIAL UPDATE
// URL == Server Address
fetch("http://localhost:3003/update-user", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    age: 23,
   
  })
})
  .then(res => res.json())
  .then(data => {
    console.log("Response from server:");
    console.log(data);
  })
  .catch(err => console.error(err));