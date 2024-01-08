import "./Navbar.css";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);
  const handleHamburgerClick = () => {
    setClick(!click);
  }
  const handleNavigationClick = ()=>{
    if(click){
      setClick(!click);
    }
  }
  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="heroSection" smooth={true}  offset={50} duration={500} >
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="heroSection"   onClick={handleNavigationClick} smooth={true}  offset={50} duration={500} >Home</Link>
        </li>
        <li>
          <Link to="aboutSection" onClick={handleNavigationClick} smooth={true}  offset={50} duration={500}  >About</Link>
        </li>
        <li>
          <Link to="projectSection"  onClick={handleNavigationClick} smooth={true}  offset={50} duration={500}  >Projects</Link>
        </li>
        {/* <li>
          <Link to="achievementSection" onClick={handleNavigationClick} smooth={true}  offset={50} duration={500} >Skills</Link>
        </li> */}
        <li>
          <Link to="contactSection" onClick={handleNavigationClick} smooth={true}  offset={50} duration={500}  >Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleHamburgerClick}>
        {click && <FaTimes size={20} />}
        {!click && <FaBars size={20} />}
      </div>
    </div>
  );
};

export default Navbar;
