// Promise.allSettled():
// Whether the is a rejected promise or not, Promise.allSettled() always fulfills all promises.

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

const askFourthDealer = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('Not a suitable car')
    }, 5000)
  })
}

Promise.allSettled([askFirstDealer(), askSecondDealer(), askThirdDealer, askFourthDealer()])
  .then(prices => {
    console.log(prices)
  })
  .catch(error => {
    console.log(error)
  })
