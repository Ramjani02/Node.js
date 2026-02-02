//PipeStream.js:
const fs = require('fs');

const readStream = fs.createReadStream('example.txt');
const writeStream = fs.createWriteStream('copy.txt');

// Pipe readStream to writeStream
readStream.pipe(writeStream);

console.log('File copied using streams!');