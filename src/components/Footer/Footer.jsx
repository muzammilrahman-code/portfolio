import React from 'react'
import style from "./Footer.module.css"
import code_Icon from "../../assets/coding.png"
import user_Icon from "../../assets/user.png"
import { motion } from "framer-motion";


const Footer = () => {
  return (
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ amount: 0.5 }}>
    <div className={style.footer}>
      <div className={style.footerTop}>
        <div className={style.footerTopLeft}>
          <img src={code_Icon} alt="" />
          <p>I am a Front End Developer</p>
        </div>
        <div className={style.footerTopRight}>
          <div className={style.emailInput}>
            <img src={user_Icon} alt="" />
            <input type="email" placeholder='Enter Your Email' />
          </div>
          <div className={style.subscribe}>Subscribe</div>
        </div>
      </div>
      <hr />
      <div className={style.footerBottom}>
        <p>&copy; 2025 Muzammil Rahman. All rights reserved.</p>
        <div className={style.end}>
          <p>Term of services</p>
          <p>Privacy policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
    </motion.div>
  )
}

export default Footer