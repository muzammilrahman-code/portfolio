
import React from 'react';
import style from "./ProjectCard.module.css";

const ProjectCard = ({ project: { title, description, imageSrc, demo } }) => {
  return (
    <div className={style.card}>
      <img src={imageSrc} alt={title} className={style.image} />
      
      <div className={style.overlay}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.description}>{description}</p>
        <div className={style.links}>
          <a href={demo} target="_blank" rel="noopener noreferrer" className={style.link}>
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;






