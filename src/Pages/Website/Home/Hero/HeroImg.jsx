import React from "react";
import HeroImage from "../LoanwiseImgText/LwFlexImg";
import HeroPic from "../../../../Images/HeroImage.svg";
import styles from "../styles.module.css";

const HeroImg = () => {
 return (
  <div className={styles.heroImg}>
   <HeroImage image={HeroPic} />
  </div>
 );
};

export default HeroImg;
