import React from "react";
import dataSkills from "../../data/skills.json";
import { motion } from "framer-motion";
import "./skills.css";

const Skills = () => {
  const animationProject = {
    initial: {
      opacity: 0,
      y: 70,
    },
    animate: (id) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.15 * id,
      },
    }),
  };

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Mes compétences</h2>
      <div className="skills-container">
        {dataSkills.map((data, id) => (
          <motion.div
            key={id}
            className="skill-card"
            variants={animationProject}
            initial="initial"
            whileInView="animate"
            custom={id}
            viewport={{ once: true }}
          >
            <div className="skill-image-container">
              <img
                src={data.img}
                alt={`icône de ${data.title}`}
                className="skill-image"
              />
              <div className="skill-description" title={data.title}>
                <p className="skill-text">{data.name}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
