/* eslint-disable prefer-const */

// for-loop exercise
let number = 5
let sum = 0
for (let i = 1; i <= number; i++) {
  console.log(i)
  sum += i
}
console.log('Sum of first ' + number + ' numbers is: ' + sum)

// for-in exercise
let a = {
  one: 'value one',
  two: 'value two',
  three: 'value three',
  four: 'value four'
}

for (const x in a) {
  console.log(a[x])
}

// for-of exercise
// eslint-disable-next-line no-unused-vars
let b = {
  one: 'value one',
  two: 'value two',
  three: 'value three',
  four: 'value four'
}

// for (const y of b) {
//   console.log(y)
// }

/**
 * The difference between for-in and for-of:
 * -  for-in is used to iterate over the properties of an object, including its prototype
 * chain.
 * - On the other hand, for-of is used to iterate over the values of an iterable, such as an
 * array or a string. It works by iterating over the values of an iterable, rather than its
 * properties.
 */

// While-loop exercise - 99 bottles of beer

// eslint-disable-next-line no-unused-vars
function beerBottleSong (bottleNum) {
  while (bottleNum > 1) {
    console.log(`\n${bottleNum} bottles of beer on the wall, ${bottleNum} bottles of beer.\nTake one down and pass it around, ${bottleNum - 1} of beer on the wall.`)

    bottleNum--
  }

  console.log('\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more of beer on the wall.')
  console.log('\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n')
}

// beerBottleSong(99)

// Using a do-while loop:

let i = 6

do {
  console.log('This statement will always show at least once, even if the while condition is not satisfied from the start.')
  i++
} while (i <= 5)

// Boss Level Challenge: Fibonacci Sequence Challenge:
function fibonacciGenerator (n) {
  let fibonacciSequence = []

  for (let i = 0; i < n; i++) {
    if (i <= 1) {
      fibonacciSequence.push(i)
    } else {
      fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2])
    }
  }
  return fibonacciSequence
}

console.log(fibonacciGenerator(8))
