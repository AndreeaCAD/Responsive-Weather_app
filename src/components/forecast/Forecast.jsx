import React from "react";
import "./forecst.css";
import { iconUrlFromCode } from "../../apiService";

function Forecast({ title, items }) {
  // console.log(items);
  return (
    <>
      <div className="forecast_container">{title}</div>
      <hr></hr>
      <div className="forecast_details_main_container">
        {items?.map((item, index) => (
          <div className="forecast_details" key={index}>
            <div className="hour">{item.title}</div>
            <img src={iconUrlFromCode(item.icon)} alt="an orange sun" />
            <div>{`${item.temp.toFixed()}°`}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Forecast;
