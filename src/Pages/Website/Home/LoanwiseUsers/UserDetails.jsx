import React from "react";
import { userList } from "./userlist.js";
import styles from "./Users.module.css";
import TransparentBtn from "../../../../components/Button/TransparentBtn.jsx";
import arrow from "../../../../Images/arrow-right.svg";

const UserDetails = () => {
 const userDetail = userList.map((user) => (
  <div className={styles.user} key={user.id}>
   <img src={user.image} alt="User" />
   <h4>{user.title}</h4>
   <p>{user.description}</p>
   <TransparentBtn title="Learn More" icon={arrow} link="/aboutUs" />
  </div>
 ));

 return <section className={styles.userWrapper}>{userDetail}</section>;
};

export default UserDetails;
