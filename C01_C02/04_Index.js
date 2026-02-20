const prompt = require('prompt-sync')({ sigint: true });


let p = prompt('Enter Proncipal: ')
let r = prompt('Enter Rate od Interest: ')
let t = prompt('Enter Intertime: ')

console.log( (p* Math.pow(1+(r/100),t)-p).toFixed(2) )