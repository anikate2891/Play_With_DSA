const prompt = require('prompt-sync')();
let num = Number(prompt('Enter the Number: '))
let temp = num;
let count = 0

while(temp>0){
    count++;
    temp = Math.floor(temp/10);
}
console.log(`The total count of ${num} is ${count}`)