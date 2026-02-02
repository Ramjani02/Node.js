//basicbuffer.js:
// Create a buffer with a string
const buf = Buffer.from('Hello Node.js');
console.log(buf);         // Prints binary data <Buffer 48 65 6c 6c 6f ...>
console.log(buf.toString()); // Convert buffer back to string