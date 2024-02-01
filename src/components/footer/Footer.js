import React from "react";
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {

 
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#273b25", marginRight: "2rem" }} />
            <div>
              <p>Gagargarh, Dhanghata,</p>
              <p>Sant Kabir Nagar,</p>
              <p>Uttar Pradesh</p>
              <p>272162, India</p>
            </div>
          </div>
          <div className="phone">
            <p>
              <FaPhone
                size={20}
                style={{ color: "#273b25", marginRight: "2rem" }}
              />
              +91-7839362524
            </p>
          </div>

          <div className="email">
            <p>
              <FaMailBulk
                size={20}
                style={{ color: "#273b25", marginRight: "2rem" }}
              />
              anandavinash74@gmail.com
            </p>
          </div>

        </div>
        <div className="right"> 
            <h4>About me</h4>
            <p>This is Avinash Anand. Currently working in <b>NatWest Groups</b>. Open to FullStack opportunities.</p>
            <div className="social">
            <a href="https://www.linkedin.com/in/avinashanand74/" target="-blank"><FaLinkedin size={30} style={{ color: "#273b25", marginRight: "1rem" }}/></a>
            <a href="https://github.com/iamavi5" target="-blank"><FaGithub size={30} style={{ color: "#273b25", marginRight: "1rem" }}/></a>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;

