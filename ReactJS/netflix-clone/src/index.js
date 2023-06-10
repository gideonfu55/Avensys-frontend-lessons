import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'
import { auth } from './authentication/firebase';

import Navbar from './components/Navbar'
import Movies from './components/Movies'
import Login from './components/Login';
import { onAuthStateChanged } from 'firebase/auth';

function App() {

  const [ user, setUser ] = useState(null);
  // const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, userAuth => {
      setUser(userAuth)
    });

    // Cleanup subscription on unmount
    return unsubscribe;
  }, [])

  if (user) {
    return (
      <div>
        <Navbar />
        <Movies genreId={28} genreTitle={'Action'}/>
        <Movies genreId={35} genreTitle={'Comedy'}/>
        <Movies genreId={16} genreTitle={'Animated'}/>
      </div>
    )
  } else return (
    <Login/>
  )
}

render(<App />, document.getElementById('root'))
// render(<Provider store={movieStore}><App /></Provider>, document.getElementById('root'))