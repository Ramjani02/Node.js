//WritingStream.js:
const fs = require('fs');

// Create a writable stream
const writeStream = fs.createWriteStream('output.txt');

// Write chunks
writeStream.write('Hello \n');
writeStream.write('World!\n');
writeStream.end();  // Close the stream

writeStream.on('finish', () => {
    console.log('Writing completed!');
});