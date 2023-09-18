import React from "react";
import RevolutionisingImg from "./RevolutionisingImg";
import RevolutionisingTxt from "./RevolutionisingTxt";
import styles from "../styles.module.css";

const Revolutionising = () => {
 return (
  <section className={styles.Revolutionising}>
   <RevolutionisingTxt />
   <RevolutionisingImg />
  </section>
 );
};

export default Revolutionising;
