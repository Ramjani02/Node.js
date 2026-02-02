//crypto.js:
// Definition:
// The crypto module in Node.js provides cryptographic functionality — like encrypting, decrypting, hashing, and generating secure random data.

// crypto module → (security-related operations).
// Example: password hash -> secret key generate.

// Eg: 1
const crypto = require('crypto');

const hash1 = crypto.createHash('sha256').update('mypassword').digest('hex');//SHA-256 is a secure hashing method
//SHA-256 = Secure Hash Algorithm, 256-bit 
//It always produces a 256-bit (32-byte) output.
//In hex format, that becomes 64 characters
console.log("Hashed password1:", hash1);

// Eg: 2

const hash2 = crypto.createHash('sha256').update('Ajuu123').digest('hex');
console.log("Hashed password2:", hash2);


const hash3 = crypto.createHash('sha256').update('Ajuu1234').digest('hex');
console.log("Hashed password2:", hash3);



// Note:
// Hexadecimal (Base 16): (0-9) & (A - F)
// Sha256 - Secure Hash Algorithm - 256 bits version

//➡️ 256 bits = 32 bytes = 64 hex characters

//3️⃣ Avalanche Effect
//Change one character in the input → the entire hash changes.

//1️⃣ One-way
//You can convert text → hash,
//but you cannot convert hash → text.

//Performs 64 rounds of transformations
//Scrambles the data completely
//Produces a fixed-length hex result