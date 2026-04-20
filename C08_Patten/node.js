let prompt = require('prompt-sync')()
const n = Number(prompt('Enter the number: ')) // 3

for (let i=1; i<=n; i++) {
    for (let j = 1; j<=n-i; j++) {
        process.stdout.write('  ')
        // process.stdout.write(' ')
    }
    for (let k = 1; k<=i; k++) {
        process.stdout.write('* ')
    }
    console.log()
}
