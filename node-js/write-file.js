//Writefile.js:
// Node.js File Writing Example
const fs = require('fs');
const fileName = 'write.txt';  //unknown path/write.txt -> for error
const contents = 'Hello Node.js! This is written using writeFile.\n';
const additionalContent = 'This line is appended to the file.\n';

// ---------------------------
// 1. Asynchronous File Writing (Non-blocking)
// ---------------------------
fs.writeFile(fileName, contents, 'utf8', (err) => {
    if (err) {
        console.error('Async Write Error:', err);
        return;
    }
    console.log(`Async: '${fileName}' has been written successfully!`);

    // Optional: Append after writing
    fs.appendFile(fileName, additionalContent, 'utf8', (err) => {
        if (err) {
            console.error('Async Append Error:', err);
            return;
        }
        console.log("Async: Additional content appended successfully!");
    });
});

// ---------------------------
// 2. Synchronous File Writing (Blocking)
// ---------------------------
try {
    fs.writeFileSync(fileName, contents, 'utf8');
    console.log(`Sync: '${fileName}' has been written successfully!`);

    // Optional: Append after writing
    fs.appendFileSync(fileName, additionalContent, 'utf8');
    console.log("Sync: Additional content appended successfully!");
} catch (err) {
    console.error('Sync Write\n Append Error:', err);
}