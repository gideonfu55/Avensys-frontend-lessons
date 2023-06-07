// Implement promise.all from scratch:
const promiseAll = (arrayOfPromises) => {
  if (arrayOfPromises.length === 0) {
    return Promise.resolve([])
  }

  const promiseValues = []
  let settledPromisesCount = 0

  const promises = new Promise((resolve, reject) => {
    arrayOfPromises.forEach((promise, index) => {
      if (promise instanceof Promise === false) {
        promise = Promise.resolve(promise)
      }
      promise.then(result => {
        settledPromisesCount++
        promiseValues[index] = result
        if (settledPromisesCount === arrayOfPromises.length) {
          resolve(promiseValues)
        }
      }).catch(error => {
        reject(error)
      })
    })
  })

  return promises
    .then(values => {
      console.log(values)
    })
    .catch(error => {
      console.log(error)
    })
}

const getOne = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // eslint-disable-next-line prefer-promise-reject-errors
      resolve(1)
    }, 1000)
  })
}

const getTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2)
    }, 2000)
  })
}

const getThree = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3)
    }, 3000)
  })
}

promiseAll([getThree(), getTwo(), getOne()])
promiseAll([1, 'haha', 'batman'])

// Example of using Promises.all(): A car price aggregator that allows car sellers to check for the prices of multiple bidders concurrently:

const askFirstDealer = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(8000)
    }, 3000)
  })
}

const askSecondDealer = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(12000)
    }, 5000)
  })
}

const askThirdDealer = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10000)
    }, 8000)
  })
}

Promise.all([askFirstDealer(), askSecondDealer(), askThirdDealer()])
  .then(prices => {
    console.log(prices)
  }) // after 8 seconds, it returns [8000, 12000, 10000]

// How to handle rejections in Promises.all:
const askFourthDealer = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('Not a suitable car')
    }, 5000)
  })
}

Promise.all([askFirstDealer(), askSecondDealer(), askThirdDealer, askFourthDealer()])
  .then(prices => {
    console.log(prices)
  })
  .catch(error => {
    console.log(error)
  }) // returns the rejected promise: 'not a suitable car'

// But the problem is that this is not ideal - every other promise is not resolved due to one rejected promise alone.

// Solution - use Promise.allSettled.
