console.log('Welcome! This is output from the index.js file.')

// Lesson One: Declaring Variables:

// eslint-disable-next-line no-undef
name1 = 'Gideon'
const name2 = 'Gideon2'
const name3 = 'Gideon3'
const name4 = 'Gideon4'

// eslint-disable-next-line no-undef
console.log(name1)
console.log(name2)
console.log(name3)
console.log(name4)

// Using var to declare a variable means it can be easily reassigned subsequently:
// eslint-disable-next-line no-var
var car = 'tesla'
// eslint-disable-next-line no-var
car = 'tesla 2.0'

console.log(car) // this gives "tesla 2.0"

// When you use a let keyword to declare a variable, you cannot redeclare the same variable using the let keyword.
// - this means that the variableName reference has been reserved by let.

let car2 = 'tesla'
// let car2 = "tesla 2.0"

// console.log(car2) // you get an error now

car2 = 'tesla 2.0' // even with using 'let', you can still reassign using this
console.log(car2)

// If you use const to declare a variable, there will be no way for you to reassign the variable:

const car3 = 'tesla'
// let car3 = "tesla 2.0" // this gives an error
// car3 = "tesla 2.0" // this gives an error
console.log(car3)
