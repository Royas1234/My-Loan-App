import React, { useState } from "react";
import "./Notification.css";

const Notification = () => {
 const [NotificationToggleStates, setNotificationToggleStates] = useState([
  false,
  false,
  false,
  false,
  false,
  false,
 ]);

 const toggleBall = (index) => {
  setNotificationToggleStates((prevStates) => {
   const newStates = [...prevStates];
   newStates[index] = !newStates[index];
   return newStates;
  });
 };

 return (
  <div className="notification">
   <table cellspacing={0} cellpadding={0}>
    <thead>
     <tr>
      <td className="td dn"></td>
      <td className="td rightT">In-app Notification</td>
      <td className="td rightT">Email Notification</td>
     </tr>
    </thead>
    <tbody>
     <tr>
      <td className="td toggleTxt">New Applications</td>
      <td className="td tog">
       <div
        className={`toggle ${NotificationToggleStates[0] ? "move" : ""}`}
        onClick={() => toggleBall(0)}
       >
        <span className="toggle-ball"></span>
       </div>
      </td>
      <td className="td tog">
       <div
        className={`toggle ${NotificationToggleStates[1] ? "move" : ""}`}
        onClick={() => toggleBall(1)}
       >
        <span className="toggle-ball"></span>
       </div>
      </td>
     </tr>
     <tr>
      <td className="td toggleTxt">Loan Repayment</td>
      <td className="td tog">
       <div
        className={`toggle ${NotificationToggleStates[2] ? "move" : ""}`}
        onClick={() => toggleBall(2)}
       >
        <span className="toggle-ball"></span>
       </div>
      </td>
      <td className="td tog">
       <div
        className={`toggle ${NotificationToggleStates[3] ? "move" : ""}`}
        onClick={() => toggleBall(3)}
       >
        <span className="toggle-ball"></span>
       </div>
      </td>
     </tr>
     <tr>
      <td className="td toggleTxt pb">Loan Due Dates</td>
      <td className="td tog pb">
       <div
        className={`toggle ${NotificationToggleStates[4] ? "move" : ""}`}
        onClick={() => toggleBall(4)}
       >
        <span className="toggle-ball"></span>
       </div>
      </td>
      <td className="td tog pb">
       <div
        className={`toggle ${NotificationToggleStates[5] ? "move" : ""}`}
        onClick={() => toggleBall(5)}
       >
        <span className="toggle-ball"></span>
       </div>
      </td>
     </tr>
    </tbody>
   </table>
  </div>
 );
};

export default Notification;
