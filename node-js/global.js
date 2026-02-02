//global
console.log("Hello, Node.js!");
console.log("File name:", __filename); // This one is didn't show the frontend console pages 
//because this is a backend processes of nodejs...
console.log("Directory name:", __dirname); // This one is didn't show the frontend console pages 
//because this is a backend processes of nodejs...
// document.write("Hello!"); // This is not working frontend...
setTimeout(() => {
 console.log("This runs after 2 seconds");
}, 2000);
let count = 0;
let interval = setInterval(() => { // Setinterval: Purpose - task-repeated
 count++;
 console.log("Hello");
 if (count === 5) clearInterval(interval); // Clearinterval: Purpose - stop the task-repeated
}, 5000);
// Notes:
// Syntax:
// setInterval(callback, delay);
// callback - start to run.
// delay - (1000 = 1 sec).