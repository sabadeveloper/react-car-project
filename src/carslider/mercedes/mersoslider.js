import React, { Fragment } from "react";
import "./mersoslidercss.css";

import merso1 from "./merso1.jpg";
import merso2 from "./merso2.jpg";
import merso3 from "./merso3.jpg";

const MyImage = [
  { id: 1, image: merso1 },
  { id: 2, image: merso2 },
  { id: 3, image: merso3 },
];

export class MercedesSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  NextHandleClick = () => {
    if (this.state.count == MyImage.length - 1) {
      this.setState({ count: 0 });
    } else this.setState({ count: this.state.count + 1 });
  };

  PrevHandleClick = () => {
    if (this.state.count == 0) {
      this.setState({ count: MyImage.length - 1 });
    } else this.setState({ count: this.state.count - 1 });
  };

  render() {
    let renderButton = MyImage[this.state.count].image;

    return (
      <Fragment>
        <div
          style={{
            backgroundImage: `url("https://icdn2.digitaltrends.com/image/digitaltrends/die-neue-mercedes-benz-s-klasse-der-automobile-masstab-bei-effizienz-und-komfort.jpg")`,
            backgroundRepeat: "no-repeat",
            height: "100vh",
            backgroundSize: "cover",
          }}
        >
          <div
            style={{
              position: "absolute",
              marginTop: "65px",
              marginLeft: "10px",
              textAlign: "center",
            }}
          >
            <h1 className="satauri">MercedesBenz</h1>
            <div className="istoria">
              <p>
                The Mercedes-Benz brand was founded by automobile pioneers Carl
                Benz and Gottlieb Daimler in 1926 as Daimler-Benz. Benz built
                the first gasoline-powered automobile, while Daimler patented
                the first motorcycle and later built his own automobile, both of
                which were designed with the help with Wilhelm Maybach, who also
                has a number of automotive technology breakthroughs to his name.
                The Mercedes-Benz brand has continued the legacy of its
                pioneering founders over its long history, continually at the
                forefront of innovation across performance, styling and safety.
              </p>
            </div>
            <div>
              <img className="images" src={renderButton} />
            </div>
            <br /> <br />
            <div>
              <button
                className="next-prev button-1"
                onClick={this.PrevHandleClick}
              >
                Prev
              </button>
              <button
                className="next-prev button-1"
                onClick={this.NextHandleClick}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
