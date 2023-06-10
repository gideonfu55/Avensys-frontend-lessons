import React from 'react';
import { auth, provider } from '../authentication/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

function Login() {
  const signInWithGoogle = async() => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button className='btn btn-primary m-3' onClick={signInWithGoogle}>
      Sign In with Google
    </button>
  );
}

export default Login;