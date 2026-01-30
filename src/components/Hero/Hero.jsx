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
        I'm a Full Stack MERN Developer dedicated to building robust, end-to-end web applications. By leveraging MongoDB, Express.js, React, and Node.js, I create scalable backends and dynamic, responsive frontends with React. I focus on writing clean, efficient code that prioritizes high performance and seamless user experiences.
        </p>
        <a href="mailto:muzammilsiddiqui079@gmail.com" className={styles.contactBtn}>
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






