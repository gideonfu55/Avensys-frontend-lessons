import { render } from "react-dom";
import RegistrationForm from "./RegistrationForm";

function App() {
  return (
    <div>
      <h5 className="m-3 fw-bold">Welcome to Form Validation</h5>

      <RegistrationForm />
    </div>
  )
}

render(<App/>, document.getElementById('root'))

//