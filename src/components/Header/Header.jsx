import React, { useState } from "react";
import "./HeaderStyles.css";
import Logo from "../../images/logo.svg";
import TodoIcon from "../../images/icon-todo.svg";
import CalenderIcon from "../../images/icon-calendar.svg";
import RemindersIcon from "../../images/icon-reminders.svg";
import PlanningIcon from "../../images/icon-planning.svg";
import BurgerButton from "../../images/icon-menu.svg";
import CloseButton from "../../images/icon-close-menu.svg";

export const Header = () => {
  const [click, setClick] = useState(false);

  function ClickHandler() {
    setClick(!click);
  }

  const [mobileFeatures, setMobileFeatures] = useState(false);

  function MobileFeaturesHandler() {
    setMobileFeatures(!mobileFeatures);
  }

  const [mobilePages, setMobilePages] = useState(false);

  function MobilePagesHandler() {
    setMobilePages(!mobilePages);
  }

  return (
    <>
      {/* Desktop Header */}
      <header className="header-container header-grid desktop-design">
        <img src={Logo} alt="logo" />
        <ul className="header-link-list">
          <li className="header-link arrow bottom-padding">
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
          <li className="header-link arrow bottom-padding">
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

        <li className="header-link login">Login</li>

        <button className="header-button">Register</button>
      </header>

      {/* Mobile Header */}
      <header className="mobile-header-container mobile-design">
        <img src={Logo} alt="logo" />
        <div className="menu-button">
          <img
            onClick={ClickHandler}
            className={
              click ? "menu-burger-button opacity-none" : "menu-burger-button"
            }
            src={BurgerButton}
            alt="BurgerButton"
          />
          <img
            onClick={ClickHandler}
            className={
              click ? "menu-close-button" : "menu-close-button opacity-none"
            }
            src={CloseButton}
            alt="CloseButton"
          />
        </div>
      </header>
      <div className={click ? "grey-screen scale" : "grey-screen"} />
      <nav
        className={
          click
            ? "mobile-navbar mobile-design mobile-navbar-appear"
            : "mobile-navbar mobile-design"
        }
      >
        <ul className="mobile-link-list">
          <li>
            <p onClick={MobileFeaturesHandler} className="mobile-link arrow">
              Features
            </p>

            <div
              className={
                mobileFeatures
                  ? "mobile-dropdown mobile-dropdown-appear"
                  : "mobile-dropdown"
              }
            >
              <ul className="mobile-features-list">
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

          <li>
            <p onClick={MobilePagesHandler} className="mobile-link arrow">
              Company
            </p>

            <div
              className={
                mobilePages
                  ? "mobile-dropdown-pages mobile-dropdown-pages-appear"
                  : "mobile-dropdown-pages"
              }
            >
              <ul className="mobile-pages-list">
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
          <li>
            <p className="mobile-link">Careers</p>
          </li>
          <li>
            <p className="mobile-link">About</p>
          </li>
        </ul>
        <p className="mobile-link login-link">Login</p>

        <button className="header-button mobile-button-alignment">
          Register
        </button>
      </nav>
    </>
  );
};
