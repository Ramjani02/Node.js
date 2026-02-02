//Appendfile.js:
// Node.js Append File Example
const fs = require('fs');
const fileName = 'append.txt';
const initialContent = 'Hello, this is the initial content.';

// Step 1: Check if file exists, if not create it
if (!fs.existsSync(fileName)) {
    fs.writeFileSync(fileName, initialContent);
    console.log(`File '${fileName}' created with initial content.`);
}

// Step 2: Append new content asynchronously
fs.appendFile(fileName, '\nAppended text at ' + new Date().toLocaleString(), (err) => {
    if (err) {
        console.error('Error appending text:', err);
        return;
    }
    console.log('Text appended successfully!');

    // Step 3: Read the file to confirm append
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('\nUpdated File Content:\n', data);
    });
});