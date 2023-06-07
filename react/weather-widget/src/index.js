import { render } from "react-dom";
import WeatherWidget from "./WeatherWidget";

function App() {

  return (
    <div className="mt-2">
      <WeatherWidget/>
    </div>
  );
}

render(<App/>, document.getElementById("root"))