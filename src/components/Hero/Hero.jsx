import React from "react";

import styles from "./Hero.module.css";
import Image from "../../assets/3d_character.png";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";


export const Hero = () => {
  return (
    <motion.section
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    
>
    <section className={styles.container}>
      <div className={styles.content}>
      <h1 className={styles.title}>Hi, I'm</h1>

      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Muzammil',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Developer',
        1000
      ]}
      wrapper="h1"
      speed={2}
      className={styles.animatedText}
      style={{ fontSize: '60px', display: 'inline-block' }}
      repeat={Infinity}
    />

        <p data-aos="fade-up" className={styles.description}>
        I'm a Front-End Developer specializing in building responsive and dynamic web applications using React.js and Tailwind CSS. I focus on creating clean, efficient, and scalable user interfaces with a strong emphasis on performance and user experience.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
        <div className={styles.animate}></div> Contact Me
        </a>
      </div>
      <img
        src={Image}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
    </motion.section>
  );
};
export default Hero






