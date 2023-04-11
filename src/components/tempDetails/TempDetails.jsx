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

function TempDetails() {
  return (
    <>
      <div className="temperature_container">
        <div className="weather_condition">Cloudy</div>
      </div>
      <div className="temp_main_container">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt="orange-sun"
        />
        <div className="temp">30°</div>
        <div className="temp_details_container">
          <div className="w_details">
            <UilTemperature />
            Real feel:
            <span> 32°</span>
          </div>
          <div className="w_details">
            <UilTear />
            Humidity:
            <span>45%</span>
          </div>
          <div className="w_details">
            <UilWind />
            Wind:
            <span>11km/h</span>
          </div>
        </div>
      </div>
      <div className="weather">
        <div className="weather_particularity">
          <UilSun />
          <p>
            Rise:<span>06:45 AM</span>
          </p>
        </div>
        <div className="weather_particularity">
          <UilSunset />
          <p>
            Set:<span>07:30 PM</span>
          </p>
        </div>
        <div className="weather_particularity">
          <UilArrowUp />
          <p>
            High:<span>30°</span>
          </p>
        </div>
        <div className="weather_particularity">
          <UilArrowDown />
          <p>
            Low:<span>24°</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default TempDetails;
