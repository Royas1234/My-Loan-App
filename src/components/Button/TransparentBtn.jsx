import React from "react";
import styles from "../Header/Header.module.css";

const TransparentBtn = ({ title, icon, icon2, link, onClick, ...props }) => {
 return (
  <button className={styles.transparentBtn} onClick={onClick} props={props}>
   <a href={link ? link : "#"}>
    {icon2 && <img src={icon2} alt="Icon2" />}
    <span>{title}</span>
    {icon && <img src={icon} alt="Icon" />}
   </a>
  </button>
 );
};

export default TransparentBtn;
