//ReadingStream.js:
const fs = require('fs');

// Step 1: Create example.txt if it doesn't exist
if (!fs.existsSync('example.txt')) {
    fs.writeFileSync('example.txt', 'Hello! This is example file content.\nSecond line of text.');
    console.log("example.txt created with default content.");
}

// Step 2: Read the file using stream
const readStream = fs.createReadStream('example.txt', 'utf8');

readStream.on('data', (chunk) => {
    console.log('New Chunk Received:');
    console.log(chunk);
});

readStream.on('end', () => {
    console.log('Finished reading file.');
});

readStream.on('error', (err) => {
    console.error('Error:', err);
});