/* eslint-disable prefer-promise-reject-errors */
// Example of using promise.race() - asking 3 friends for an extra pen.
// - Speed of executing the promises is of the essence, nothing else matters.
// - Only the fastest gets resolved/rejected.

const askJohn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Yep, I got one extra pen.'), 3000)
  })
}

const askEugene = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject('Sorry man, got only one.'), 5000)
  })
}

const askSusy = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Sure, I have a pen for you!'), 2900)
  })
}

Promise.race([askJohn(), askEugene(), askSusy()])
  .then(
    value => {
      console.log(value)
    })
  .catch(
    error => {
      console.log(error)
    })

const askAtTheShop = () => {
  return new Promise((resolve, reject) => {
    resolve('Sure, we always sell the pen. You can get one for $1.')
  })
}

Promise.race([askJohn(), askEugene(), askSusy(), askAtTheShop()])
  .then(
    value => {
      console.log(value)
    })
  .catch(
    error => {
      console.log(error)
    })
