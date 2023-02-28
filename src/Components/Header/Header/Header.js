import React from "react";
import ParticleBackground from "../../ParticleBackground/ParticleBackground";
import AboutMe from "../AboutMe/AboutMe";
import Navbar from "../Navbar/Navbar";
import './Header.css'

const Header = () => {
  return (
    
    
      <div className="media-height">
      {/* <ParticleBackground ></ParticleBackground> */}
        <div className="particle"
        //  style={{
        //     position: "absolute",
        //     top: 0,
        //     left: 0,
        //     width: "100%",
        //     height: "100%",
        //     zIndex: 2,
        //   }} 
        >
          <Navbar></Navbar>
          <AboutMe></AboutMe>
        </div>
      </div>
      
  );
};

export default Header;
