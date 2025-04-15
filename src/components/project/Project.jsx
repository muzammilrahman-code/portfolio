import React from 'react'
import projects from "../data/projects.json"
import ProjectCard from "./ProjectCard";
import  style from "./Project.module.css"
import { motion } from "framer-motion";


const Project = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.3 }}
    exit={{ opacity: 0 }}
    viewport={{ amount: 0.3 }}>

    <section className={style.container} id='project'>
        <h2 className={style.title}>Projects</h2>
        <div className={style.projects}>
            {projects.map((project, id) =>{
                return <ProjectCard key={id} project={project}/>

            })}
        </div>
    </section>
    </motion.div>
)
}

export default Project