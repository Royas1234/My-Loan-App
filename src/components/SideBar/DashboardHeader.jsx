import React from "react";
import dashboardLogo from "../../Images/Dashboard/dashboard-logo.svg";
import bell from "../../Images/Dashboard/bell.svg";
import man from "../../Images/Dashboard/man.png";
import "./SideBar.css";

const DashboardHeader = () => {
  return (
    <div className="dashboard-header">
      <a href="/">
        <img
          src={dashboardLogo}
          alt="a loanwise dashboard logo"
          className="dashboard-logo"
        />
      </a>
      <div className="dashboard-head-right">
        <img src={bell} alt="a notification bell" />
        <div className="dash-profile-logo">
          <div className="profile-div">
            <img src={man} alt="dashboard user pic" className="profile" />
            <div className="num">5</div>
          </div>
        </div>
        <div className="dash-user-name">
          <p>Tosin Adepoju</p>
          <p>Risk Analyst </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
