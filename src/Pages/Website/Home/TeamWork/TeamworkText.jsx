import React from "react";
import styles from "../styles.module.css";
import TeamworkTxt from "../LoanwiseImgText/LwFlexText";

const listItems = [
 "Better team collaboration.",
 "Streamlined communication.",
 "Faster loan application processing.",
];

const heading = `Improve teamwork with our in-app messaging feature.`;

const paragraph = `Our messaging feature allows teammates to communicate seamlessly and efficiently within the Loan Default Prediction App. With the ability to discuss loan applications, share information, and ask questions in real-time, our messaging feature helps teams collaborate more effectively and make better lending decisions`;

const TeamworkText = () => {
 return (
  <div className={styles.teamworkText}>
   <TeamworkTxt listItems={listItems} paragraph={paragraph} heading={heading} />
  </div>
 );
};

export default TeamworkText;
