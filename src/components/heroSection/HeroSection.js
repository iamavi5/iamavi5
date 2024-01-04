import React from 'react'
import "./HeroSection.css";
import indFlag from "../../assets/indFlag.jpeg";
import dp from "../../assets/DP.jpg";

const HeroSection = () => {
  return (
    <section name="heroSection" className="heroSection">
      <div className="leftSection">
        <p>Hi there,👋 I am</p>
        <h1>Avinash</h1>
        <h1>Anand</h1>
        <p>
          Software Engineer at
          <a href="https://www.natwest.com/" target="-blank">
            Natwest Groups
          </a>
        </p>
        <div className="basedSection">
          <p>Based in India</p>
          <img src={indFlag} alt="Indian Flag" height="20px" width="25px" />
        </div>
      </div>


      <div className="rightSection">
        <img src={dp} alt="Avinash" height="400px" />
      </div>
      
      
      
    </section>
  )
}

export default HeroSection