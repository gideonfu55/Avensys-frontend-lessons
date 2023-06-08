import { useFormik } from 'formik'
import React from 'react'

function RegistrationForm() {

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: ''
    },

    validate: data => {
      let errors = {}

      if (!data.username) {
        errors.username = "Username is required, cannot be empty."
      }

      if (!data.username.match(/^[A-Za-z0-9]{3,}$/)) {
        errors.username = "Username must be at least 3 characters long."
      }
      
      if (!data.password) {
        errors.password = "Password is required, cannot be empty."
      }

      if (!data.password.match(/^[A-Za-z0-9]{8,}$/)) {
        errors.password = "Password must be at least 8 characters long."
      }

      if (!data.email) {
        errors.email = "Email is required, cannot be empty."
      }

      if (!data.email.match(/^[A-Za-z0-9]{3,}@[A-Za-z0-9]{3,}\.[A-Za-z0-9]{2,}$/)) {
        errors.email = "Email must be in email format"
      }

      return errors
    },

    onChange: values => {
      // console.log('Form data', values)
    },

    onSubmit: values => {
      // console.log('Form data', values)
    }
  })

  return (
    <div className='mx-3'>
    <h6 className='fw-bold'>Registration Form</h6>
      <form>
        <label>Enter Username:</label>
        <br/>
        <input type="text" name='username' value={formik.values.username} onChange={formik.handleChange} />
        { formik.errors.username ? <span className='text-danger ms-2'>{formik.errors.username}</span> : null }

        <br/><br/>
        <label>Enter Password:</label>
        <br/>
        <input type="text" name='password' value={formik.values.password} onChange={formik.handleChange} />
        { formik.errors.password ? <span className='text-danger ms-2'>{formik.errors.password}</span> : null }

        <br/><br/>
        <label>Enter Email:</label>
        <br/>
        <input type="text" name='email' value={formik.values.email} onChange={formik.handleChange} />
        { formik.errors.email ? <span className='text-danger ms-2'>{formik.errors.email}</span> : null }

        <br/><br/>
        <button className='btn btn-primary' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default RegistrationForm