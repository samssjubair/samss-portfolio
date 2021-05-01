import React from "react";
import ParticleBackground from "../../ParticleBackground/ParticleBackground";
import AboutMe from "../AboutMe/AboutMe";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    
      <div>
        <ParticleBackground></ParticleBackground>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 2,
          }}
        >
          <Navbar></Navbar>
          <AboutMe></AboutMe>
        </div>
      </div>
    
  );
};

export default Header;
