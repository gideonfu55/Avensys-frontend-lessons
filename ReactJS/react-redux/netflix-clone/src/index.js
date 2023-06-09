import React from 'react'
import { render } from 'react-dom'
import Navbar from './components/Navbar'
import ActionMovies from './components/genres/ActionMovies'

function App() {
  return (
    <div>
      <Navbar />
      <ActionMovies/>
    </div>
  )
}

render(<App />, document.getElementById('root'))