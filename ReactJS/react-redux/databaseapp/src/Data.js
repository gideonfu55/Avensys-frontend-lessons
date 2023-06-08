import React from 'react'
import { useState } from 'react'
import { db } from './authentication/firebase'

function Data() {

  const [ myTitle, setMyTitle ] = useState('')
  const [ myDescription, setMyDescription ] = useState('')

  const collectTitle = (event) => setMyTitle(event.target.value)
  const collectDescription = (event) => setMyDescription(event.target.value)

  // How to store your data fields in the database (e.g. using Firebase + Firestore):
  // 1. Access the collection in Firestore.
  // 2. Use add method to add a new document to the collection.
  //    - Give an alert if you wish.
  // 3. Place in a try catch block for error handling.

  const saveDataToDB = () => {
    try {
      db.collection("myData").add({
        "title": myTitle,
        "description": myDescription
      },
      alert('Your data has been saved!')
    )}
    catch (error) {
      alert(error)
    }
  }

  return (
    <div className='m-3'>
      <label className='fw-bold mt-1 mb-1'>Enter Title:</label>
      <br/>
      <input onChange={collectTitle} type='text'/>
      <br/>
      <label className='fw-bold mt-4 mb-1'>Enter Description:</label>
      <br/>
      <textarea onChange={collectDescription} rows={10} cols={25}></textarea>
      <br/><br/>
      <button onClick={saveDataToDB} className='btn btn-primary'>Save</button>
    </div>
  )
}

export default Data