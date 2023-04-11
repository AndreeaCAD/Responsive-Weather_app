import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import "./inputCity.css";

function InputCity() {
  return (
    <div className="container">
      <div className="container_input">
        <input
          type="text"
          className="input"
          name="city"
          placeholder="Search for city..."
        />
        <UilSearch className="sign" />
        <UilLocationPoint className="sign" />
      </div>
      <div className="container-grades">
        <button name="metric" className="button-grades">
          °C
        </button>
        <button name="imperial" className="button-grades">
          °F
        </button>
      </div>
    </div>
  );
}

export default InputCity;
