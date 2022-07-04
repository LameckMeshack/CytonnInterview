import "./hourCard.css";

const HourCard = ({ time, temp, humidity, windSpeed, cloudCover }) => {
  return (
    <div className="hour-card">
      <div className="hour-card-top">
        <div className="plane">
          <img src={require("../assets/plane.png")} width="30px" alt="" />
        </div>
        <div className="time">
          {time}00 <span className="small">HRS</span>
        </div>
      </div>
      <div className="temp-box">
        <img src={require("../assets/temp.png")} width=" 15px" alt="" />

        <span className="temp">{temp}°C</span>
        <div className="temp"></div>
      </div>
      <div className="hour-card-bottom">
        <div className="box">
          <img src={require("../assets/wind.png")} width=" 15px" alt="" />
          <div className="reading"> {windSpeed} km/h</div>
          <div className="text">wind </div>
        </div>
        <div className="box">
          <img src={require("../assets/humidity.png")} width=" 15px" alt="" />
          <div className="reading">{humidity}%</div>
          <div className="text">humidity</div>
        </div>
        <div className="box">
          <img src={require("../assets/cloud.png")} width=" 15px" alt="" />
          <div className="reading">{cloudCover}%</div>
          <div className="text">cloudcover</div>
        </div>
      </div>
    </div>
  );
};

export default HourCard;
