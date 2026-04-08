let prompt = require('prompt-sync')()
console.log('Enter 1 for area of Rectangel')
console.log('Enter 2 for area of Square ')
console.log('Enter 3 for area of Triangle')
let n = Number(prompt('Enter Number: '))

switch(n){
    case 1:{
        const len = Number(prompt('Enter Length: '))
        const breadth = Number(prompt('Enter Breadth: '))
        console.log(len*breadth);
        break
    }
    case 2:{
        const side = Number(prompt('Enter Side: '))
        console.log(side*side)
        break
    }
    case 3:{
        const height = Number(prompt('Enter Height: '))
        const base = Number(prompt('Enter Base: '))
        console.log((height*base)/2)
        break
    }
    default: console.log('Invalid Number')
}
