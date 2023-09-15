import React from "react";
import TransparentBtn from "../Button/TransparentBtn";
import FilledBtn from "../Button/FilledBtn";
import styles from "./Footer.module.css";
import { useNavigate } from "react-router-dom";

const Newsletter = () => {
 const navigate = useNavigate();

 return (
  <div className={styles.newsletter}>
   <p>Join Our Newsletter to be up-to-date with our latest news. </p>
   <div className={styles.newsletterBtns}>
    <TransparentBtn
     title="Subscribe"
     onClick={() => navigate("/create-account")}
    />
    <FilledBtn title="Get A Membership" onClick={() => navigate("/pricing")} />
   </div>
  </div>
 );
};

export default Newsletter;
