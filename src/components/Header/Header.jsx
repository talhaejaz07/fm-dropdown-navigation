import React from "react";
import "./HeaderStyles.css";
import Logo from "../../images/logo.svg";

export const Header = () => {
  return (
    <header className="header-container header-grid">
      <img src={Logo} alt="logo" />

      <ul className="header-link-list">
        <li className="header-link">Features</li>
        <li className="header-link">Company</li>
        <li className="header-link">Careers</li>
        <li className="header-link">About</li>
      </ul>

      <li className="header-link">Login</li>

      <button className="header-button">Register</button>
    </header>
  );
};
