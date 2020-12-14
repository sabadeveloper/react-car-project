import React from "react";
import "./home.css";
import bg from "./bg.jpg";
import car from "./car.png";
import city from "./city.png";
import city1 from "./city1.png";
import road from "./road.jpg";
import sky from "./sky.jpg";
import wheel from "./wheel.png";

const Home = () => {
  return (
    <div className="main">
      <div
        style={{
          textAlign: "center",
          marginTop: "150px",
          fontSize: "35px",
          fontFamily: "Comic Sans MS",
        }}
      >
        <h1 className="blinking">Explore Your Car!</h1>
      </div>
      <div className="road"></div>
      <div className="tree"></div>
      <div className="car">
        <img src={car} />
      </div>
      <div className="wheel">
        <img src={wheel} className="back-wheel" />
        <img src={wheel} className="front-wheel" />
      </div>
    </div>
  );

  {
  }
};

export default Home;
