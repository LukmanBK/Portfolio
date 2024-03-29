import React, { useState } from "react";
import "./navbar.css";
import { FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <header className={color ? "header colored-background" : "header"}>
      <a href="#accueil">
        <h1 className={color ? "title-header color" : "title-header"}>
          Portfolio
        </h1>
      </a>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li onClick={handleClick}>
          <a
            href="#accueil"
            className={color ? "nav-link nav-link-color" : "nav-link"}
          >
            Accueil
          </a>
        </li>

        <li
          className={color ? "nav-link nav-link-color" : "nav-link"}
          onClick={handleClick}
        >
          <a
            href="#about"
            className={color ? "nav-link nav-link-color" : "nav-link"}
          >
            À propos
          </a>
        </li>
        <li
          className={color ? "nav-link nav-link-color" : "nav-link"}
          onClick={handleClick}
        >
          <a
            href="#skills"
            className={color ? "nav-link nav-link-color" : "nav-link"}
          >
            Compétences
          </a>
        </li>
        <li
          className={color ? "nav-link nav-link-color" : "nav-link"}
          onClick={handleClick}
        >
          <a
            href="#projects"
            className={color ? "nav-link nav-link-color" : "nav-link"}
          >
            Mes projets
          </a>
        </li>
        <li
          className={color ? "nav-link nav-link-color" : "nav-link"}
          onClick={handleClick}
        >
          <a
            href="#contact"
            className={color ? "nav-link nav-link-color" : "nav-link"}
            aria-label="Contact"
          >
            <FaEnvelope />
            <span className="visually-hidden">Contact</span>
          </a>
        </li>
      </ul>
      <div className="menu-toggle" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Navbar;
