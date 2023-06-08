import React, { useState } from 'react'

// Fundamental Rule in React:
// - Whenever there is a change in the state of a Component, it will make the component re-render or re-execute again.

function Launch() {

  const cube = (num) => {
    return Math.pow(num, 3)
  }

  let [ number, setNumber ] = useState(0);
  const result = cube(number)

  const increaseIt = () => {
    setNumber(++number)
  }

  const decreaseIt = () => {
    setNumber(--number)
  }

  return (
    <div className='m-2'>
      <h5>The number is {number} and its cube is: {result} </h5>
      <button className='btn btn-primary btn-sm m-2' onClick={decreaseIt}>-</button>
      <button className='btn btn-primary btn-sm m-2' onClick={increaseIt}>+</button>
      <hr/>

      <label>Enter Name:</label>
      <input type='text' />
    </div>
  )
}

export default Launch