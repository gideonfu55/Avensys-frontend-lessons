import { render } from "react-dom";
import WeatherWidget from "./WeatherWidget";

function App() {

  return (
    <div className="mt-2 mx-4 d-lg-flex">
      <WeatherWidget city="Singapore"/>
      <WeatherWidget city="London"/>
      <WeatherWidget city="New York"/>
      <WeatherWidget city="Israel"/>
    </div>
  );
}

render(<App/>, document.getElementById("root"))