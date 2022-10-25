import React from "react";
import "./HeroStyles.css";
import ImageDesktop from "../../images/image-hero-desktop.webp";
import ImageMobile from "../../images/image-hero-mobile.webp";

import DataBiz from "../../images/client-databiz.svg";
import AudioPhile from "../../images/client-audiophile.svg";
import Meet from "../../images/client-meet.svg";
import Maker from "../../images/client-maker.svg";

export const Hero = () => {
  return (
    <section className="hero-container hero-grid">
      <div className="hero-description">
        <h1>
          Make <br />
          remote work
        </h1>
        <p className="hero-text">
          Get your team in sync, no matter your location. Streamline processes
          create team rituals, and watch productivity soar.
        </p>
        <button className="hero-button">Learn more</button>
        <div className="logo-list">
          <img src={DataBiz} alt="DataBiz" />
          <img src={AudioPhile} alt="AudioPhile" />
          <img src={Meet} alt="Meet" />
          <img src={Maker} alt="Maker" />
        </div>
      </div>
      <picture>
        <source srcset={ImageDesktop} media="(min-width: 577px)" />
        <source srcset={ImageMobile} media="(max-width: 576px)" />
        <img className="hero-image" src={ImageDesktop} alt="HeroImage" />
      </picture>
    </section>
  );
};
