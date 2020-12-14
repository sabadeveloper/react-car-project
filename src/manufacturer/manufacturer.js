import React, { useState, useEffect } from "react";
import "./manufacturer.css";

const Manufacturer = () => {
  const [cars, setCars] = useState(undefined);

  const ManufacturComponent = (props) => {
    if (props.cars == undefined) {
      return "";
    }

    return (
      <div className="grid-container">
        <table
          style={{ width: "118%", marginLeft: "20px" }}
          className="styled-table"
        >
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th style={{ fontSize: "40px" }}>Car</th>
              <th style={{ fontSize: "40px" }}>Manufacturer</th>
            </tr>
          </thead>

          <tbody>
            {props.cars.map((car) => (
              <tr>
                <td key={car.Make}>{car.MakeName}</td>
                <td key={car.Make}>{car.MfrName}</td>{" "}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  useEffect(() => {
    fetch(
      "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForManufacturerAndYear/mer?year=2014&format=json"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setCars(result.Results.slice(0, 50));
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <div>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "100px",
        }}
      >
        <div className="signn">
          <span className="fast-flicker">M</span>
          <span style={{ fontSize: "100px" }}>anufac</span>
          <span className="flicker">t</span>
          <span>urer</span>
        </div>
      </div>
      <ManufacturComponent cars={cars} />
    </div>
  );
};

export default Manufacturer;
