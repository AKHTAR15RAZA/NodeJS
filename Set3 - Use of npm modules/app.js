//First time run "npm i"

const validator = require('validator')
const getNotes = require('./notes.js')
const chalk = require('chalk');

const message = getNotes()
console.log(message)

console.log(validator.isEmail('akhtarom'))
console.log(validator.isURL('https://akhtarom.com'))

console.log(chalk.green.inverse.bold('Success!'))