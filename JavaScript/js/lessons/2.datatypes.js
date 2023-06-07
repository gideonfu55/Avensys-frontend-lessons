/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable prefer-const */
// Datatype: Number:
a = 0.5012 * 0.1232
b = 50 / 5
c = 40 / 3
d = 50 * 5
e = 10 / 0

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)

// Datatype: Strings
let stringA = 'hello everyone welcome to the "Frontend" session for JS.'
console.log(stringA[4])
console.log(stringA)

let f = 55 * 'hello there'
console.log(f)

// To actually declare Strings with "" within another "" - you need to use the escape character: \
// -> thus it looks like \"

// Example:
let stringB = 'hello everyone welcome to the "Frontend" session for JS.'

console.log(stringB)

// Datatype: Boolean
// - just true or false values
// - with be necessary for stating conditions as we arrive at that topic
let booleanA = true
let booleanB = false

console.log(booleanA)

// Datatype: null
let nullValue = null
console.log(nullValue)

// Datatype: Symbol
let symbolA = Symbol('1234')
console.log(symbolA)

// Datatype: BigInt
let bigInteger = 1251341234135123512412511235123535n * 1251341234135123512412511235123535n
console.log(bigInteger)

console.log(typeof (bigInteger))

// Storing and Getting Arrays:
let newArray = [1, 2, 'new word', true]
console.log(newArray[3])

// Storing Key-Value Pairs and Getting Values in Objects:
let objectA = {
  id: 1000,
  id2: 'anyname',
  id3: true
}

console.log(objectA)
console.log(objectA.id3)

// Converting Datatypes:

let k = 24
let k1 = k.toString()

console.log(k1)
console.log(typeof (k1))
