import React from "react";
import "./HeaderStyles.css";
import Logo from "../../images/logo.svg";
import TodoIcon from "../../images/icon-todo.svg";
import CalenderIcon from "../../images/icon-calendar.svg";
import RemindersIcon from "../../images/icon-reminders.svg";
import PlanningIcon from "../../images/icon-planning.svg";

export const Header = () => {
  return (
    <header className="header-container header-grid">
      <img src={Logo} alt="logo" />

      <ul className="header-link-list">
        <li className="header-link arrow">
          Features
          <div className="drop-down-card">
            <ul className="features-list">
              <li className="feature-item">
                <img className="feature-icon" src={TodoIcon} alt="TodoIcon" />
                <p className="feature-name">Todo List</p>
              </li>
              <li className="feature-item">
                <img
                  className="feature-icon"
                  src={CalenderIcon}
                  alt="CalenderIcon"
                />
                <p className="feature-name">Calender</p>
              </li>
              <li className="feature-item">
                <img
                  className="feature-icon"
                  src={RemindersIcon}
                  alt="RemindersIcon"
                />
                <p className="feature-name">Reminders</p>
              </li>
              <li className="feature-item">
                <img
                  className="feature-icon"
                  src={PlanningIcon}
                  alt="PlanningIcon"
                />
                <p className="feature-name">Planning</p>
              </li>
            </ul>
          </div>
        </li>
        <li className="header-link arrow">
          Company
          <div className="drop-down-card">
            <ul className="features-list">
              <li className="feature-item">
                <p className="feature-name">History</p>
              </li>
              <li className="feature-item">
                <p className="feature-name">Our Team</p>
              </li>
              <li className="feature-item">
                <p className="feature-name">Blog</p>
              </li>
            </ul>
          </div>
        </li>
        <li className="header-link">Careers</li>
        <li className="header-link">About</li>
      </ul>

      <li className="header-link">Login</li>

      <button className="header-button">Register</button>
    </header>
  );
};
