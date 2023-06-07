/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-var
var a = [1, 3, 5, 7, 10]

console.log(a.length)
a[20] = 15 // this will create 16 spaces with 15 empty spaces in between - JavaScript is helpful - it doesn't work like Java!)
console.log(a)
console.log(typeof (a)) // it is an object

const b = a.toString().replaceAll(',', ' ')
console.log(b)

/**
 * Array methods:
 * - length
 * - toString()
 * - pop()
 * - push()
 * - shift()/unshift()
 * - concat()
 * - sort()
 * - splice()
 * - slice()
 * - reverse()
 */

// Skipped: length, toString(), pop() and push().

// Jump to: shift() and unshift()
let arrayShift = [1, 2, 3, 4, 5]
const arrayShiftOne = arrayShift.shift()
console.log(arrayShiftOne)
console.log(arrayShift)

arrayShift.unshift(1)
console.log(arrayShift)

delete arrayShift[4]
console.log(arrayShift)

// arrayName.concat():
const itemToAdd = 1
const existingArray = [2, 3]

const combinedArray = [itemToAdd].concat(existingArray)
console.log(combinedArray) // [1, 2, 3]

// sort():
const arrayToSort = ['a', 'c', 'b', 'e', 'f', 'd', 'g']
arrayToSort.sort()
console.log(arrayToSort) // ['a', 'b', 'c', 'd', 'e', 'f', 'g']

// Important - splice():
// - Use splice to either add or remove items from an array
/* Syntax:
   const deletedItems = array.splice(index, deleteCount, itemsToAdd)
    => 1. index is the position to start modifying the array.
    => 2. deleteCount is the number of items you want to delete (if none and you only wish to add to the array => simply input 0)
    => 3. itemsToAdd is items you want to add, each separated by ,.
*/
const arrayToSplice = [3, 4, 5, 7, 6, 8, 9]
arrayToSplice.splice(0, 0, 2)
console.log(arrayToSplice) // [2, 3, 4, 5, 7, 6, 8, 9] - add
arrayToSplice.splice(4, 1)
console.log(arrayToSplice) // [2, 3, 4, 5, 6, 8, 9] - remove
arrayToSplice.splice(5, 0, 7, 8, 9)
console.log(arrayToSplice) // [2, 3, 4, 5, 6, 7, 8, 9, 8, 9] - add

let spliceExample2 = [1003, 'onetwothree', 'true', 'good afternoon', 999990, false, null, NaN]
let x = spliceExample2.splice(4, 3, 77, 'string val', true)
console.log(spliceExample2)
console.log(x)

// slice():
const arrayToSlice = [1003, 'onetwothree', 'true', 'good afternoon', 999990, false, null, NaN]
const slicedItem = arrayToSlice.slice(3, 7)
console.log(slicedItem)
console.log(arrayToSlice)

// reverse():
console.log(arrayToSlice.reverse())
console.log(arrayToSlice)

// Exercises:

// Using array method - includes() to check a guest list.

// const guestList = ['Angela Yu', 'John Wick', 'Tony Stark', 'Bruce Wayne', 'Diana Prince']

// const guestName = prompt('Hi, what is your name?')

// if (guestCheck(guestName)) {
//   alert('Hi ' + guestName + '! Welcome to the event!')
// } else {
//   alert('Sorry ' + guestName + ', you are not on our guest list. Please confirm with your invitation.')
// }

// function guestCheck (name) {
//   return guestList.includes(name)
// }

// FizzBuzz Array Problem (adding to Arrays):
const output = []
let count = 1

// eslint-disable-next-line no-unused-vars
function fizzBuzz () {
  if (count % 3 === 0 && count % 5 === 0) {
    output.push('FizzBuzz')
  } else if (count % 3 === 0) {
    output.push('Fizz')
  } else if (count % 5 === 0) {
    output.push('Buzz')
  } else {
    output.push(count)
  }
  count++
  console.log(output)
}

// for (let i = 0; i < 15; i++) {
//   fizzBuzz()
// }

// Random person picker for buying lunch:
const personList = ['Angela', 'Ben', 'Jenny', 'Michael', 'Chloe']

function whosPaying (array) {
  const randomIndex = Math.floor(Math.random() * (array.length))
  const randomPerson = array[randomIndex]

  return randomPerson + ' is going to buy lunch today!'
}

// console.log(whosPaying(personList))

/**
 * Objects
 * - An Object is data that contains key-value pairs.
 * - It is similar to objects in real life in that sense - there multiple key-value pairs for objects
 * that are defined by its attributes (e.g. name, color, shape, size, manufacture date, etc).
 *
 * - We use objects in order to store data with properties and attributes associated to 1 collection point.
 * - This also become important for the DOM as your start to perform complex manipulation on DOM
 * objects.
 */

const houseKeeper = {
  name: 'June',
  age: 22,
  yearsOfExp: 2,
  languages: ['English', 'Mandarin'],
  requireWorkPermit: false,
  cleaningRepertoire: ['bedroom', 'toilet', 'lobby'],
  salary: 2000
}

// Retrieving data from an object:
console.log(houseKeeper.cleaningRepertoire)

// Object constructor function:
function HouseKeeper (name, age, yearsOfExp, languages, requireWorkPermit, cleaningRepertoire, salary) {
  this.name = name
  this.age = age
  this.yearsOfExp = yearsOfExp
  this.languages = languages
  this.requireWorkPermit = requireWorkPermit
  this.cleaningRepertoire = cleaningRepertoire
  this.salary = salary

  // Include a method:
  this.clean = function clean (equipment, place) {
    console.log(`Cleaning in progress: ${name} is using a ${equipment} to clean the ${place}.`)
  }
}

// To initialize objects:
const houseKeeper2 = new HouseKeeper('Diana', 35, 10, ['English', 'Amazonian'], false, ['world', 'toilet', 'lobby', 'room'], 20000)

houseKeeper2.clean('broom', 'room')
