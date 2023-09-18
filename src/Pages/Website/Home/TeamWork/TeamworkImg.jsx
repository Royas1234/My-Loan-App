import React from "react";
import styles from "../styles.module.css";
import TeamworkImage from "../LoanwiseImgText/LwFlexImg";
import GirlFrame from "../../../../Images/girlFrame.svg";

const TeamworkImg = () => {
 return (
  <div className={styles.teamworkImg}>
   <TeamworkImage image={GirlFrame} />
  </div>
 );
};

export default TeamworkImg;
