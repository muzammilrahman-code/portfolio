import React from 'react'
import image from "../../assets/mail.png"
import image1 from "../../assets/outcoming.png"
import image2 from "../../assets/location.png"
import style from "./Contact.module.css"
import { motion } from "framer-motion";


const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "25e443bf-dd98-4345-a20e-fa4fa69cc660");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };

  return (
     <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ amount: 0.3 }}>
            
    <div className={style.container} id='contact'>
        <div className={style.title}>
            <h1>Get In Touch</h1>
        </div>
        <div className={style.section}>
            <div className={style.left}>
                <h1>Let's Talk</h1>
                <p>I'm currently available to take a new projects, so feel free to send me a nessage about anything that you want me to work on. you can contact anytime</p>
            
            <div className={style.contactDetails}>
                <div className={style.contactDetail}>
                    <img src={image} alt="" /><p>muzammilsiddiqui079@gmail.com</p>
                </div>
                <div className={style.contactDetail}>
                    <img src={image1} alt="" /><p>+92335-3731385</p>
                </div>
                <div className={style.contactDetail}>
                    <img src={image2} alt="" /><p>Karachi, Pakistan</p>
                </div>
            </div>
        </div>
        <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ amount: 0.3 }}>
        <form onSubmit={onSubmit} className={style.right}>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter Your Name' name='name'/>
            <label htmlFor="">Your Email</label>
            <input type="email" name="name" placeholder='Enter Your Email' />
            <label htmlFor="">Write Your Message Here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className={style.contactSubmit}>Submit Now</button>
        </form>
        </motion.div>

        </div>
    </div>
    </motion.div>
)
}

export default Contact