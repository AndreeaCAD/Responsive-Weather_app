import React from "react";
import "./tempDetails.css";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  UilArrowUp,
  UilArrowDown,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../../apiService";

function TempDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <>
      <div className="temperature_container">
        <div className="weather_condition">{details}</div>
      </div>
      <div className="temp_main_container">
        <img src={iconUrlFromCode(icon)} alt="orange-sun" />
        <div className="temp">{`${temp.toFixed()}°`}</div>
        <div className="temp_details_container">
          <div className="w_details">
            <UilTemperature />
            Real feel:
            <span> {`${feels_like.toFixed()}°`}</span>
          </div>
          <div className="w_details">
            <UilTear />
            Humidity:
            <span>{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="w_details">
            <UilWind />
            Wind:
            <span>{`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>
      <div className="weather">
        <div className="weather_particularity">
          <UilSun />
          <p>
            Rise:<span> {formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
          </p>
        </div>
        <div className="weather_particularity">
          <UilSunset />
          <p>
            Set:<span>{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
          </p>
        </div>
        <div className="weather_particularity">
          <UilArrowUp />
          <p>
            High:<span>{`${temp_max.toFixed()}°`}</span>
          </p>
        </div>
        <div className="weather_particularity">
          <UilArrowDown />
          <p>
            Low:<span>{`${temp_min.toFixed()}°`}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default TempDetails;
