import { render } from "react-dom";
import MyChart from "./MyChart";

function App() {
  return (
    <div>
      <h5 className="m-3 fw-bold">Chart App</h5>
      <MyChart/>
    </div>
  )
}

render(<App/>, document.getElementById('root'))