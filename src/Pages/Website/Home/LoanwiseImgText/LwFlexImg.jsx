import React from "react";
import styles from "../styles.module.css";

const LoanDefaultersImg = ({ image }) => {
 return (
  <div className={styles.lwFlexImg}>
   <img src={image} alt="" />
  </div>
 );
};

export default LoanDefaultersImg;
