import "./hourlyCard.css";
import { ReactComponent as Clock } from "../assets/clock.svg";
const HourlyWeatherCard = ({ time, temp, humidity, windSpeed, cloudCover }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="header-content">
          <Clock className="clock" />
          <p>{time}</p>
        </h4>
      </div>
      <hr />
      <div className="data">
        <ul>
          <li>Temperature {temp}</li>
          <li>WindSpeed {windSpeed}</li>
          <li>Humidity {humidity}</li>
          <li>Cloud Cover {cloudCover}</li>
        </ul>
      </div>
    </div>
  );
};

export default HourlyWeatherCard;
