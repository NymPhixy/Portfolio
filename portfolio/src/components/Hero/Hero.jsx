import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="Profile" />
      <h1>I'm Ruben Janssen, frontend developer based in The Netherlands</h1>
      <p>
        Ik ben een 24-jarige front-end developer in opleiding aan de
        Hanzehogeschool, waar ik de studie Communication & Multimedia Design CMD
        volg. Met passie voor het ontwerpen en ontwikkelen van
        gebruiksvriendelijke interfaces werk ik aan creatieve en interactieve
        digitale oplossingen.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <div className="hero-resume">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
