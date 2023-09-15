import React from "react";
import logo from "../../../Images/logo.svg";
import "./SuccessfulPage.css";
import wave from "../../../Images/waveee.svg";
import check from "../../../Images/Check.svg";
import FilledBtn from "../../../components/Button/FilledBtn";
import { useNavigate } from "react-router-dom";

const SuccessfulPage = () => {
 const navigate = useNavigate();
 const handleClick = () => navigate("/dashboard/overview");
 const homeClick = () => navigate("/");

 return (
  <div className="successful-wrapper">
   <div className="successful-logo">
    <img src={logo} alt="succesful logo" onClick={homeClick} />
   </div>

   <div className="successful-content">
    <div className="successful-checker">
     <img src={check} alt="checkmark Logo" />
    </div>
    <h2>Congratulations!!!</h2>
    <p>
     You are set to explore <span>LoanWise </span> to make safe and easy credit
     decisions
    </p>
    <FilledBtn title="Continue" type="submit" onClick={handleClick} />
   </div>

   <div className="successful-wave">
    <img src={wave} alt="wave" />
   </div>
  </div>
 );
};

export default SuccessfulPage;
