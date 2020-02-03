const fs = require('fs')
const path = require('path')

const currentFile = path.normalize(path.join(__dirname,'/input.txt'))

const buffer = fs.readFileSync(currentFile)

const inputs = buffer.toString().split('\r\n')

const fuels = inputs.map(calculateFuels).reduce(sumOfFuels)

function calculateFuels(mass){
    return Math.floor(mass / 3) - 2
}

function sumOfFuels(acc, curVal){
    return acc + curVal
}
console.log(fuels)

