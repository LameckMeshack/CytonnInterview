import "./hourlyCard.css";
import { ReactComponent as Clock } from "../assets/clock.svg";
const HourlyWeatherCard = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="header-content">
          <Clock className="clock" />
          <p>4:00 PM</p>
        </h4>
      </div>
      <hr />
      <div className="data">
        <ul>
          <li>Temperature</li>
          <li>WindSpeed</li>
          <li>Hunidity</li>
          <li>Cloud Cover</li>
        </ul>
      </div>
    </div>
  );
};

export default HourlyWeatherCard;
