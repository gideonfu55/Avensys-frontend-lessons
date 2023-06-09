import React from 'react'
import { render } from 'react-dom'

export function App() {
  return (
    <div>
      <h3>React Test App</h3>
    </div>
  )
}

render(<App />, document.getElementById('root'))