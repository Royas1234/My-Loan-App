import React from "react";
import styles from "../Header/Header.module.css";

const FilledBtn = ({ title, link, type, onClick, icon, ...props }) => {
 return (
  <button
   type={type}
   className={styles.filledBtn}
   onClick={onClick}
   props={props}
  >
   {icon && <span className="iconPlus">{icon}</span>}
   {type === "submit" ? title : <a href={link}>{title}</a>}
  </button>
 );
};

export default FilledBtn;
