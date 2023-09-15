import React from "react";
import FilledBtn from "../Button/FilledBtn";
import "./Coming.css";
import image from "../../Images/socials/background.svg";

export const Coming = () => {
 return (
  <div
   className="Coming container"
   style={{ backgroundImage: `url(${image})` }}
  >
   <div className="comingTitle">
    <h1>COMING SOON</h1>
    <p>We are working hard to get this up and running</p>
    <p>We will be here soon</p>
   </div>

   <div className="side">
    <input
     className="side-btn"
     type="text"
     placeholder="Enter email address"
    ></input>
    <FilledBtn title="Notify Me" />
   </div>
  </div>
 );
};
