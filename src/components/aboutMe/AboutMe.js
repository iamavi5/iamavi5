import React from "react";
import "./AboutMe.css";
import webDevImg from "../../assets/webdev3.jpeg";

const AboutMe = () => {
  return (
    <section name="aboutSection" className="aboutSection">
      <h2>About Me 🙋🏻‍♂️ </h2>
      <div className="aboutMeContainer">
        <div className="aboutImage">
          <img src={webDevImg} alt="AboutMe" />
        </div>
        <div className="aboutContent">
          <p>
            Hi! I'm Avinash, a passionate{" "}
            <i>
              <b>Full Stack Developer</b>
            </i>{" "}
            with a strong background in web development. I enjoy building
            creative and efficient solutions to complex problems. My expertise
            includes front-end technologies such as{" "}
            <i>
              <b>ReactJS</b>
            </i>
            ,{" "}
            <i>
              <b>HTML</b>
            </i>
            ,{" "}
            <i>
              <b>CSS</b>
            </i>{" "}
            and{" "}
            <i>
              <b>JavaScript</b>
            </i>{" "}
            and back-end technologies such as{" "}
            <i>
              <b>NodeJS</b>
            </i>{" "}
            and{" "}
            <i>
              <b>Springboot</b>
            </i>
            , allowing me to create seamless and responsive web applications.
            With a keen eye for design and a desire for continuous and lifelong
            learning, I'm constantly exploring new technologies to stay on the
            cutting edge of the constantly evolving tech world. My objective is
            to participate in cutting edge initiatives and have a significant
            impact on the future of technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
