import React, { useState } from 'react'
import style from "./Navbar.module.css"
import icon from "../../assets/image16.png"
import cross_icon from "../../assets/image17.png"
import { motion } from "framer-motion";


const Navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  return (
    <motion.nav
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
>



<nav className={style.navbar}>
<a href="/" className={style.title}>Portfolio</a>
<div className={style.menu}>
  <img className={style.menuBtn} 
  src={menuOpen? cross_icon : icon}
   alt="" onClick={()=> setmenuOpen(!menuOpen)} />
    <ul className={`${style.menuItem} ${menuOpen && style.menuOpen}`}
    onClick={()=> setmenuOpen(false)}>
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#project">Projects</a></li>
    <li><a href="#contact">Contact</a></li>

    </ul>
</div>
</nav>  
</motion.nav>

)
}

export default Navbar