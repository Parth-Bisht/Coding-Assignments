import React from 'react';
import styles from './Footer.module.css';
import {FaFacebook,FaInstagram,FaGithub,FaTwitter,FaLinkedin} from 'react-icons/fa'

function Footer() {
  return (
    <>
      <footer className={styles.foot}>
            <div className={styles.card} >
               <p> <strong> The destination for tech </strong></p>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus assumenda inventore earum harum praesentium distinctio odio ab dolor, a adipisci veniam modi, sunt repellendus sed?</p>
               <FaFacebook/>  <FaInstagram/>  <FaGithub/>  <FaTwitter/> <FaLinkedin/>
            </div>
            <div className={styles.card} >
               <p> <strong> Studio Proper </strong></p>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus assumenda inventore earum harum praesentium distinctio odio ab dolor, a adipisci veniam modi, sunt repellendus sed?</p>
            </div>
            <div className={styles.card} >
               <p> <strong> Newsletter </strong></p>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus assumenda inventore earum harum praesentium distinctio odio ab dolor, a adipisci veniam modi, sunt repellendus sed?</p>
            </div>
      </footer>
    </>
  )
}

export default Footer
