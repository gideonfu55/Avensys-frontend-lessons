import React from 'react'
import { render } from 'react-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
    </div>
  )
}

render(<App />, document.getElementById('root'))