import { render } from "react-dom";
import { First } from "./First";
import { Provider } from "react-redux";
import { todoStore } from "./redux";
import Second from "./Second";

function App() {
  return (
    <div>
      <h5 className="m-3 fw-bold">Welcome to Todo List App</h5>
      <First/>
      <Second/>
    </div>
  )
}

render(<Provider store={todoStore}><App/></Provider>, document.getElementById('root'))