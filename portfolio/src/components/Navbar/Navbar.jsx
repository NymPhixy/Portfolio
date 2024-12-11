import React from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={Logo} alt="Logo" />
      <ul className="nav-menu">
        <li key="home">Home</li>
        <li key="about">About me</li>
        <li key="services">Services</li>
        <li key="portfolio">Portfolio</li>
        <li key="contact">Contact</li>
      </ul>
      <div className="nav-connect">Connect with me</div>
    </div>
  );
};

export default Navbar;
