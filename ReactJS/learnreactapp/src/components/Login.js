/* eslint-disable no-undef */
import React from 'react'
import { useState } from 'react'

function Login() {

  const [ password, setpassword ] = useState('')
  const [ username, setusername ] = useState('')
  const [ message, setmessage ] = useState('')

  const handlePasswordChange = event => {
    setpassword(event.target.value)
  }

  const handleUsernameChange = event => {
    setusername(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault();
    
    if (username === 'Raju' && password === 'Welcome') {
      setmessage('Valid user');
    } else {
      setmessage('Invalid user');
    }
  }

  return (
    <div class="d-flex flex-column align-items-center" style={{ marginTop: "50vh" }}>
      <h3 className='fw-bold mb-4'>Login</h3>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input class="ms-2" type='text' onChange={handleUsernameChange}/>
        <br/><br/>
        <label>Password:</label>
        <input class="ms-2" type='text' onChange={handlePasswordChange}/>

        <br/>
        <center>
          <button className='btn btn-primary mt-4' type='submit'>Login</button>
        </center>
      </form>

       <p>{message}</p>
    </div>

  )
}

export default Login