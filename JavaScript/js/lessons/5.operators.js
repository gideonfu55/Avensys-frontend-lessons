/* eslint-disable prefer-const */
/* eslint-disable no-undef */
/* eslint-disable no-const-assign */
/**
 * Types of Operators (some these might overlap as they are not actually mutually exclusive)
 * Unary Operators: + - ++ -- ! ~ typeof delete void
 * Assignment Operators: += -= *= /= %=
 * Comparison Operators: == != === !== > < >= <=
 * Logical Operators: && || !
 * Ternary Operator: ? :
 * Bitwise Operator: << >> - need some understanding on this
 */

// Understanding prefix and postfix increment/decrement operators
let a = 3
b = a++
c = ++a
console.log(a) // prints 5
console.log(b) // 3
console.log(c) // 5

// In the examples above, there is a difference between using prefix and postfix increment/decrement operators

let d = -3
console.log(~d) // 2 // this converts 3 to its 32-bit binary representation and then flipped to its opposite binary code. Then the binary is converted again back to an integer.

let stringA = '-3'
console.log(~stringA) // 2 // this works the same way as performing the operator on the number.

// Assignment operators:

// Ternary Operators:
// - condition ? value1 : value2
let e = 5
let ternaryVar = (e <= 4) ? 'Smaller than 4' : 'Larger than 4'
console.log(ternaryVar)

let binaryA = 2
let binaryB = 1
console.log(binaryA >>= binaryB)
console.log(binaryA <<= binaryB)
