import React from "react";

export const Box = ({ cityName, countryName, temperature }) => {
  const tempEventC = Math.floor(Number(`${temperature}`) - 273.5);
  const tempEventF = Math.floor(tempEventC * 1.8 + 32);
  console.log("temp", tempEventC);
  return (
    <div className="box">
      <div className="city-country">
        {cityName}, {countryName}
      </div>
      <div className="temp">
        {tempEventC}℃, {tempEventF}℉
      </div>
    </div>
  );
};
