function getSpecificNumber () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(42)
    }, 2000)
  })
}

async function af () {
  const specificNumber = await getSpecificNumber()
  console.log(specificNumber)
}

af() // this returns the same results as the block below, without the need for .then

async function af2 () {
  getSpecificNumber()
    .then(specificNumber => {
      console.log(specificNumber)
    })
}

af2() // this is the same as the async-await block on top.
