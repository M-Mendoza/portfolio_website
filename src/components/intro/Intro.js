import React from "react";
import "./intro.css";
import Profile from "../../img/animated.png";
import Navbar from "../navbar/Navbar";

const Intro = () => {
  return (
    <div className="i">
      <Navbar />
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h2 className="i-name">Mark Mendoza</h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Full Stack Developer</div>
              <div className="i-title-item">Mobile Developer</div>
              <div className="i-title-item">Tech Enthusiast</div>

              <div className="i-title-item">Full Stack Developer</div>
              <div className="i-title-item">Mobile Developer</div>
              <div className="i-title-item">Tech Enthusiast</div>
            </div>
          </div>
          <p className="i-desc">
            My passion is bringing online visions to life for projects that
            truly matter to me. If you're looking for a skilled web developer
            who shares your passion, let's connect and discuss how I can be a
            valuable addition to your team.
          </p>
        </div>
      </div>
      <div className="i-right">
        <img src={Profile} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
