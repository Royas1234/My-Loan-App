import React, { useState } from "react";
import "./Settingtoggle.css";
import arrow from "../../../Images/arrrow.svg";
import { useNavigate } from "react-router-dom";

const Settingtoggle = ({ header, subHeader, showItems, link }) => {
 const [selectedIndex, setSelectedIndex] = useState(false);
 const navigate = useNavigate();

 const handleToggle = () => {
  if (link) {
   navigate(link);
  } else {
   setSelectedIndex(!selectedIndex);
  }
 };

 return (
  <div className="Container">
   <div className="toggleContainer" onClick={handleToggle}>
    <div className="toggle-title">
     <h1>{header}</h1>
     <p>{subHeader}</p>
    </div>
    {!link &&
     (selectedIndex ? (
      <img src={arrow} alt="arrow" style={{ transform: "rotate(90deg)" }} />
     ) : (
      <img src={arrow} alt="arrow" />
     ))}
   </div>

   {selectedIndex && <div>{showItems}</div>}
  </div>
 );
};

export default Settingtoggle;
