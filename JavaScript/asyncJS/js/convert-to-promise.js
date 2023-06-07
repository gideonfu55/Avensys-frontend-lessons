// How to convert a value into a promise:
function logToConsole (somePromise) {
  somePromise.then(
    value => {
      console.log(value)
    },
    error => {
      console.log(error)
    }
  )
}

const newPromise1 = new Promise((resolve, reject) => {
  resolve('Hello')
})

logToConsole(newPromise1) // Hello

const value = 'string'
// logToConsole(value) // runtime error

// To convert value into a promise:
const promisifiedValue = Promise.resolve(value)
logToConsole(promisifiedValue)

// You can also convert it into a reject instead:
const rejection = 'The promise has been rejected.'
const rejectedValue = Promise.reject(rejection)
logToConsole(rejectedValue)
