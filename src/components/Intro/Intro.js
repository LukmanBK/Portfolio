import React from "react";
import "./intro.css";
import IntroImg from "../../assets/work.webp";

const Intro = () => {
  return (
    <div className="intro">
      <div className="mask">
        <img
          className="intro-img"
          src={IntroImg}
          alt="image de l'environnement de travail"
        />
      </div>
      <div className="content">
        <p>Bonjour je suis Lukman, passionné par le développement web</p>
        <h1>Developpeur Front-End.</h1>
        <a href="#projects" className="btn">
          Projets
        </a>
        <a href="#contact" className="btn">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Intro;
