/* eslint-disable no-unused-vars */

// Using switch statements for choices:
const choiceVacation = Math.floor(Math.random() * 4)

switch (choiceVacation) {
  case 1:
  // Do something here
    console.log("Let's go to Tokyo this year!")
    break

  case 2:
  // Do something else here
    console.log("Let's go to Taiwan this year!")
    break

  case 3:
  // Do something else here
    console.log("Let's go to Australia this year!")
    break

  default:
    console.log("Let's go to a Sentosa staycation this year!")
    // Do something else here
}

/*
// Tweet Prompter with Count:
var tweet = prompt('Write your message')
var tweetCount = tweet.length
var limit = 280

// Note that the 280th character based on the limit, is actually at the 281th index of the string.
if (tweetCount <= limit) {
  alert('You have written ' + tweetCount + ' characters.' + 'You have ' + (limit - tweetCount) + ' characters remaining.')
} else {
  var tweetSlice = tweet.slice(0, limit)
  alert('You have exceeded the limit. \n\nYour tweet is: \n' + tweetSlice)
}
*/

/**
 * Random Number Generation in JavaScript
 */

// This is a horrible thing to do actually - but for the sake of generating random numbers and using a function for it - here's an example of an exercise using a Love Calculator:
function loveCalculator () {
  const nameA = prompt("Enter the first person's name")
  const nameB = prompt("Enter the second person's name")

  let outcomeString = ''
  const randomPercentage = Math.floor(Math.random() * 100)
  if (randomPercentage >= 90) {
    outcomeString = '! Wow! Please be sure not to miss this chance!'
  } else if (randomPercentage >= 70) {
    outcomeString = '! Looks like there is a good chance!'
  } else if (randomPercentage >= 50) {
    outcomeString = '! Seems like there is still hope!'
  } else {
    outcomeString = ' ...Well...it seems rather unlikely..'
  }

  alert('The love score between ' + nameA + ' and ' + nameB + ' is ' + randomPercentage + '%' + outcomeString)
}

/**
 * Understanding the difference between === (strictly equal) and == (equal)
 */
const variableTestA = '7'
const variableTestB = 7

// eslint-disable-next-line eqeqeq
if (variableTestA == variableTestB) {
  console.log("the 2 values are 'equal'")
}

if (variableTestA === variableTestB) {
  console.log('the two values are strictly equal.')
} else {
  console.log('but the two values are not strictly equal.')
}

// BMI Calculator with Index Categories:
function bmiCalculator (weight, height) {
  const bmi = Math.round(weight / (Math.pow(height, 2)))

  let outcomeString = ''

  if (bmi < 18.5) {
    outcomeString = `Your BMI is ${bmi}, so you are underweight.`
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    outcomeString = `Your BMI is ${bmi}, so you have a normal weight.`
  } else if (bmi >= 25 && bmi <= 29.9) {
    outcomeString = `Your BMI is ${bmi}, so you are overweight.`
  } else if (bmi >= 30 && bmi <= 34.9) {
    outcomeString = `Your BMI is ${bmi}, so you are obese.`
  } else {
    outcomeString = `Your BMI is ${bmi}, so you are extremely obese.`
  }

  return outcomeString
}

console.log(bmiCalculator(66, 1.72))

// Leap Year Calculator:
/*
Conditions for a Leap Year:
If the year is divisible by 4, then it’s a leap year, UNLESS

it’s also divisible by 100, then it’s not a leap year, UNLESS FURTHER

the year is divisible by 400, then it is a leap year.
*/
function isLeap (year) {
  let outcome = ''

  if (year % 4 === 0) {
    if (year % 100 !== 0) {
      outcome = 'Leap year.'
    } else {
      if (year % 400 === 0) {
        outcome = 'Leap year.'
      } else {
        outcome = 'Not leap year.'
      }
    }
  } else {
    outcome = 'Not leap year.'
  }

  return outcome
}

// Too many nested conditions is just bad. This is why you need to draw the flow chart and group up all the necessary conditions:

function isLeap2 (year) {
  let outcome = ''

  if (year % 400 === 0) {
    outcome = 'Leap year.'
  } else if (year % 4 === 0 && year % 100 !== 0) {
    outcome = 'Leap year.'
  } else {
    outcome = 'Not leap year.'
  }

  return outcome
}

function isLeapFinal (year) {
  let outcome = ''

  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    outcome = 'Leap year.'
  } else {
    outcome = 'Not leap year.'
  }

  return outcome
}

console.log(isLeap(2400)) // Leap year
console.log(isLeap2(2400)) // Leap year
console.log(isLeapFinal(2400))
console.log(isLeap(1989)) // Not leap year
console.log(isLeap2(1989)) // Not leap year
console.log(isLeapFinal(1989))
console.log(isLeap(2000)) // Leap year
console.log(isLeap2(2000)) // Leap year
console.log(isLeapFinal(2000))
console.log(isLeap(2100)) // Not leap year
console.log(isLeap2(2100)) // Not leap year
console.log(isLeapFinal(2100))
console.log(isLeap(2024)) // Leap year
console.log(isLeap2(2024)) // Leap year
console.log(isLeapFinal(2024)) // Leap year
console.log(isLeapFinal(1800)) // Not leap year
console.log(isLeapFinal(1960)) // Leap year
console.log(isLeapFinal(2800)) // Leap year
