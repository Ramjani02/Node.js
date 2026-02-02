//Readdirectory.js:
// Import File System module

//A directory = folder
//Reading a directory = getting the list of all files inside that folder

const fs = require('fs');
const path = './';  // Current directory (you can change to any folder path) // './unknownfolder';-> to make error

// ✅ Asynchronous Way (Non-blocking)
fs.readdir(path, (err, files) => {
    if (err) {
        console.error(' Async Error reading directory:', err);
        return;
    }

    console.log('Async Directory Contents:');
    files.forEach(file => {
        console.log(file);
    });
});

// ✅ Synchronous Way (Blocking)
try {
    const files = fs.readdirSync(path);
    console.log('\nSync Directory Contents:');
    files.forEach(file => {
        console.log(file);
    });
} catch (err) {
    console.error(' Sync Error reading directory:', err);
}



// | Aspect                        | Async             | Sync                |
// | ----------------------------- | ---------------   | -----------------   |
// | Returns value immediately?    | ❌ No            | ✔ Yes               |
// | Blocks the code?              | ❌ No            | ✔ Yes               |
// | Can store result in variable? | ❌ No            | ✔ Yes               |
// | Where is result available?    | Inside callback   | Returned directly   |
// | Example                       | fs.readdir        | fs.readdirSync      |
