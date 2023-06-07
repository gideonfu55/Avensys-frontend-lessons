/**
 * DOM Lessons - Avensys Boot Camp
 */

// const userNum = prompt('Enter a number')
// if (userNum > 100) {
//   location.href = 'https://www.google.com'
// } else {
//   document.body.style.backgroundColor = 'yellow'
//   alert('Done')
// }

// Getting DOM elements/nodes:

// getElementById()
const a = document.getElementById('div1')
console.log(a)
a.innerHTML = 'Hello Good Morning!'
const a2 = document.getElementById('head1')
a2.innerHTML = 'This is a heading changed by DOM.'
// document.write(a)
const b = document.getElementById('para1')
b.innerHTML = 'This text is changed using DOM.'

// getElementsByClassName()
const c = document.getElementsByClassName('d1')
console.log(c[2])
const d = document.getElementsByClassName('d1')[1]
console.log(d.innerHTML)

// getElementsByTagName()
const e = document.getElementsByTagName('p')[2]
console.log(e)
const f = document.getElementsByTagName('div')[0]
console.log(f.innerHTML)

// querySelector()
const newA = document.querySelector('p').innerHTML
console.log(newA)
const newB = document.querySelector('#para1').innerHTML
console.log(newB)
const newC = document.querySelector('.d1').innerHTML
console.log(newC)

// Getting and Setting Attributes
const imgAtt = document.querySelector('img')
console.log(imgAtt.getAttribute('alt'))
imgAtt.setAttribute('alt', 'This is set by DOM')
console.log(imgAtt.getAttribute('alt'))

imgAtt.setAttribute('style', 'width: 500px')

const div1 = document.querySelector('div')
div1.setAttribute('style', 'background-color: yellow')

// Setting styles
imgAtt.style.marginLeft = '100px'

// Creating and Appending New Elements:
const ourDiv = document.querySelector('#create')
const newPara = document.createElement('p')
const newText = document.createTextNode('This is the newly created paragraph.')
newPara.appendChild(newText)
ourDiv.appendChild(newPara)

const newDiv2 = document.createElement('div')
const newH1 = document.createElement('h1')
const newText2 = document.createTextNode('This is a new h1.')
newH1.appendChild(newText2)
newDiv2.appendChild(newH1)
// ourDiv.appendChild(newDiv2) // OR
ourDiv.insertBefore(newDiv2, document.querySelector('#h1-first'))

// Replacing a child element with replaceChild():
const ourDiv2 = document.querySelector('#create')
const swapme = document.querySelector('.swap')
const newImg = document.createElement('img')
newImg.setAttribute('src', './images/fK5ssgvtI43z19FoWigdlqgpLRE.jpg')
newImg.setAttribute('width', '250px')
newImg.setAttribute('height', '180px')
ourDiv2.replaceChild(newImg, swapme)

// Remove the child from the parent element:
ourDiv2.removeChild(newImg)

/**
 * Important: Creating Event Listeners
 */

// const x = document.querySelector('#newBtn')
// x.addEventListener('click', callAlert)

// function callAlert() {
//   alert('This is alert 1.')
// }

const num1 = 5
const num2 = 7
document.querySelector('#newBtn').addEventListener('click', () => {
  multiply(num1, num2)
})

function multiply (a, b) {
  document.querySelector('#demo').textContent = a * b
}

// Understanding Event Propagation - Bubbling and Capturing:
// document.querySelector('#inner').addEventListener('click', () => {
//   alert('you clicked the inner element.')
// }, true)

// document.querySelector('#outer').addEventListener('click', () => {
//   alert('you clicked the outer element.')
// }, true)

// 1, 2, 3

const eventBubDiv1 = document.querySelector('.eventBubDiv1')
const eventBubDiv2 = document.querySelector('.eventBubDiv2')
const eventBubDiv3 = document.querySelector('.eventBubDiv3')

eventBubDiv1.addEventListener('click', () => {
  alert('you clicked the inner element 1.')
}, true)

eventBubDiv2.addEventListener('click', () => {
  alert('you clicked the middle element 2.')
}, true)

eventBubDiv3.addEventListener('click', () => {
  alert('you clicked the outer element 3.')
}, true)

// 3, 2, 1
eventBubDiv1.addEventListener('click', () => {
  alert('you clicked the inner element 1.')
}, false)

eventBubDiv2.addEventListener('click', () => {
  alert('you clicked the outer element 2.')
}, false)

eventBubDiv3.addEventListener('click', () => {
  alert('you clicked the outer element 3.')
}, true)

// 1, 3, 2
eventBubDiv1.addEventListener('click', () => {
  alert('you clicked the inner element 1.')
}, true)

eventBubDiv2.addEventListener('click', () => {
  alert('you clicked the outer element 2.')
}, false)

eventBubDiv3.addEventListener('click', () => {
  alert('you clicked the outer element 3.')
}, true)

// 2, 3, 1
eventBubDiv1.addEventListener('click', () => {
  alert('you clicked the inner element 1.')
}, false)

eventBubDiv2.addEventListener('click', () => {
  alert('you clicked the outer element 2.')
}, true)

eventBubDiv3.addEventListener('click', () => {
  alert('you clicked the outer element 3.')
}, true)

// Stop Event Propagation:
// - To stop the outer divs from changing color when the inner divs are clicked, you can use the stopPropagation() method on the event object. This will prevent the event from bubbling up to the parent elements.

eventBubDiv3.addEventListener('click', event => {
  event.stopPropagation()
  eventBubDiv3.style.backgroundColor = 'red'
})

eventBubDiv2.addEventListener('click', event => {
  event.stopPropagation()
  eventBubDiv2.style.backgroundColor = 'blue'
})

eventBubDiv1.addEventListener('click', event => {
  event.stopPropagation()
  eventBubDiv1.style.backgroundColor = 'orange'
})

// Exercise for Changing Flex in Div for Boxes:
const flexContainer = document.querySelector('.exercise')
const buttonFlex = document.querySelector('#btnFlex')
const buttonFlex2 = document.querySelector('#btnFlex2')
const buttonFlex3 = document.querySelector('#btnFlex3')

buttonFlex.addEventListener('click', () => {
  flexContainer.style.display = 'flex'
})

buttonFlex2.addEventListener('click', () => {
  flexContainer.style.display = 'flex'
  flexContainer.style.justifyContent = 'flex-end'
})

buttonFlex3.addEventListener('click', () => {
  flexContainer.style.display = 'flex'
  flexContainer.style.justifyContent = 'flex-end'
  flexContainer.style.alignItems = 'flex-end'
})
