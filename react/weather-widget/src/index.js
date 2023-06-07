import { render } from "react-dom";
import WeatherWidget from "./WeatherWidget";

function App() {

  return (
    <div className="mt-2 d-flex">
      <WeatherWidget city="Singapore"/>
      <WeatherWidget city="London"/>
      <WeatherWidget city="New York"/>
      <WeatherWidget city="Israel"/>
    </div>
  );
}

render(<App/>, document.getElementById("root"))