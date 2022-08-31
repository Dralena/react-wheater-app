import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-6">
            <input type="search" placeholder="Enter a city" className="form" />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primry" />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesdy 07:00</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Sunny"
          />{" "}
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitaion: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
