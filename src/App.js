import Header from "./components/Header";
import HourlyWeatherCard from "./components/HourlyCard/HourlyWeatherCard";
import WeatherShow from "./components/ShowWeather/WeatherShow";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <WeatherShow />
      <HourlyWeatherCard />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
