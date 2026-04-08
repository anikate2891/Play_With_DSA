let prompt = require('prompt-sync')();
let num = prompt("Enter a number: ");

if(num <=1 ) console.log('It is a not prime number');
else if (num == 2) console.log('It is a prime number');
else if (num % 2 == 0) console.log('It is a not prime number');
else {
    let isPrime = true;
    for(let i=0; i<= Math.floor(Math.sqrt(num)); i+=2) {
        if(num % i == 0) {
            isPrime = false;
            break;
        }
    }
    console.log(isPrime ? 'It is a prime number' : 'It is a not prime number');
}
