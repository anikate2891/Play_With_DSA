const prompt = require('prompt-sync')();
let n = Number(prompt('Enter the Number: '))
let copy = n, sq = n*n, count = 0;

while(n>0){
    count++;
    n = Math.floor(n/10);
}

if(sq%Math.pow(10,count)===copy){
    console.log(`${copy} is an Automorphic Number`);
}else{
    console.log(`${copy} is not an Automorphic Number`);
}