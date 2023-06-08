import { render } from "react-dom";
import Data from "./Data";

function App() {
  return (
    <div>
      <h5 className="m-3 fw-bold">React Connection to a Database</h5>
      <Data/>
    </div>
  )
}

render(<App/>, document.getElementById('root'))