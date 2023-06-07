/* eslint-disable prefer-promise-reject-errors */

// Promise.any() is part of the Promise API like promise.all, promise.allSettled, and promise.race.
// - What it does: promise.any() only resolves based on the first successful promise that is resolved amongst all other promises in an array.
// - If all promises were rejected, promise.any() will return an aggregate error, stating the all reasons of rejection for each promise.
// - If there is an empty array, promise.any() will return an aggregate error as well.
// - If the value in the array aren't promises, promise.any() treats it as a promise likewise and resolves the value in the first index.

const askJohn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Sorry, I don't have extra pens"), 3000)
  })
}

const askEugene = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject('Sorry man, got only one.'), 5000)
  })
}

const askSusy = () => {
  return new Promise((resolve, reject) => {
    // console.log('Sure, but I need to find it!')
    setTimeout(() => resolve('Here you go! Better late than never!'), 10000)
  })
}

const askAtTheShop = () => {
  return new Promise((resolve, reject) => {
    reject('Sorry! We went out of stock for this pen!')
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

Promise.any([askJohn(), askEugene(), askSusy(), askAtTheShop()])
  .then(
    value => {
      console.log(value)
    })
  .catch(
    error => {
      console.log(error)
    })
