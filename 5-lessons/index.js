
// Node.js program to demonstrate the 
// fs.readFileSync() method 


// const hello = 'Hello world';
// console.log(hello);



// Include fs module
const fs = require('fs');

// Calling the fs.readFileSync() method
// for reading file 'input1.txt'
const textIn = fs.readFileSync('./input.txt', 'utf8');
console.log(textIn);

const textOut = `This is what we know about avocado : ${textIn}.\n Created on ${Date.now()}`;
fs.writeFileSync('./output.txt', textOut);
console.log('file written!');