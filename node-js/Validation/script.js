function register() {
 const email = document.getElementById("email").value;
 const password = document.getElementById("password").value;
 fetch("http://localhost:3000/register", {
 method: "POST",
 headers: {
 "Content-Type": "application/json",
 },
 body: JSON.stringify({ email, password }),
 })
 .then((res) => res.json())
 .then((data) => {
 console.log("Response:", data);
 document.getElementById("output").innerText =
 JSON.stringify(data, null, 2);
 })
 .catch((err) => {
 console.error("Error:", err);
 });
}