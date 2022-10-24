import React from "react";
import ImageDesktop from "../../images/image-hero-desktop.png";

export const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-description"></div>
      <img src={ImageDesktop} alt="Hero Image" />
    </section>
  );
};
