import React from 'react'
import { useState } from 'react'

function Data() {

  const [ myTitle, setMyTitle ] = useState('')
  const [ myDescription, setMyDescription ] = useState('')

  const collectTitle = (event) => setMyTitle(event.target.value)
  const collectDescription = (event) => setMyDescription(event.target.value)

  // How to store your data fields in the database (e.g. using Firebase + Firestore)

  return (
    <div className='m-3'>
      <label className='fw-bold mt-1 mb-1'>Enter Title:</label>
      <br/>
      <input onChange={collectTitle} type='text'/>

      <br/>
      
      <label className='fw-bold mt-4 mb-1'>Enter Description:</label>
      <br/>
      <textarea onChange={collectDescription} rows={10} cols={25}></textarea>
      <br/>
      <br/>
      <button className='btn btn-primary'>Save</button>
    </div>
  )
}

export default Data