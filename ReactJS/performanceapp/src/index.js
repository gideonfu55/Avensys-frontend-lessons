import { render } from "react-dom";
import Launch from "./Launch";

function App() {
  return (
    <div>
      <h5 className="m-3 fw-bold">Chart App</h5>
      <Launch/>
    </div>
  )
}

render(<App/>, document.getElementById('root'))
