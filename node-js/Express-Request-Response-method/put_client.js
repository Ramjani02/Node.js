// Client.js:
//👉 PUT = FULL UPDATE
// ❌ Old data is not kept
// ✅ Everything is replaced

fetch("http://localhost:3003/update-user", {  //-->/update-user → what we want to update

//“I want to UPDATE something fully”
  method: "PUT",

  //Header = extra information
  headers: {
    "Content-Type": "application/json"
  },


//  🟢 body → data we send
// 🟢 JSON.stringify →
// JS object → JSON TEXT (internet language)
  body: JSON.stringify({

    name: "Ramjani",
    age:23
  })
})

// 🟢 Server sends JSON text
// 🟢 .json() → converts JSON → JS object
  .then(res => res.json())

  //🟢 data → server response (JS object)
  .then(data => {
    console.log("Response from server:");
    console.log(data);
  })

  //🟢 Runs only if error happens
  .catch(err => console.error(err));