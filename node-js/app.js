//apps.js:
function sayHello(name){
    return `Hello, ${name}!`;
}
console.log("Hai")
console.log(sayHello("Ajay"));
module.exports = sayHello;  // export sayHello

//app.js:
const greeting = require('./greets'); // import custom module
console.log(greeting('Ajay'));