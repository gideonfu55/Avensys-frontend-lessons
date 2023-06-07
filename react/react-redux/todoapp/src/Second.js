import React from 'react'
import { useSelector } from 'react-redux'

function Second() {

  const output = useSelector(
    data => data.todoReducer.tasks
  )

  return (
    <div className='m-4'>
      <h5 className='fw-bold'>Second component (repeating from the todolist):</h5>
      {
        output.map(task => {
          return <li className='ms-3'>{task}</li>
        })
      }
    </div>
  )
}

export default Second