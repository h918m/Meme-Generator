import React from "react";
import Logo from "../images/Troll Face.png";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo-section">
          <img className="logo" src={Logo} alt="" />
          <h1 className="logo-name">Meme Generator</h1>
        </div>
        <p className="nav-text">React Course - Project 3</p>
      </nav>
    </header>
  );
};

export default Navbar;
