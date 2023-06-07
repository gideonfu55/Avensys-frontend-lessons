/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import get from "axios"

function WeatherWidget({ city }) {

  // Declare required useState for weatherData:
  const [ weatherData, setWeatherData] = useState('')
  const apiKey = process.env.REACT_APP_API_KEY

  // Function to fetch Weather Data from WeatherAPI:
  const fetchWeatherData = async() => {
    try {
      const response = await get(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
      );

      // Set weather data if the response returns without errors:
      setWeatherData(response.data);
      
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    // Run once for to obtain first set of data:
    fetchWeatherData();

    // To fetch and update the weather data every 5 mins subsequently:
    const interval = setInterval(() => {
      fetchWeatherData();
    }, 5 * 60 * 1000);

    return clearInterval(interval);
  })

  // HTML:
  // Condition if there is an error or if the response is not immediate:
  if (!weatherData) {
    return (
      <div>Loading...</div>
    )
  }

  // Return actual HTML for response:
  return (

    <div className='card border border-info border-3 p-3 m-3' style={{ width: "18rem" }}>
      <div className='card-body'>
        <h3 className='fw-bold mb-4'>Weather Information</h3>
        <p>City: {weatherData.location.name}</p>
        <p>Temperature: {weatherData.current.temp_c}°C</p>
        <p>Description: {weatherData.current.condition.text}</p>
        <img src={weatherData.current.condition.icon}></img>
      </div>
    </div>
  );
}

export default WeatherWidget