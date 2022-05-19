const fs = require('fs')

const person = JSON.parse(fs.readFileSync('1-json.json').toString())
console.log(JSON.stringify(person))

person.name = "Djeison"
person.age = 28

fs.writeFileSync('1-json.json', JSON.stringify(person))