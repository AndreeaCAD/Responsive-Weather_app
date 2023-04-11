import React from "react";
import "./forecst.css";

function Forecast({ title }) {
  return (
    <>
      <div className="forecast_container">{title}</div>
      <hr></hr>
      <div className="forecast_details_main_container">
        <div className="forecast_details">
          <div className="hour">04:30 PM</div>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="an orange sun"
          />
          <div>30°</div>
        </div>
      </div>
    </>
  );
}

export default Forecast;
