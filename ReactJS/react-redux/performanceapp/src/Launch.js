import React, { useMemo, useState } from 'react'

// Fundamental Rule in React:

// - Whenever there is a change in the state of a Component, it will make the component re-render or re-execute again.

function Launch() {

  console.log("*****************************")

  let [ number, setNumber ] = useState(0);

  let [ enteredName, setEnteredName ] = useState('')

  const cube = (num) => {
    let i = 0
    let anotherNum
    while (i < 1000000000) {
      anotherNum = num * num * num
      i++
    }
    return anotherNum
  }

  let result = useMemo(() => {
    return cube(number)
  }, [number])

  // const result = cube(number)

  const increaseIt = () => {
    setNumber(++number)
  }

  const decreaseIt = () => {
    setNumber(--number)
  }

  const collectIt = event => setEnteredName(event.target.value)

  return (
    <div className='m-2'>
      <h5>The number is {number} and its cube is: {result} </h5>
      <button className='btn btn-primary btn-sm m-2' onClick={decreaseIt}>-</button>
      <button className='btn btn-primary btn-sm m-2' onClick={increaseIt}>+</button>
      <hr/>

      {/* Whenever we are typing a name in the input box, the state will change every time we type a new char. */}
      {/* Because the state changes every time we type the name, the whole component will re-execute again and again/ */}
      {/* Since we have a cube(), this function will be called every time the component re-executes, leading to performance issues in the whole component */}
      <p>The name is: {enteredName}</p>
      <input type='text' onChange={collectIt} />
    </div>
  )
}

export default Launch

// Using a useMemo will help us with the problem in the above scenario.