// 1.) Initialize a Node.js Project
// mkdir myproject
// cd myproject
// npm init -y
// Creates package.json file
// This file tracks project info & dependencies
// 2.) Install a Dependency
// Example: Install lodash
// npm install lodash
// Using lodash in Code
const _ = require('lodash');
const numbers = [10, 5, 20, 8];
const maxNumber = _.max(numbers);
console.log("Max number is:", maxNumber);
// Output:
// Max number is: 20