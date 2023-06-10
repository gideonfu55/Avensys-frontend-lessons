import React from 'react'
import { render } from 'react-dom'
import Navbar from './components/Navbar'
import Movies from './components/Movies'

function App() {
  return (
    <div>
      <Navbar />
      <Movies genreId={28} genreTitle={'Action'}/>
      <Movies genreId={35} genreTitle={'Comedy'}/>
      <Movies genreId={16} genreTitle={'Animated'}/>
    </div>
  )
}

render(<App />, document.getElementById('root'))
// render(<Provider store={movieStore}><App /></Provider>, document.getElementById('root'))