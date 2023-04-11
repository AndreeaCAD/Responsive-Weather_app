import React, { useState } from "react";
import { UilSearch } from "@iconscout/react-unicons";
import "./inputCity.css";

function InputCity({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  return (
    <div className="container">
      <div className="container_input">
        <input
          type="text"
          className="input"
          valu={city}
          placeholder="Search for city..."
          onChange={(e) => setCity(e.currentTarget.value)}
        />
        <UilSearch className="sign" onClick={handleSearchClick} />
      </div>
      <div className="container-grades">
        <button
          name="metric"
          className="button-grades"
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <button
          name="imperial"
          className="button-grades"
          onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default InputCity;
