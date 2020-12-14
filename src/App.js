import logo from "./logo.svg";
import "./App.css";
import { MyRegisterForm } from "./Register/register";
import Navbar from "./navbar/navbar";
import { Authorization } from "./login/login";
import Cars from "./cars/cars";
import { BmwSlider } from "./carslider/bmw/bmwslider";
import { MercedesSlider } from "./carslider/mercedes/mersoslider";
import { Route, Switch, Link, useHistory } from "react-router-dom";

import Home from "./home/home";
import AboutMe from "./about/about.js";
import Models from "./models/models";
import Manufacturer from "./manufacturer/manufacturer";
// import Contact from "./contact/contact";
// import MainMercedes from "./carslider/mercedes/mainmersedes";

import Message from "./contact/message";
const Error = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://wallpaperaccess.com/full/2267932.png")`,
        backgroundRepeat: "no-repeat",
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      {/* <h1 style={{ color: "red", fontSize: "60px" }}>
        404 Error Page Not Found
      </h1> */}
    </div>
  );
};

// const Footer = () => {
//   return (
//     <div className="footer">
//       <h4 style={{ top: "0" }}>saba.kosashvili.1@btu.edu.ge</h4>
//     </div>
//   );
// };
function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/about" component={AboutMe} />

        <Route path="/register" component={MyRegisterForm} />
        <Route path="/signin" component={Authorization} />
        <Route path="/cars" exact component={Cars} />
        <Route path="/cars/bmw" component={BmwSlider} />
        <Route path="/cars/mercedes" component={MercedesSlider} />
        <Route path="/contact" component={Message} />
        <Route path="/models" component={Models} />
        <Route path="/manufacturer" component={Manufacturer} />

        <Route path="*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
