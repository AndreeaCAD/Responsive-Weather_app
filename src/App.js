import "./App.css";
import InputCity from "./components/inputCity/InputCity";
import TimeAndLocation from "./components/timeAndLocation/TimeAndLocation";
import TempDetails from "./components/tempDetails/TempDetails";
import Forecast from "./components/forecast/Forecast";
import getWeatherData from "./apiService";

function App() {
  const fetchWeather = async () => {
    const data = await getWeatherData(44.34, 10.99, "alerts", "imperial");
    console.log("acestea sunt datele", data);
  };
  fetchWeather();

  return (
    <div className="app">
      <InputCity />
      <TimeAndLocation />
      <TempDetails />
      <Forecast title="hourly forecast" />
      <Forecast title="daily forecast" />
    </div>
  );
}

export default App;
