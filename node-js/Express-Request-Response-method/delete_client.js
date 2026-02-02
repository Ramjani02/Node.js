//Client.js:
//👉 DELETE = remove something from server memory / database
fetch("http://localhost:3003/delete-user", {
  method: "DELETE",
   headers: {
    "Content-Type": "application/json"
  },
   body: JSON.stringify({
    name: "Ramjani",
})
})
  .then(res => res.json())
  .then(data => {
    console.log("Response from server:");
    console.log(data);
  })
  .catch(err => console.error(err));