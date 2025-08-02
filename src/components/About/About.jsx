import React from 'react'
import simple_img from "../../assets/3d-cartoon.png"
import logo from "../../assets/image4.png"
import style from "./About.module.css"
import { motion } from "framer-motion";


const About = () => {
  return (
    <motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  exit={{ opacity: 0 }}
  viewport={{ amount: 0.3 }}
>
    <section className={style.container} id='about'>
        <h2 className={style.title}>About</h2>
        <div className={style.content}>
            <img src={simple_img} alt="" className={style.aboutImg} />
            <ul className={style.aboutItems}>
                <li className={style.aboutItem}>
                    <img src={logo} alt="" className={style.icon}/>
            <div className={style.aboutItemText}>
                <h3>This is about Myself</h3>
                <p>Ambitious Computer Science student passionate about leveraging technology to drive innovation. With a solid foundation in computer science, I'm eager to apply my skills to real-world challenges and continue learning. Driven by a curiosity for the latest tech advancements, I'm excited to embark on a rewarding career in tech</p>
            </div>
            </li>
            </ul>
            </div>

            <div className={style.btnWrap}>
                <button className={style.readMeBtn}><span></span>Read More</button>
            </div>
    </section>
    </motion.div>
)
}

export default About