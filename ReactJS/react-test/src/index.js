import React from 'react'
import { render } from 'react-dom'
import Launch from './Launch'

function App() {
  return (
    <div>
      <h3>React Test App</h3>
      <Launch />
    </div>
  )
}

render(<App />, document.getElementById('root'))