let prompt = require('prompt-sync')()

const n = Number(prompt('Enter the number: ')) // 3

for (let i = 1; i<=n; i++) {
    for (let j = 1; j<=(n-i)+1; j++) {
        process.stdout.write('* ')
    }
    console.log()
}