import React from 'react'
import skills from "../data/skills.json"
import style from "./Skill.module.css"
import { motion } from "framer-motion";


const Skill = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    viewport={{ amount: 0.1 }}>

   
    <section id="skills" className={style.container}> 
    <h2 className={style.title}>Skills</h2>
    <div className={style.content}>
        {skills.map((skill, id) => {
            return (
               <div key={id} className={style.skill}>
                <div className={style.skillImgContainer}>
                    <img src={skill.imageSrc} alt="" />
                </div>
                <p>{skill.title}</p>

               </div>
            )
        })}
    </div>
    </section>
    </motion.div>
)
}

export default Skill