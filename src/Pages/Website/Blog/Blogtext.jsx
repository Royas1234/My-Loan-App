import React from "react";
import FilledBtn from "../../../components/Button/FilledBtn";
import "./Blog.css";

const Blogtext = () => {
 return (
  <div className="Blogtext">
   <h3 className="gradient-text">Coming Soon</h3>
   <h4>
    Get Notified When <br /> Our Blog Launches
   </h4>
   <div className="blog-Input">
    <input
     type="text"
     placeholder="Enter your email address"
     className="input"
    />
    <FilledBtn title="Notify Me" />
   </div>
   <p>We would not spam you, don’t worry.</p>
  </div>
 );
};

export default Blogtext;
