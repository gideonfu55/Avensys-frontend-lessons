/* eslint-disable no-undef */
import React, { useState } from 'react'

function Todo() {

  const [ currentTasks, setTasks ] = useState([
    "Eating ramen", 
    "Playing guitar", 
    "Watching a movie"
  ])

  const [ task, setTask ] = useState("")

  const collectInput = event => { 
    let inputValue = event.target.value;
    setTask(inputValue);
  }

  const addTask = () => {
    setTasks([...currentTasks, task])
  }

  return (
    <div className='m-2'>
      <h5 className='fw-bold'>Enter Task:</h5>
      <input type='text' onChange={collectInput} />
      <br/><br/>
      <button onClick={addTask}>Submit</button>

      <br/>
      {/* Logic to iterate the array(myData) and display the three tasks one by one */}
      <h5 className="mt-3 fw-bold">Current Todo List:</h5>
      <ul>
        {currentTasks.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todo