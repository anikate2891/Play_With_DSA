const prompt = require('prompt-sync')();
let num = Number(prompt('Enter a number: '))

//ISBN - (1*n1 + 3*n2..1*n13) % 10 == 0