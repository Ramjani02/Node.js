//Checkfile.js:
// Check File Concept in Node.js
const fs = require('fs');
const fileName = 'check.txt';
const defaultContent = 'Hello! This file was created automatically because it did not exist.';

// Step 1: Check if file exists
if (fs.existsSync(fileName)) {
    console.log(`✅ File '${fileName}' already exists.`);

    // Step 2: Read file content (Sync way)
    try {
        const data = fs.readFileSync(fileName, 'utf8');
        console.log('File Content:\n', data);
    } catch (err) {
        console.error('Error reading file:', err);
    }

} else {
    console.log(`❌ File '${fileName}' does not exist. Creating it now...`);

    // Step 3: Create file with default content
    try {
        fs.writeFileSync(fileName, defaultContent);
        console.log(`✅ File '${fileName}' created successfully!`);
    } catch (err) {
        console.error('Error creating file:', err);
    }
}