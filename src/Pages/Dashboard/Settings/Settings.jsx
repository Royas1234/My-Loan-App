import React from "react";
import SecurityPrivacy from "./Security-Privacy/SecurityPrivacy";
import "./Setting.css";
import Settingtoggle from "./Settingtoggle";
import Notification from "./Notification/Notification";

const Settings = () => {
 const toggleItems = [
  // {
  //   key: 1,
  //   header: "Predictive Model",
  //   subHeader: "Set and edit new or old load default analysis rule ",
  //   showItems: <Predictive />,
  // },
  {
   key: 2,
   header: "Notification",
   subHeader: "Control alerts and notification settings",
   showItems: <Notification />,
  },
  {
   key: 3,
   header: "Security & Privacy ",
   subHeader: "Protect your account with maximum security",
   showItems: <SecurityPrivacy />,
  },
  {
   key: 4,
   header: "User Preference",
   link: "/userPreference",
  },
 ];
 return (
  <div className="wrapper">
   <div className="container">
    <div className="content settingsContainer">
     <div className="settingsUpper">
      {toggleItems.map((item, index) => {
       return (
        <div key={index}>
         <Settingtoggle
          header={item.header}
          subHeader={item.subHeader}
          showItems={item.showItems}
          link={item.link}
         />
        </div>
       );
      })}
     </div>
     {/* <div className="settingsLower">hello</div> */}
    </div>
   </div>
  </div>
 );
};
export default Settings;
