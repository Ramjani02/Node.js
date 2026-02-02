//builtinmodule_path.js:
// Definition:
// The path module in Node.js provides utilities for working with file and directory paths — like joining, resolving, or extracting parts of a file path.

// Import the built-in 'path' module
const path = require('path');

// Sample file path
const filePath = '/users/ajay/docs/file.txt';

// 1️.) Get directory name
console.log("Directory:", path.dirname(filePath));   
// Output → /users/ajay/docs

// 2️.) Get base file name
console.log("File name:", path.basename(filePath));  
// Output → file.txt

// 3.) Get file extension
console.log("Extension:", path.extname(filePath));   
// Output → .txt

// 4.) Join multiple paths together
console.log("Join:", path.join('/users', 'ajay', 'docs', 'newfile.txt'));  
// Output → /users/ajay/docs/newfile.txt

// 5.) Resolve an absolute path (Current directory)
console.log("Resolve:", path.resolve('docs', 'file.txt'));  
// Output → (absolute path like) C:\Users\Ajay\docs\file.txt