import React from 'react'
import { render } from 'react-dom'
import Navbar from './components/Navbar'
import ActionMovies from './components/genres/ActionMovies'
import ComedyMovies from './components/genres/ComedyMovies'
import AnimatedMovies from './components/genres/AnimatedMovies'

function App() {
  return (
    <div>
      <Navbar />
      <ActionMovies />
      <ComedyMovies />
      <AnimatedMovies />
    </div>
  )
}

render(<App />, document.getElementById('root'))