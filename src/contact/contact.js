import React, { useState } from "react";
import "./contact.css";

const Contact = (props) => {
  const [click, setClick] = useState(true);
  const handleOnClick = () => {
    click ? props.callback() : setClick(false);
  };
  return (
    <div
      style={{
        backgroundImage: `url("https://cdn.hipwallpaper.com/i/30/65/bpIr9d.jpg")`,
        backgroundRepeat: "no-repeat",
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "35px",
          left: "3%",
        }}
      >
        <section id="contact">
          <div class="sectionheader">
            {" "}
            <h1>CONTACT</h1>
          </div>
          <article>
            <label for="checkcontact" class="contactbutton">
              <div class="mail"></div>
            </label>
            <input id="checkcontact" type="checkbox" />

            <form action="" method="post" class="contactform">
              <p class="input_wrapper">
                <input type="text" name="contact_nom" id="contact_nom" />
                <label for="contact_nom">NAME</label>
              </p>
              <p class="input_wrapper">
                <input type="text" name="contact_email" id="contact_email" />
                <label for="contact_email">EMAIL</label>
              </p>
              <p class="input_wrapper">
                <input type="text" name="contact_sujet" id="contact_sujet" />
                <label for="contact_sujet">SUBJECT</label>
              </p>
              <p class="textarea_wrapper">
                <textarea
                  name="contact_message"
                  id="contact_message"
                ></textarea>
              </p>
              <p class="submit_wrapper">
                <input onClick={handleOnClick} value="SEND" />
              </p>
            </form>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Contact;
