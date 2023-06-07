// eslint-disable-next-line no-unused-vars
function f (callback) {
  setTimeout(() => {
    callback()
  }, 1000)
}

// console.log('Hello World!')
// f(() => console.log('This is a callback.'))

// Calculator Callback Example - Handling Errors in Callbacks:
function calculateSquare (number, callback) {
  setTimeout(() => {
    if (typeof number !== 'number') {
      callback(new Error('Argument of type number is expected.'), 0)
      return
    }
    const result = number * number
    callback(null, result)
  }, 1000)
}

// eslint-disable-next-line no-unused-vars
function printResult (error, result) {
  if (error) {
    console.log('Caught error: ' + String(error))
  }
  console.log(result)
}

// We expect that there is 1s between each printResult due to the setTimeout, nut this is not the case. The functions are all still running synchronously.
calculateSquare('shit', printResult)
calculateSquare(2, printResult)
calculateSquare(3, printResult)
calculateSquare(4, printResult)

// The only way we can run all of the 3 functions above asynchronously with 1s between, is to nest the next function within the previous as further callbacks:
calculateSquare(2, function (error, result) {
  if (error) {
    console.log('Caught error: ' + String(error))
  }
  console.log(result)
  calculateSquare(3, function (error, result) {
    if (error) {
      console.log('Caught error: ' + String(error))
    }
    console.log(result)
    calculateSquare(4, function (error, result) {
      if (error) {
        console.log('Caught error: ' + String(error))
      }
      console.log(result)
    })
  })
})

// But this leads to a serious problem - callback fucking zell. What a piece of shit.
