/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-redeclare */
/* eslint-disable no-undef */
import { signInWithPopup } from 'firebase/auth'
import React, { useContext } from 'react'
import { auth, provider } from '../authentication/firebase';
import { useNavigate } from 'react-router-dom';
import { myBasket } from '..';

function GoogleLogin() {

  const navigate = useNavigate();

  // set = setIsLoggedIn
  const {set} = useContext(myBasket)

  const login = () => {

    // Login to display the window popup
    signInWithPopup(auth, provider)
      .then(result => {
        
        // Handle successful sign-in:
        const user = result.user;
        console.log('User', user);
        alert(`Hi ${user.displayName}, your login was successful. Welcome to the application!`)

        // Navigate to page:
        set(true)
        navigate("/mobile")
      })
      .catch((error) => {
        // Handle sign-in error
        // console.log('Sign-in error:', error);
        alert("Your login details were not verified successfully. Please try again.")
      });

  }

  return (
    <div>
      <button onClick={login} className='btn btn-primary btn-sm mt-3 ms-2'>
        Sign In with Google
      </button>
    </div>
  )
}

export default GoogleLogin