import { useFormik } from 'formik'
import React from 'react'

function RegistrationForm() {

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: ''
    },
    onSubmit: values => {
      console.log('Form data', values)
    }
  })

  return (
    <div className='mx-3'>
    <h6 className='fw-bold'>Registration Form</h6>
      <form>
        <label>Enter Username:</label>
        <br />
        <input type="text" name='username' value={formik.initialValues.username}/>

        <br /><br />
        <label>Enter Password:</label>
        <br />
        <input type="text" name='password' value={formik.initialValues.password}/>

        <br /><br />
        <label>Enter Email:</label>
        <br />
        <input type="text" name='email' value={formik.initialValues.email}/>

        <br /><br />
        <button className='btn btn-primary' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default RegistrationForm