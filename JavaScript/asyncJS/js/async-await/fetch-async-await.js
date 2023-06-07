/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// How to use async-await with Fetch API:
// - We are using dog.ceo API to fetch dogs images 🐶😄

const getDogButton = document.querySelector('#getDog')
const imageDiv = document.querySelector('#dogPic')

function getRandomDogImage () {
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => data.message)
    .catch(error => {
      reject(error.message)
    })
}

// getRandomDogImage()
//   .then(url => {
//     getDogButton.addEventListener('click', () => {
//       imageDiv.setAttribute('src', url)
//     })
//   })
//   .catch(error => console.error(error))

// Using Async-await instead to rewrite the code above:
// If using arrow function - getRandomDogImage2 = async() => { try-catch block }
async function getRandomDogImage2 () {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await response.json()
    getDogButton.addEventListener('click', () => {
      imageDiv.src = data.message
    })
  } catch (error) {
    reject(error.message)
  }
}

getRandomDogImage2()
