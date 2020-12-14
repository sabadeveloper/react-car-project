import React from "react";
import "./navbar.css";
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="navbar">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/cars">Cars</Link>
      <Link to="/models">Models</Link>
      <Link to="/manufacturer">Manufacturer</Link>

      <Link to="/contact">Contact us</Link>

      <div className="login">
        <Link to="/register">Register</Link>
        <Link to="/signin">Sign In</Link>
      </div>
    </div>
  );
};

export default Navbar;
