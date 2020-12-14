import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import bmw from "./bmw.png";
import merso from "./merso.png";
import tesla from "./tesla.png";
import toyota from "./toyota.png";
import volkswagen from "./volkswagen.png";

import "./cars.css";

const Cars = (props) => {
  const [mercedes, setMercedes] = useState(false);
  return (
    <div
      /*style={{ top: "40%", display: "flex",  position: "absolute" }} */
      style={{
        backgroundImage: `url("https://i.pinimg.com/originals/56/c6/33/56c633de68fb2896d00c16c43d5195b5.jpg")`,
        backgroundRepeat: "no-repeat",
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          top: "40%",
          display: "flex",
          position: "absolute",
          left: "5%",
        }}
      >
        <div className="zoomin">
          <Link to="/cars/mercedes">
            <img src={merso} />
            {/* {() => (mercedes ? props.callback() : "")} */}
          </Link>
        </div>

        <div className="zoomin">
          <img src={volkswagen} />
        </div>
        <div className="zoomin">
          <img src={tesla} />
        </div>
        <div className="zoomin" style={{ height: "200px" }}>
          <img src={toyota} />
        </div>
        <div className="zoomin">
          <Link to="/cars/bmw">
            {" "}
            <img src={bmw} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cars;
