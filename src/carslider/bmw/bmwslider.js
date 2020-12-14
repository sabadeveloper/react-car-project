import React, { Fragment } from "react";
import "./bmsslidercss.css";

import bmw1 from "./bmw1.jpg";
import bmw2 from "./bmw2.jpg";
import bmw3 from "./bmw3.jpg";

const MyImage = [
  { id: 1, image: bmw1 },
  { id: 2, image: bmw2 },
  { id: 3, image: bmw3 },
];

export class BmwSlider extends React.Component {
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
            backgroundImage: `url("https://wallup.net/wp-content/uploads/2017/11/17/279962-simple_background.jpg")`,
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
            <h1 className="satauri">BMW</h1>
            <div className="istoria">
              <p>
                The BMW name stands for Bayerische Motoren Werke GmbH. BMW was
                created in 1917 from the Munich firm Rapp-Motorenwerke. The
                company was incorporated into Knorr-Bremse AG in 1920 before
                being refounded as BMW AG in 1922. It was the successor of
                Bayerische Flugzeugwerke AG, founded in 1916. 1916 is therefore
                considered BMW’s founding year.
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
