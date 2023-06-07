/* eslint-disable no-var */

/*
Build-in methods: For numbers
- toString()
- toExponential()
- toFixed()
- toPrecision()
- parseInt()
- parseFloat()
- Boolean Checks: isFinite(), isInteger(), isNaN(), isSafeInteger()
*/

// Changing display of exponential places, decimal places, all-number places in numbers
const num = 100.1242141
console.log(num)
console.log(num.toExponential(4))
console.log(typeof (num.toExponential(4)))

console.log(num.toFixed(3))
console.log(typeof (num.toFixed(3)))

console.log(num.toPrecision(5))
console.log(typeof (num.toPrecision(5)))

// You can typecast to Numbers as well - similar to Java:
let num2 = '1025125.1231'
num2 = Number(num2) // using Num(string)
console.log(typeof (num2))
console.log(num2)

// Note the difference between all these methods for rounding numbers to the nearest integer.
console.log(Math.round(3.9)) // prints 4
console.log(Math.floor(3.9)) // prints 3
console.log(parseInt(3.9)) // prints 3

// parseInt():
// - This takes out your decimal places if they are present (e.g. in complex calculation where you need a simple result)
const numParseInt = -6.124124
console.log(parseInt(numParseInt)) // prints: -6
const numParseInt2 = '21412. 124124' // even numbers in strings can be parsed
console.log(typeof (parseInt(numParseInt2)))

// parseFloat()
// - The parses the same way, but for floats this time. So you can use it on strings with floats within to extract the float you need.
const numParseFloat = '2412.12412 24125'
console.log(parseFloat(numParseFloat))

/*
More important (not all) build-in methods - for Strings
URL for full list: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
- charAt():
  - finding characters at a particular index

- indexOf():
  - returns the index of the 1st occurrence character you are looking for in a string, or -1 if not found.

- lastIndexOf():
  - returns the index of the last occurrence character you are looking for in a string, or -1 if not found.

- referenceString.localeCompare():
  - this is the compareTo() method that checks whether the referenceString comes before (1), after (-1) or is equivalent (0) to the given string in sort order.

- concat(b, c, ...):
  - combines the text of two (or more) strings and returns a new string.

- slice():
  - slice a string up with slice(startIndex, endIndex), where endIndex is the char you wish to end at +1.

- substring():
  - this is actually the same as slice.

- split(separator, limit):
  - return an array of strings populated by splitting the calling string at occurrences of substring 'separator' - check example. Regex can be in the separator. Limit is the number of substrings to be included in the array (if unspecified, all substrings will be returned).

- trim():
  - creates a string by removing all the leading or ending white spaces in the string.

- replace(searchTerm/searchBasis/string, replacementString) OR replaceAll(searchTerm/searchBasis/string, replacementString):
  - used to replace occurrences of searchTerm (which can be a string or Regex) with replacement, where replacement could be a string or function. If searchTerm is not found, original string will be returned.

*/

// Slice method - stringName.slice(startIndex, endIndex)
// - What this does is to slice the string from the starting index to the endIndex - 1 (it excludes the char at endIndex)

// slice() and substring()
var myName = 'Gideon Fu'
console.log(myName.slice(0, 4)) // logs 'Gide'
console.log(myName.substring(0, 4))
console.log(myName.slice(4))
console.log(myName.substring(4))

// trim()
var myName2 = '     Gideon Fu      '
console.log(myName2.trim()) // logs 'Gideon Fu'

// replace()
const p = 'Super Mario loves eating mushrooms?'
console.log(p.replace(/Mario/i, 'Luigi'))
console.log(p.replace('Mario', 'Luigi'))

// split()
const str = 'Good afternoon welcome to the class.'
const words = str.split(' ')
console.log(words[words.length - 1])

const chars = str.split('')
console.log(chars[3])

// In this case, it only splits once at conjoined Os.
const parts = str.split('o')
console.log(parts)

// Prompt for name and response with only Uppercase format of the first character in input, no matter what each word case of the input is:
var yourName = prompt('What is your name?')
var nameStringArray = yourName.split(' ')
nameStringArray.forEach((word, index) => {
  nameStringArray[index] = ' ' + word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
})

var nameString = nameStringArray.join('').trim()
alert('Hello, ' + nameString + '!')
