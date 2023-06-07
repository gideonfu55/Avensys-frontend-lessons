// Have random number generator for Dice Rolls (1 - 6):
const player1Roll = Math.floor(1 + Math.random() * 6)
const player2Roll = Math.floor(1 + Math.random() * 6)

// function that identifies the dice to show for each player according to roll:
const dice1Img = document.querySelector('.img1')
const dice2Img = document.querySelector('.img2')

let diceImg = ''

function diceLoad (playerRoll) {
  switch (playerRoll) {
    case 1:
      diceImg = './images/dice1.png'
      break

    case 2:
      diceImg = './images/dice2.png'
      break

    case 3:
      diceImg = './images/dice3.png'
      break

    case 4:
      diceImg = './images/dice4.png'
      break

    case 5:
      diceImg = './images/dice5.png'
      break

    case 6:
      diceImg = './images/dice6.png'
      break

    default:
      diceImg = ''
  }

  return diceImg
}

// Changing the DOM for the dice image:
dice1Img.setAttribute('src', diceLoad(player1Roll))
dice2Img.setAttribute('src', diceLoad(player2Roll))

// Changing the DOM for the results in the header:
const h1Header = document.querySelector('h1')

if (player1Roll > player2Roll) {
  h1Header.textContent = '🚩 Player 1 Wins!'
} else if (player2Roll > player1Roll) {
  h1Header.textContent = 'Player 2 Wins! 🚩'
} else {
  h1Header.textContent = 'It is a draw. Refresh! 😉'
}
