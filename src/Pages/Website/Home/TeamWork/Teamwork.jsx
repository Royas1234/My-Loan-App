import React from "react";
import styles from "../styles.module.css";
import TeamworkImg from "./TeamworkImg";
import TeamworkText from "./TeamworkText";

const Teamwork = () => {
 return (
  <section className={styles.teamwork}>
   <TeamworkImg />
   <TeamworkText />
  </section>
 );
};

export default Teamwork;
