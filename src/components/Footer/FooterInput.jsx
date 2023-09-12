import React from "react";
import Logo from "../../Images/logo.svg";
import FilledBtn from "../Button/FilledBtn";
import styles from "./Footer.module.css";

const FooterInput = () => {
 return (
  <div className={styles.footerInput}>
   <div className={styles.logoText}>
    <img src={Logo} alt="" className={styles.logo} />
    <p>
     With our app, you can access a suite of advanced analytics and data
     visualization tools to better understand loan performance and identify
     potential areas for improvement.
    </p>
   </div>

   <div className={styles.form}>
    <label htmlFor="email">Stay In Touch</label>
    <input type="email" name="" id="" placeholder="Your Email" />
    <FilledBtn title={"Continue"} />
   </div>
  </div>
 );
};

export default FooterInput;
