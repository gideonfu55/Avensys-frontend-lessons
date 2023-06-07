import { render } from "react-dom";
import { Provider } from "react-redux";
import { ecommerceStore } from "./redux";
import First from "./First";
import Second from "./Second";
import Third from "./Third";

function App() {
  return (
    <div>
      <h5 className="m-3 fw-bold">Welcome to Ecommerce Redux App</h5>
      <div className="d-flex">
        <First/>
        <Second/>
        <Third/>
      </div>
    </div>
  )
}

render(<Provider store={ecommerceStore}><App/></Provider>, document.getElementById('root'))
