import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ country }) => {
  const [weather, setWeather] = useState("");
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const key = `4dd06535601b78b0aa3200a31a2a0f43`;
    const url = `http://api.weatherstack.com/current?access_key=${key}&query=${country.capital}`;
    axios.get(url).then((res) => {
      setWeather(res.data.current);
      setDisplay(true);
    });
  }, [country.capital]);

  return (
    <div>
      {!display ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h3>Weather in {country.capital}</h3>
          <img src={weather.weather_icons} alt={weather.weather_descriptions} />
          <div>Current time: {weather.observation_time}</div>
          <span>Temperature: {weather.temperature} C</span>
          <div>Condition: {weather.weather_descriptions}</div>
          <span>
            Wind: {weather.wind_speed} kph {weather.wind_dir}
          </span>
        </div>
      )}
    </div>
  );
};

export default Weather;
