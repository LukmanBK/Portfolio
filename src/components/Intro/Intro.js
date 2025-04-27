import React from "react";
import "./intro.css";
import IntroImg from "../../assets/work.webp";

const Intro = () => {
  return (
    <div className="intro">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="developpeur qui code" />
      </div>
      <div className="content">
        <p>Bonjour, je suis Lukman, en reconversion vers les métiers du numérique.</p>
        <h1>Projets Intégrateur Web</h1>
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
