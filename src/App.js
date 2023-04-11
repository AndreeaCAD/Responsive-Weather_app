import orange from "./assets/orange.jpeg";
import blue from "./assets/blue.jpeg";
import "./App.css";
import InputCity from "./components/inputCity/InputCity";
import TimeAndLocation from "./components/timeAndLocation/TimeAndLocation";
import TempDetails from "./components/tempDetails/TempDetails";
import Forecast from "./components/forecast/Forecast";
// import getWeatherData from "./apiService";
import { useEffect, useState } from "react";
import getFormattedWeatherData from "./apiService";

function App() {
  const [query, setQuery] = useState({ q: "bucharest" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [background, setBackground] = useState(orange);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);

        const threshold = units === "metric" ? 20 : 60;
        if (data.temp <= threshold) setBackground(blue);
        else setBackground(orange);
      });
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${background})`,
        // objectFit: "contain",
        backgroundSize: "cover",
      }}
    >
      <InputCity setQuery={setQuery} units={units} setUnits={setUnits} />
      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TempDetails weather={weather} />
          <Forecast title="hourly forecast" items={weather.hourly} />
          <Forecast title="daily forecast" items={weather.daily} />
        </>
      )}
    </div>
  );
}

export default App;
