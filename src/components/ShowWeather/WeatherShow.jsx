import React, { useState } from "react";
import "./weatherShow.css";
import { ReactComponent as Globe } from "../assets/globe.svg";

const WeatherShow = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [weather, setWeather] = useState("");
  const [error, setError] = useState("");

  const getWeather = async (e) => {
    e.preventDefault();
    const api_call = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,cloudcover_mid,windspeed_120m`
    );
    const data = await api_call.json();
    setWeather(data);
    setError("");
  };
  console.log(latitude, longitude);
  console.log(weather);

  return (
    <div className="weather-box">
      <h2>Enter The Points</h2>
      <form onSubmit={getWeather}>
        <div className="location">
          <div className="input-box">
            <input
              type="text"
              name="latitude"
              required
              onChange={(e) => setLatitude(e.target.value)}
            />
            <label>Latitude</label>
          </div>
          <div className="globe">
            <h6>
              <Globe />
              location
            </h6>
          </div>
          <div className="input-box">
            <input
              type="text"
              name="latitude"
              required
              onChange={(e) => setLongitude(e.target.value)}
            />
            <label>Longitude</label>
          </div>
        </div>
        <button className="weather-btn" type="submit">
          Get Weather
        </button>
      </form>
    </div>
  );
};

export default WeatherShow;
