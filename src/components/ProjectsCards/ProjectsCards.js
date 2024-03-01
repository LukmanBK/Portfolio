import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import "./projectsCards.css";
import { motion } from "framer-motion";

const ProjectsCards = ({ img, title, github, onClick, id }) => {
  const animationProject = {
    initial: {
      opacity: 0,
      y: 70,
    },
    animate: (id) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2 * id,
      },
    }),
  };

  const handleClick = () => {
    if (window.innerWidth > 1024) {
      onClick();
    }
  };

  const handleClickMobile = () => {
    if (window.innerWidth < 1024) {
      onClick();
    }
  };

  return (
    <motion.div
      variants={animationProject}
      initial="initial"
      whileInView="animate"
      custom={id}
      viewport={{ once: true }}
      className="project-card"
    >
      <img src={img} alt="" onClick={handleClick} className="project-image" />
      <div onClick={handleClickMobile} className="overlay">
        <h3 className="project-title">{title}</h3>

        <div className="icons-container">
          <div title="Voir plus" onClick={onClick}>
            <FaPlusCircle className="icon plus-icon" />
          </div>

          {github && (
            <a
              href={github}
              title="Lien Github"
              target="_blank"
              rel="noopener noreferrer" // Pour des raisons de sécurité
              className="icon github-icon"
            >
              <BsGithub />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsCards;
