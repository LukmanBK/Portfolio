import React from "react";
import "./footer.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{
                  color: "#EEEEEE",
                  marginRight: "2rem",
                }}
              />
              <a href="tel:+33651342757">06.51.34.27.57</a>
            </h4>
          </div>
          <div className="mail">
            <h4>
              <FaMailBulk
                size={20}
                style={{
                  color: "#EEEEEE",
                  marginRight: "2rem",
                }}
              />
              <a href="mailto:lukmanbakari@gmail.com">lukmanbakari@gmail.com</a>
            </h4>
          </div>
        </div>
        <div className="right">
          <div className="social-link">
            <a
              href="https://github.com/LukmanBK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={30}
                style={{
                  color: "#EEEEEE",
                  marginRight: "1rem",
                }}
              />
              <span>Lien vers mon Github</span>
            </a>
            <a
              href="https://www.google.com/maps/place/Paris+75014"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLocationDot
                size={30}
                style={{
                  color: "#EEEEEE",
                  marginRight: "1rem",
                }}
              />
              <span>Paris, 75014</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
