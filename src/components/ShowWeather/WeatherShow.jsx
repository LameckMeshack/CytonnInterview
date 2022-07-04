import React, { useState } from "react";
import "./weatherShow.css";
import { ReactComponent as Globe } from "../assets/globe.svg";
import HourCard from "../cards/HourCard";
import ErrorMsgBox from "../Msg/ErrorMsgBox";
const WeatherShow = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const [time, setTime] = useState([]);
  const [temp, setTemp] = useState([]);
  const [humidity, setHumidity] = useState([]);
  const [windSpeed, setWindSpeed] = useState([]);
  const [cloudCover, setCloudCover] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [err, setErr] = useState(false);

  const getWeather = async (e) => {
    setErr(false);
    e.preventDefault();
    const api_call = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,cloudcover_mid,windspeed_120m`
    );
    const data = await api_call.json();

    if (latitude && longitude) {
      if (data) {
        if (data.hourly) {
          setTemp(data.hourly.temperature_2m.slice(6, 19));
          setHumidity(data.hourly.relativehumidity_2m.slice(6, 19));
          setWindSpeed(data.hourly.windspeed_120m.slice(6, 19));
          setCloudCover(data.hourly.cloudcover_mid.slice(6, 19));
          setTime(data.hourly.time.slice(6, 19));
        }
        //customizing error messages for the user to understand what went wrong
        if (data.error) {
          setErr(true);
          setErrorMsg(data.reason);
          //if the errorMsg has the word "Latitude" AND "Float" OR "90" in it, then the user has entered a wrong latitude else if the errorMsg has the word "Longitude" AND "Float" OR "180" in it, then the user has entered a wrong longitude
          if (
            data.reason.includes("latitude") &&
            data.reason.includes("Float")
          ) {
            setErrorMsg(
              "Invalid latitude.It must be a float/ decimal number between -90 and 90"
            );
          } else if (
            data.reason.includes("longitude") &&
            data.reason.includes("Float")
          ) {
            setErrorMsg(
              "Invalid longitude.It must be a float/ decimal number between -180 and 180"
            );
          }
        }
      }
    }
  };
  //object for the hourly weather cards
  const hourWeather = {
    time: time,
    temp: temp,
    humidity: humidity,
    windSpeed: windSpeed,
    cloudCover: cloudCover,
  };

  return (
    <>
      <div className="weather-box">
        <h2>Enter The Points</h2>
        <form onSubmit={(e) => getWeather(e)}>
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
                name="longitude"
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

      {err ? (
        <ErrorMsgBox errorMsg={errorMsg} />
      ) : (
        <div className="container">
          {/* loop to create the hourly weather cards */}
          {hourWeather.time.map((time, index) => (
            <HourCard
              key={index}
              time={time.split("T")[1].split(":")[0]}
              temp={hourWeather.temp[index]}
              humidity={hourWeather.humidity[index]}
              windSpeed={hourWeather.windSpeed[index]}
              cloudCover={hourWeather.cloudCover[index]}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default WeatherShow;
