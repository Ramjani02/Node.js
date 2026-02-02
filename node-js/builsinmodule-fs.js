//builtinmodule_fs.js:
// Definition:
// (File System) is a built-in Node.js module that allows you to work with files and directories 
// on your computer — like reading, writing, creating, deleting, or updating files.

// Simple meaning:
// fs module → gives Node.js the power to handle files (File System operations).

// Example 1: Write with nodejs:
const fs = require('fs'); // fs = file system module
fs.writeFileSync('test1.txt', 'Hello அஜய்'); // file creation
console.log("File Created Successfully...")


// Example 2: Read with nodejs:
const files = require('fs');

// Create file
files.writeFileSync('test.txt', 'Hello Ajay');

// Read file content
const content = files.readFileSync('test.txt', 'utf8');  // Unicode Transformation Format – 8-bit
console.log("File content:", content);

// utf-8.txt:
// UTF8:
//     Unicode Transformation Format – 8-bit

// Explanation in simple way:
//     Unicode → universal standard for representing characters (letters, numbers, symbols, emojis) from all languages.
//     Transformation Format → way to encode Unicode characters into bytes.
//     8-bit → uses 1 to 4 bytes per character.

// Eg of unicode:
//     A → U+0041  
//     அ → U+0B85  
//     😊 → U+1F60A

// Note:
//     “Decode binary data into human-readable text properly.”

//     Without it → Node treats content as raw bytes (Buffer),
//     With it → Node converts bytes → proper characters using UTF-8 standard.


// |  Bytes Used | Unicode Range      | Example Characters                                | Explanation                     |
// | :---------: | :----------------- | :------------------------------------------------ | :------------------------------ |
// | *1 byte*  | U+0000 – U+007F    | English letters (A–Z, a–z), digits, basic symbols | Old ASCII set                   |
// | *2 bytes* | U+0080 – U+07FF    | Latin-1 accents (é, ñ), Greek, Cyrillic           | European & Middle East scripts  |
// | *3 bytes* | U+0800 – U+FFFF    | Tamil (அ, க), Hindi, Chinese                    | Asian languages                 |
// | *4 bytes* | U+10000 – U+10FFFF | Emoji (😊), rare symbols                         | Modern emojis & ancient scripts |


// | Character type           | Bytes used |
// | ------------------------ | ---------- |
// | English letters / digits | 1 byte     |
// | Accented letters (é, ñ)  | 2 bytes    |
// | Indian / Chinese letters | 3 bytes    |
// | Emojis / Rare symbols    | 4 bytes    |


// "A"       → [41]                → 1 byte  
// "ñ"       → [C3 B1]             → 2 bytes  
// "அ"       → [E0 AE 85]         → 3 bytes  
// "😊"      → [F0 9F 98 8A]       → 4 bytes