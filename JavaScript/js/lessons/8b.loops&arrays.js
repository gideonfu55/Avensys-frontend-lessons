/* eslint-disable array-callback-return */
/* eslint-disable prefer-const */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// Use of 5 different methods for looping in arrays:
const arrayForLoop = [1003, 'onetwothree', 'true', 'good afternoon', 999990, false, null, NaN]
const arrayForLoop2 = [1001, 'one', true, 'hello']

// 1. Standard for loop:
for (let i = 0; i < arrayForLoop.length; i++) {
  console.log(arrayForLoop[i])
}

// 2a. forEach
arrayForLoop.forEach(item => {
  console.log(item)
})

// 2b. You can use also you an arrow function instead (for one-liners functions):
arrayForLoop.forEach(item => console.log(item))

// 3. for : of
for (item of arrayForLoop) {
  console.log(item)
}

// 4. for : in (note the difference - this is not for the actual item/value itself, it is meant for the item index/property)
for (item in arrayForLoop) {
  console.log(item)
}

// 5. for-from
const name = 'random name'
const name1 = Array.from(name)
console.log(name1)

// Exercise:
// Given the following array:
const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6]

// Qn 1: Loop through the numbers and console.log each number within
// Standard for loop
for (i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}

// for : of
for (num of numbers) {
  console.log(num)
}

// Qn 2: Loop through the numbers. If the numbers are greater than 5, console.log them:
for (i = 0; i < numbers.length; i++) {
  if (numbers[i] > 5) {
    console.log(numbers[i])
  }
}

for (num of numbers) { // => so much neater
  if (num > 5) {
    console.log(num)
  }
}

// Qn 3: Create a new array. Add all numbers that are greater than 10 into this new array.
const newNumbers = []
for (i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    newNumbers.push(numbers[i])
  }
}

console.log(newNumbers)

const newNumbersForOf = []
for (num of numbers) {
  if (num > 10) {
    newNumbersForOf.push(num)
  }
}

console.log(newNumbersForOf)

// Qn 4: Create a new array. Multiply all numbers by 5 and put them into the new array.
const newArray = []
for (i = 0; i < numbers.length; i++) {
  const num = numbers[i]
  newArray.push(num * 5)
}

console.log(newArray)

const newArray2 = []
for (num in numbers) {
  newArray2.push(num * 5)
}

/** Other unique methods for looping in Arrays:
 * - map()
 * - filter()
 * - reduce()
 * - findIndex()
 * - find()

*/

// i. map() => creates a new array populated with the results of calling a provided function on every element in the calling array
// - Syntax: map((value, index, whole array) => {})
// - E.g. you wish to perform a arithmetic function on every number in an array and return the result
// - It returns a new array without affecting the original array
// - Use forEach when you want simply wish to use the info in an array.

const numbersMap = [2, 5, 7, 9, 15, 21, 25, 33, 42, 51, 61]
const multipliedBy4 = numbersMap.map(num => num * 5)

console.log(multipliedBy4) // [10, 25, 35, 45, 75, 105, 125, 165, 210, 255, 305]

// Another example:
const thingsToDo = ['play guitar', 'learn JS', 'learn Java', 'do calisthenics']
const todoStrings = thingsToDo.map(thingToDo => {
  return `I need to ${thingToDo}.`
})

console.log(todoStrings) // ['I need to play guitar.', 'I need to learn JS.', 'I need to learn Java.', 'I need to do calisthenics.']

// Simplify arrays with .map:
const newMarvelHeroes = [
  {
    firstName: 'America',
    lastName: 'Chavez'
  },
  {
    firstName: 'Shang',
    lastName: 'Chi'
  }
]

const firstNames = newMarvelHeroes.map(hero => hero.firstName)
console.log(firstNames) // ['America', 'Shang']

// ii. filter()
// - URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// => returns a new array that contains a subset of the original array, based on a specified condition
// => Syntax:

let a = [1001, 'one', true, 'hello']
let a2 = a.filter((a) => {
  return a === 'hello'
})

console.log(a2)
console.log(a)

const numbersToFilter = [1, 3, 5, 10, 12, 17, 25, 30, 35, 60, 70]
const arrayFiltered = numbersToFilter.filter(num => {
  if (num > 17 && num < 60 && num % 6 === 0) {
    return true
  }
})

console.log(arrayFiltered) // [30]

// Example 2:
const arrayToFilter2 = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

function isPrime (num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return num > 1
}

console.log(arrayToFilter2.filter(isPrime)) // [2, 3, 5, 7, 11, 13]

// iii. reduce()
// => This method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is only a single value.

/**
 * Syntax:
 * const callback = (accumulator, currentValue, index) => {
 *  // return something here
 * }
 *
 * const result = array.reduce(callback, initialValue)
 */

const numbersToReduce = [5, 6, 7, 8, 9]

const totalOfMulNum = numbersToReduce.reduce((acc, num) => {
  return acc * num
}, 1)

const totalOfSumNum = numbersToReduce.reduce((acc, num) => {
  return acc + num
}, 0)

console.log(totalOfMulNum) // 15120
console.log(totalOfSumNum) // 35

// Challenge for reduce:
// => Using .reduce for reducing an array into an object:
// => Say if we have an array that has a list of item(s) that we wish to count and place the count(s) in a single object.

const fruits = [
  'apple',
  'apple',
  'banana',
  'banana',
  'orange',
  'pear',
  'pear',
  'apple',
  'orange'
]

/**
 * You wish to have the following:
 * {
 *   apple: 3,
 *   banana: 2,
 *   orange: 2,
 *   pear: 2
 * }
 */

// How to reduce for the above:
const fruitTally = fruits.reduce((accumulator, fruit) => {
  if (accumulator[fruit]) {
    accumulator[fruit] += 1
  } else {
    accumulator[fruit] = 1
  }
  return accumulator
}, {})

console.log(fruitTally)

// Refactored block for array to object:
const fruitTally2 = fruits.reduce((acc, fruit) => {
  const fruitCount = acc[fruit]

  fruitCount ? acc[fruit] = fruitCount + 1 : acc[fruit] = 1

  return acc
}, {})

console.log(fruitTally2)

// Class Exercises:

// const numbersArray = [2, 5, 7, 9, 15];
// let num = 1;
// while (num != 0) {
//   num = parseInt(prompt('Please provide a number input'));
//   if (num === NaN || num === null) {
//     alert('Please provide a valid number.');
//     break;
//   } else {
//     numbersArray.push(num);
//     alert(numbersArray);
//   }
// }

// console.log(numbersArray);

const numbersArray = [2, 5, 8, 7, 9, 15, 16]

const arrayFiltered2 = numbersArray.filter(num => num % 4 === 0)
console.log(arrayFiltered2)

const numbersMap2 = [2, 5, 7, 9, 15]
const numberSquare = numbersMap2.map(num => num ** 2)

console.log(numberSquare)

const numberFactorial = [1, 2, 3, 4]
const numberFactored = numberFactorial.reduce((acc, num) => {
  return acc * num
}, 1)

console.log(numberFactored) // 24
