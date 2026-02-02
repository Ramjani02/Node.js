//Local.js:
// Local variable
let username = "Ajay";
let age = 25;
// Local function
function greetUser(name) {
 console.log("Hello, " + name + "!");
}
// Local array
const fruits = ["Apple", "Banana", "Mango"];
// Local object
const person = {
 name: "Ajay",
 profession: "Frontend Developer"
};
// Using the local variables/functions
console.log("Username:", username);
console.log("Age:", age);
greetUser(username);
console.log("Fruits:", fruits);
console.log("Person:", person);
// Local variables inside function scope
function counter() {
 let count = 0; // local to this function
 let interval = setInterval(() => {
 count++;
 console.log("Count:", count);
 if (count === 3) clearInterval(interval);
 }, 1000);
}
counter();
// Note:
// Local = inside (private to file or function)
// Global = outside (accessible everywhere)
// Global type:
// console.log("directory:", __dirname);
// console.log("Files:", __filename);