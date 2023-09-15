import React from "react";
import HeroText from "../LoanwiseImgText/LwFlexText";
import FilledBtn from "../../../../components/Button/FilledBtn";
import TransparentBtn from "../../../../components/Button/TransparentBtn";
import styles from "../styles.module.css";
import Icon from "../../../../Images/arrow-right.svg";
import History from "../../../../Images/History.svg";
import { useNavigate } from "react-router-dom";

const heading = "Transform lending with accurate risk prediction";

const paragraph =
 "Our app accurately predicts default risk for borrowers, helping financial institutions make informed lending decisions and minimize the impact of defaults";

const HeroTxt = () => {
 const navigate = useNavigate();
 return (
  <div className={styles.heroText}>
   <div className={styles.history}>
    <img src={History} alt="History" />
    <span>Watch Our History</span>
   </div>
   <HeroText heading={heading} paragraph={paragraph} />
   <div className={styles.heroBtns}>
    <FilledBtn
     title="Get Started"
     onClick={() => navigate("/create-account")}
    />
    <TransparentBtn
     title="Learn More"
     icon={Icon}
     onClick={() => navigate("/about-us")}
    />
   </div>
  </div>
 );
};

export default HeroTxt;
