import React from 'react'
import projects from "../data/projects.json"
import ProjectCard from "./ProjectCard";
import  style from "./Project.module.css"


const Project = () => {
  return (
    <section className={style.container} id='project'>
        <h2 className={style.title}>Projects</h2>
        <div className={style.projects}>
            {projects.map((project, id) =>{
                return <ProjectCard key={id} project={project}/>

            })}
        </div>
    </section>
)
}

export default Project