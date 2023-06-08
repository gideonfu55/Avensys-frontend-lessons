import React from 'react'
import { useState } from 'react'
import { db } from './authentication/firebase'
import { useEffect } from 'react'

function Data() {

  const [ myTitle, setMyTitle ] = useState('')
  const [ myDescription, setMyDescription ] = useState('')
  const [ dbData, setDbData ] = useState([])

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

  useEffect(() => {
    // Logic to read data from the firestore database
    db.collection("myData").onSnapshot((snapshotData) => {
      const data = [];
      snapshotData.forEach(doc => {
        data.push(doc)
      });
      setDbData(data);
    })
  })


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

      <h5 className='mt-3 fw-bold mt-4 mb-2'>Database Entries:</h5>
        <table className='table table-primary'>
          <thead>
            <tr className="table-success">
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {
              dbData.map((doc, index) => {
                return (
                  <tr key={doc.id}>
                    <td>{index + 1}</td>
                    <td>{doc.data().title}</td>
                    <td>{doc.data().description}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
    </div>
  )
}

export default Data