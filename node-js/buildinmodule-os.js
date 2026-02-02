//builtinmodule_os.js:
// Definition:
// The os (Operating System) module in Node.js provides functions to get information about the computer’s operating system — like platform, CPU, memory, hostname, and more.

const os = require('os');

console.log("OS Platform:", os.platform());
console.log("OS Version:", os.version());
console.log("CPU Architecture:", os.arch());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("Home Directory:", os.homedir());