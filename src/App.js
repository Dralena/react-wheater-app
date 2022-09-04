import "./App.css";
import React from "react";
import Weather from "/Weather";

function App() {
  return (
    <div className="container">
      <h1>Weather App</h1>
      <Weather />
      <footer>
        This project was coded by Carmen von Känel and is{" "}
        <a
          href="https://github.com/Dralena/react-wheater-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-source
        </a>
        .{" "}
      </footer>
    </div>
  );
}

export default App;
