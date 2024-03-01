import React from "react";
import "./projectsModal.css";
import { IoCloseOutline } from "react-icons/io5";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ProjectsModal = ({ data, isOpen, setIsOpen }) => {
  console.log(data);
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="close-button" onClick={() => setIsOpen(false)}>
          <IoCloseOutline />
        </button>
        <img src={data.img_cover} alt={data.title} className="modal-image" />
        <h2>{data.title}</h2>
        <p>
          <strong>Client:</strong> {data.client}
        </p>
        <p>
          <strong>Présentation:</strong> {data.presentation}
        </p>
        <p>
          <strong>Vue d'ensemble:</strong> {data.overview}
        </p>
        {data.github && (
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            Voir sur GitHub <FaArrowUpRightFromSquare />
          </a>
        )}
        <div className="tags-container">
          {data.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsModal;
