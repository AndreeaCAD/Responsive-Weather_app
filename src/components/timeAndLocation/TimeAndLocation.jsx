import React from "react";
import "./timeAndLocation.css";
import { formatToLocalTime } from "../../apiService";

function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <>
      <div className="time_location_container">
        <div className="time">{formatToLocalTime(dt, timezone)}</div>
        <div className="city">{`${name}, ${country}`}</div>
      </div>
    </>
  );
}

export default TimeAndLocation;
