// Creating a promise:
const myPromise = new Promise((resolve, reject) => {
  resolve('Hello World')
})

// Using a Promise with .then:
myPromise.then(value => {
  console.log(value)
})

// Understanding the event loop in Promises.
const myPromise2 = new Promise((resolve, reject) => {
  resolve('Hello World too!')
})

myPromise2.then(value => {
  console.log(value)
})

console.log('This is written after myPromise2.then')

// Rewriting square function using Promises:
// eslint-disable-next-line no-unused-vars
function calculateSquare (number) {
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof number === 'number') { resolve(number ** 2) }
      return reject(new Error('Please enter a number instead.'))
    }, 1000)
  })

  promise3.then(
    value => {
      console.log('Result: ' + value)
    },
    error => {
      console.log('Error: ' + error.message)
    }
  )
}

// calculateSquare(20)

// Alternative for Handling Rejection:
function calculateSquare2 (number) {
  const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof number === 'number') { resolve(number ** 2) }
      return reject(new Error('Please enter a number instead.'))
    }, 1000)
  })

  promise4
    .then(value => {
      console.log('Result: ' + value)
    })
    .catch(reason => {
      console.log('Error: ' + reason.message)
    })
}

calculateSquare2('word')

// How to Promisify any JavaScript Function:
// Example - Capitalize the first letter of any text:
// eslint-disable-next-line no-unused-vars
function capitalize (text) {
  const textArray = text.split(' ')
  textArray.forEach((word, index) => {
    textArray[index] = ' ' + word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  })
  return textArray.join('').trim()
}

function capitalizePromise (text) {
  const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof text === 'string') {
        return resolve(capitalize(text))
      } else {
        return reject(new Error('Please enter a string for the word'))
      }
    }, 3000)
  })
  promise4.then(
    value => {
      console.log('Result: ' + value)
    },
    error => {
      console.log('Error: ' + error.message)
    }
  )
}

capitalizePromise(200)
