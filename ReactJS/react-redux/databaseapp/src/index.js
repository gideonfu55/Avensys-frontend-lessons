import { render } from "react-dom";

function App() {
  return (
    <div>
      <h5 className="m-3 fw-bold">React Connection to a Dat</h5>
    </div>
  )
}

render(<App/>, document.getElementById('root'))