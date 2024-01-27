import React from "react";
import "./about.css";
import Me from "../../img/profile.jpg";
import CSS from "../../img/css.png";
import HTML from "../../img/html.png";
import JS from "../../img/js.png";
import REACTJS from "../../img/react.png";
import PYTHON from "../../img/python.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Me} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        {/* <p className="a-sub">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          veritatis?
        </p> */}
        <p className="a-desc">
          As a recent Bow Valley College graduate in Software Development, I've
          developed a fundamental understanding of front-end web development
          using React.js, back-end programming in Python, and database
          management with Microsoft SQL Server. My education emphasized the
          skills to tackle coding challenges effectively. I'm passionate about
          creating intuitive and efficient web applications, and I am eager to
          bring my technical skills and fresh perspective to innovative
          projects.
        </p>
        <div className="a-tech">
          <img src={HTML} alt="" className="a-tech-img" />
          <img src={CSS} alt="" className="a-tech-img" />
          <img src={JS} alt="" className="a-tech-img" />
          <img src={REACTJS} alt="" className="a-tech-img" />
          <img src={PYTHON} alt="" className="a-tech-img" />
        </div>
      </div>
    </div>
  );
};

export default About;
