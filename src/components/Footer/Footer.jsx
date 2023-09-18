import React from "react";
import Newsletter from "./Newsletter";
import FooterInput from "./FooterInput";
import styles from "./Footer.module.css";
import FooterLists from "./FooterLists";

const Footer = () => {
 return (
  <footer>
   <Newsletter />
   <div className={styles.footerFlex}>
    <FooterInput />
    <FooterLists />
   </div>
   <p>© 2023 Loanwise.All rights reserved</p>
  </footer>
 );
};

export default Footer;
