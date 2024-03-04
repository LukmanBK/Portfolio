import React, { useState, useEffect } from "react";
import dataProjects from "../../data/projects.json";
import ProjectsCards from "../../components/ProjectsCards/ProjectsCards";
import ProjectsModal from "../../components/ProjectsModal/projectModal";
import "./projects.css";
import { motion } from "framer-motion";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectsToShow, setProjectsToShow] = useState(3);
  const allProjects = dataProjects;

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("scrollHidden");
    } else {
      document.body.classList.remove("scrollHidden");
    }

    return () => {
      document.body.classList.remove("scrollHidden");
    };
  }, [isModalOpen]);

  const handleProjectSelect = (data) => {
    setSelectedProject(data);
    setIsModalOpen(true);
  };

  const handleShowMoreProjects = () => {
    setProjectsToShow(projectsToShow + 3);
  };

  return (
    <section data-section id="projects" className="section-projects">
      <h2 className="title-projects">Mes projets</h2>
      <div className="grid-projects">
        {allProjects.slice(0, projectsToShow).map((datas, id) => (
          <ProjectsCards
            key={id}
            img={datas.img_cover}
            title={datas.title}
            github={datas.github}
            onClick={() => handleProjectSelect(datas)}
            id={id}
          />
        ))}
      </div>

      {projectsToShow < allProjects.length && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="motion-button"
          onClick={handleShowMoreProjects}
        >
          Voir plus de projets
        </motion.button>
      )}
      {selectedProject && (
        <ProjectsModal
          data={selectedProject}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
        />
      )}
    </section>
  );
};

export default Projects;
