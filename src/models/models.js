import React, { useState, useEffect } from "react";
import "./models.css";

const Models = () => {
  const [cars, setCars] = useState(undefined);

  const CarsComponent = (props) => {
    if (props.cars == undefined) {
      return "";
    }

    return (
      <div className="grid-container">
        {props.cars.map((car) => (
          <table style={{ width: "80%" }} className="styled-table">
            <tr key={car.Make}>{car.Make_Name}</tr>
            {/* <h3 key={car.name}>{car.Model_Name} </h3> */}
            {/* <h3 key={car.username}>{car.username} </h3> */}
            {/* <h3 key={user.email}>{user.email} </h3> */}
          </table>
        ))}
      </div>
    );
  };

  useEffect(() => {
    fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json")
      .then((res) => res.json())
      .then(
        (result) => {
          setCars(result.Results.slice(0, 500));
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <div>
      <div style={{ position: "absolute", left: "27%", top: "30px" }}>
        <h1 className="blink_me" style={{ fontSize: "70px" }}>
          All Car Models!
        </h1>
      </div>
      <CarsComponent cars={cars} />
    </div>
  );
};

export default Models;
