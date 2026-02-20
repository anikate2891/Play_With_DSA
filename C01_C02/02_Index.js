const prompt = require('prompt-sync')({ sigint: true });

let age = +prompt('Enter Your Age: ')
console.log(typeof (age));