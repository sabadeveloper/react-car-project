import React, { Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import "./login.css";

export class Authorization extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          backgroundImage: `url("https://wallpaperaccess.com/full/33110.jpg")`,
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <div class="main2">
          <p class="sign" align="center">
            Sign in
          </p>
          <form class="form1" />
          <input
            class="un "
            type="text"
            align="center"
            placeholder="Username"
          />
          <input
            class="pass"
            type="password"
            align="center"
            placeholder="Password"
          />
          <Link to="/home" class="submit" align="center">
            Sign in
          </Link>
          <p class="forgot" align="center">
            <a href="#" />
            Forgot Password?
          </p>
        </div>
      </div>
    );
  }
}
