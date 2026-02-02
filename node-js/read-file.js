//Readfile.js:
/* SHORT STORY:
🟦 You tell your mom:
“Mom, make coffee (async)”
→ She goes to kitchen (task started, but not finished)

🟧 Meanwhile you tell your friend:
“Explain me this topic (sync)”
→ He explains right away → you finish learning

🟩 Later mom comes:
“Coffee is ready!”
→ Now async finishes
So output order becomes:
Friend explanation (sync)
Coffee ready (async)
Your program does the SAME thing. */

// Node.js File Reading Example
const fs = require('fs');
const fileName = 'read123.txt';
const defaultContent = 'Hello Node.js! This is a sample text file.';

// Step 1: Check if file exists, if not create it
if (!fs.existsSync(fileName)) {
//existsSync → check file exists
//If not exist → create it
    fs.writeFileSync(fileName, defaultContent);
    console.log(`File '${fileName}' created with default content.`);
}

//✔ SYNC = Blocking → Node waits → finishes immediately
//✔ ASYNC = Non-blocking → Node does NOT wait → callback runs late

// Step 2: Asynchronous File Reading (Non-blocking): 
// Async (non-blocking) → callback executes later, Node.js moves to next code immediately.
fs.readFile(fileName, 'utf8', (err, data) => {   // Don't wait Node.js... 
//fs.readFile(fileName+'x', 'utf8', (err, data) => {    //To make error
// Async (non-blocking) → callback executes later
    if (err) {
        console.error('Async Error reading file:', err);
        return; //// ⛔ stop here (do NOT run below lines)
    }
    console.log('Async File Content:\n', data);
});

// Step 3: Synchronous File Reading (Blocking)
try {
    const data = fs.readFileSync(fileName, 'utf8');   // It will be wait Node.js...
    //const data = fs.readFileSync(fileName+'s', 'utf8');// To make ana error
    console.log('Sync File Content:\n', data);
} catch (err) {
    console.error('Sync Error reading file:', err);
}

//Sync = blocking → "Wait until I finish"
//Async = non-blocking → "Continue your work, I’ll call you later"


/*⭐ Now look at your actual code order:
1️⃣ File create (if not exists)
2️⃣ Async read → but Node does NOT wait
3️⃣ Sync read → Node waits & finishes immediately
4️⃣ Async callback prints later */ 

/*⭐ SUMMARY IN SUPER SIMPLE WORDS
Sync:
Runs immediately
Finishes immediately
Blocks everything

Async:
Starts first
But finishes later
Therefore prints last */

//FINAL ANSWER IS:
//Async starts first, but sync finishes first.
//That’s why sync output comes before async output


/*⭐ Why Node.js uses Async by default?
Because Node.js is designed to handle:
->Many users
->Many requests
->Fast operations

If Node waited for everything, it would be slow.
Async makes Node.js very fast and powerful ✨*/

/* ✔ UTF-8:
Converts bytes → readable text
Supports all languages
Supports emojis
Most common encoding used today*/