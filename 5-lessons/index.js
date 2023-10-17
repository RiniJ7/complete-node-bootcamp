
// Node.js program to demonstrate the 
// fs.readFileSync() method 


// const hello = 'Hello world';
// console.log(hello);



// Include fs module
const fs = require('fs');

// // Calling the fs.readFileSync() method
// // for reading file 'input1.txt'
// const textIn = fs.readFileSync('./input.txt', 'utf8');
// console.log(textIn);

// const textOut = `This is what we know about avocado : ${textIn}.\n Created on ${Date.now()}`;
// fs.writeFileSync('./output.txt', textOut);
// console.log('file written!');


fs.readFile('./start.txt', 'utf-8',(err,data1)=> {
	fs.readFile(`./${data1}.txt`,'utf-8', (err,data2)=> {
		console.log(data2);
		fs.readFile('./append.txt','utf-8', (err,data3) => {
			console.log(data3);
			fs.writeFile('./final.txt',`${data2} \n ${data3}`,'utf-8', err => {
console.log("your file has been written :-)");
			});
		});
	});
});

console.log('will read file');