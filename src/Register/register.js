import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import car from "./car.jpg";
import "./register.css";

const MyFormSubElement = (props) => {
  const [formElement, setFormElement] = useState("");
  const [formElementError, setFormElementError] = useState(false);
  React.useEffect(() => {
    if (formElement === "") {
      return;
    }

    if (formElement.match(props.regex_logic)) {
      setFormElementError(false);
    } else {
      setFormElementError(true);
    }
  }, [formElement]);

  return (
    <div className="container">
      <label className="labels" for={props.name}>
        {props.children}
      </label>
      <input
        className="inputs"
        value={formElement}
        onChange={(e) => {
          setFormElement(e.target.value);
        }}
        type={props.type}
        name={props.name}
      />
      {formElementError === true ? (
        <span style={{ color: "red" }}>{props.regexErrorMessage}</span>
      ) : (
        " "
      )}
    </div>
  );
};

export class MyRegisterForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        style={{
          backgroundImage: `url("https://blog.spoongraphics.co.uk/wp-content/uploads/2019/03/final-lg.jpg")`,
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <div className="divdiv">
          <div className="main-div-register">
            <div className="register">
              <h1>Register</h1>
            </div>
            <MyFormSubElement
              name="name-field"
              type="text"
              regex_logic={/^[a-zA-Z]+$/}
              regexErrorMessage="It must only contain letters"
            >
              First Name
            </MyFormSubElement>
            <MyFormSubElement
              name="lastname"
              type="text"
              regex_logic={/^[a-zA-Z]+$/}
              regexErrorMessage="It must only contain letters"
            >
              Last Name
            </MyFormSubElement>
            <MyFormSubElement
              name="email"
              type="email"
              regex_logic={
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              }
              regexErrorMessage="Please provide a valid email address"
            >
              Email :
            </MyFormSubElement>
            <div className="box">
              <label className="labels" for="cars">
                Choose a counrty :
              </label>{" "}
              <br />
              <select name="cars">
                <option value="Georgia">Georgia</option>
                <option value="USA">USA</option>
                <option value="Spain">Spain</option>
                <option value="Ukraine">Ukraine</option>
              </select>
            </div>
            <MyFormSubElement
              name="mobile"
              type="text"
              regex_logic={/^[0-9]*$/}
              regexErrorMessage="It must only contain digits"
            >
              Mobile :
            </MyFormSubElement>
            <MyFormSubElement name="password" type="password">
              Password :
            </MyFormSubElement>
            <MyFormSubElement name="repeat_password" type="password">
              Repeat-Paasword :
            </MyFormSubElement>{" "}
            <br />
            <div style={{ textAlign: "center" }}>
              <button className="button">
                <Link to="/signin">
                  <span>Register</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
