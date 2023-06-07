/* eslint-disable no-fallthrough */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
// Declaring Functions:
function sayHello () {
  console.log('Hello world!')
}

const sayHelloAgain = function () {
  console.log('This is declared with a function expression.')
}

// Calling your declared functions:
sayHello()
sayHelloAgain()

/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to write any Karel program you want.
 **/
/* Karel chess board pattern:
function main(){
   //your code here
   turnLeft();
   repeat(2) {
      shoePatternMove();
   }
   placeThreeBeep();
   turnRight();
}

function shoePatternMove() {
   placeThreeBeep();
   turnRightMove();
   placeTwoBeep();
   turnLeftMove();
}

function placeThreeBeep(){
   putBeeper();
   move();
   placeTwoBeep();
}

function placeTwoBeep() {
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   while (frontIsClear()){
      move();
   }
}

function turnRightMove() {
   turnRight();
   move();
   turnRight();
}

function turnLeftMove() {
   turnLeft();
   move();
   turnLeft();
}
*/

/* Problems for Functions Lesson */
// Getting robot to buy milk
function getMilk (pocketMoney) {
  let bottles = parseInt(pocketMoney / 1.5)

  console.log('leaveHouse')
  console.log('moveRight')
  console.log('moveRight')
  console.log('moveUp')
  console.log('moveUp')
  console.log('moveUp')
  console.log('moveUp')
  console.log('moveRight')
  console.log('moveRight')
  console.log('buy ' + bottles + ' bottles of milk')
  console.log('moveLeft')
  console.log('moveLeft')
  console.log('moveDown')
  console.log('moveDown')
  console.log('moveDown')
  console.log('moveDown')
  console.log('moveLeft')
  console.log('moveLeft')
  console.log('enterHouse')
}

getMilk(5)

// Lifetime left Calculator function:
function lifetimeLeft (currentAge) {
  let lifeRemaining = 120 - currentAge
  let daysLeft = (lifeRemaining) * 365
  let weeksLeft = (lifeRemaining) * 52
  let monthsLeft = (lifeRemaining) * 12

  console.log('You have ' + daysLeft + ' days, ' + weeksLeft + ' weeks, and ' + monthsLeft + ' months left.')
}

lifetimeLeft(35)

// Functions that return something (so that you are not always just console logging an outcome for no practical purpose):
// Writing BMI Calculator function:
function BMICalculator (weight, height) {
  let BMI = Math.round(weight / (Math.pow(height, 2)))

  return BMI
}

console.log(BMICalculator(66, 1.72))

// Writing functions with arrow function method (shorthand)

let getAverage = (num1, num2) => {
  return ((num1 + num2) / 2).toFixed(2)
}

console.log(getAverage(8, 5))

// Challenge - Build a Calculator Function:
// - This involves use of a callback function.

const add = (num1, num2) => {
  return num1 + num2
}

const subtract = (num1, num2) => {
  return num1 - num2
}

const multiply = (num1, num2) => {
  return num1 * num2
}

const divide = (num1, num2) => {
  return num1 / num2
}

const calculate = (num1, num2, operator) => {
  return operator(num1, num2)
}

console.log(calculate(5, 10, add))
console.log(calculate(20, 12, subtract))
console.log(calculate(5, 7, multiply))
console.log(calculate(30, 5, divide))

// For test:
function name1 (variable) {
  console.log(variable)
}

name1()

function abc (myName) {
  10 + 'abc' + 12
  return myName
}

let res = abc(10)
console.log(res)

// eslint-disable-next-line no-var
for (var i = 1; i < 3; i++) {
  switch (i) {
    case 1:
      console.log(i++)
      break

    case 2:
      console.log(i + 10)
      break

    case 3:
      console.log(i)
      break

    default:
      break
  }
}

let array1 = ['a', 'b', 'b']
// array1[40] = 'z'

// console.log(array1.length)

// let arrayA = [10]
// console.log(arrayA.length)

for (let element in array1) {
  console.log(element)
}
