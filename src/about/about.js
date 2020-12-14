import React from "react";
import "./about.css";

const AboutMe = () => {
  return (
    <div>
      <header class="masthead">
        <p class="masthead-intro">Hi I'm</p>
        <h1 class="masthead-heading">Saba!</h1>
      </header>
      <section class="introduction-section">
        <h1>Introduction</h1>
        <p>I am a student and I am studying computer science.</p>
        <p>I love the internet, technology, and I am interested in cars.</p>
      </section>
      <section class="location-section">
        <h1>Where I'm From</h1>
        <p>I'm from Georgia, Tbilisi. </p>
      </section>
      <section class="questions-section">
        <h1>More About Me</h1>
        <h2>What are your favorite hobbies?</h2>
        <p>
          My favorite hobby is cars and my hobbies are: swimming,basktball
          playing and accordion playing.
        </p>

        <h2>Where do you live?</h2>
        <p>I live in Vazisubani,Tbilisi .</p>
      </section>

      <footer class="content-footer">
        <p>contact me: saba.kosashvili.1@btu.edu.ge</p>
      </footer>
    </div>
  );
};

export default AboutMe;
