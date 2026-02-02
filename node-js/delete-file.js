//Deletefile.js:
// Node.js Delete File Example
const fs = require('fs');
const fileName = 'check.txt';

// Step 1: Create file first (only if it does not exist) 
if (!fs.existsSync(fileName)) {
    fs.writeFileSync(fileName, 'This file will be deleted.');
    console.log(`File '${fileName}' created for deletion test.`);
}

// Step 2: Asynchronous delete (non-blocking)
fs.unlink(fileName, (err) => {
    if (err) {
        console.error('Error deleting file:', err);
        return;
    }
    console.log('Async: File deleted successfully!');
});

// Step 3: Synchronous delete (blocking) - safer inside try/catch
try {
    // Recreate file again to demonstrate sync delete
    fs.writeFileSync(fileName, 'This file will be deleted again (sync).');

    fs.unlinkSync(fileName);
    console.log('Sync: File deleted successfully!');
} catch (err) {
    console.error('Sync Error deleting file:', err);
}