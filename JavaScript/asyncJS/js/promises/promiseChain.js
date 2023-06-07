// Chaining Promises Successfully:
// eslint-disable-next-line no-unused-vars
function calculateSquare (number) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof number === 'number') { resolve(number ** 2) }
      return reject(new Error('Please enter a number instead.'))
    }, 1000)
  })

  promise
    .then(
      value => {
        console.log('Result: ' + value)
        // You can place a new promise within the first .then, so that the subsequent .then can pick up a resolve/reject to return:
        return new Promise((resolve, reject) => {
          console.log('This is the after credits message:')
          setTimeout(() => {
            if (value > 3000) {
              resolve('\n\n\n\n\nI love you 3000.')
            } reject(new Error('\n\n\n\n\nPlease go home.'))
          }, 3000)
        })
      },
      error => {
        console.log('Error: ' + error.message)
      }
    )
    .then(
      value2 => {
        console.log(value2)
      },
      error => {
        console.log(error.message)
      }
    )
}

// calculateSquare(60)

// Example 2
// - Note: this is also how to avoid callback hell
function calculateSquare2 (number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof number === 'number') { resolve(number ** 2) }
      return reject(new Error('Please enter a number instead.'))
    }, 1000)
  })
}

calculateSquare2(50)
  .then(
    value => {
      console.log('Result: ' + value)
      return calculateSquare2(60)
    },
    error => {
      console.log('Error: ' + error.message)
    }
  )
  .then(
    value => {
      console.log('Result: ' + value)
      return calculateSquare2(70)
    },
    error => {
      console.log('Error: ' + error.message)
    }
  )
  .then(
    value => {
      console.log('Result: ' + value)
    },
    error => {
      console.log('Error: ' + error.message)
    }
  )

// To refactor the block above (async-await comes later):
// eslint-disable-next-line no-unused-vars
async function calculateSquares3 (y) {
  while (y < 10) {
    try {
      const value = await calculateSquare2(y)
      console.log('Result: ' + value)
      y++
    } catch (error) {
      console.log('Error: ' + error.message)
      break // Break the loop if there's an error
    }
  }
}

// calculateSquares3(5)
