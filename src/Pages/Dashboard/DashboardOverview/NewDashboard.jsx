import React from "react";
import DashboardHeader from "../../../components/SideBar/DashboardHeader";
import SideBar from "../../../components/SideBar/SideBar";
import DashboardPages from "./DashboardPages";

const NewDashboard = () => {
 return (
  <div className="dashboard-wrapper">
   <DashboardHeader />
   <div className="dashboard-body">
    <SideBar />
    <div className="dashboard-pages-wrapper">
     <DashboardPages />
    </div>
   </div>
  </div>
 );
};

export default NewDashboard;
