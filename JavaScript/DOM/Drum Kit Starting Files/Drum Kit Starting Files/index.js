/* eslint-disable no-case-declarations */

/**
 * Event Listeners
 */
// Adding click event listeners to every button for playing a sound:
document.querySelectorAll('.drum').forEach(button => {
  button.addEventListener('click', event => {
    const buttonInnerHTML = event.target.innerHTML
    playSound(buttonInnerHTML)
    animateButton(buttonInnerHTML)
  })
})

// Add keypress event listeners to every key pressed:
document.addEventListener('keypress', event => {
  const keyPressEvent = event.key
  playSound(keyPressEvent)
  animateButton(keyPressEvent)
})

/**
 * Functions
 */

// Have a function for playing sounds based on specific entry (keypress OR buttonInnerHTML):
function playSound (entry) {
  switch (entry) {
    case 'w':
      const crash = new Audio('./sounds/crash.mp3')
      crash.play()
      break

    case 'a':
      const bass = new Audio('./sounds/kick-bass.mp3')
      bass.play()
      break

    case 's':
      const snare = new Audio('./sounds/snare.mp3')
      snare.play()
      break

    case 'd':
      const tom1 = new Audio('./sounds/tom-1.mp3')
      tom1.play()
      break

    case 'j':
      const tom2 = new Audio('./sounds/tom-2.mp3')
      tom2.play()
      break

    case 'k':
      const tom3 = new Audio('./sounds/tom-3.mp3')
      tom3.play()
      break

    case 'l':
      const tom4 = new Audio('./sounds/tom-4.mp3')
      tom4.play()
      break

    default:
      console.log(entry)
  }
}

// Function for animating button (when the event listener picks up a click or keypress):
function animateButton (entry) {
  const button = document.querySelector('.'.concat(entry))
  button.classList.add('pressed')
  setTimeout(() => {
    button.classList.remove('pressed')
  }, 100)
}
