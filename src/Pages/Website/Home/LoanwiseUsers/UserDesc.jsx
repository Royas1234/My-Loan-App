import React from "react";
import styles from "./Users.module.css";

const UserDesc = () => {
 return (
  <div className={styles.userDesc}>
   <h3>Who can use Loanwise</h3>
   <p>
    Our Loan Default Prediction App is designed to help various types of
    financial institutions streamline their lending process and reduce the risk
    of loan defaults. Whether you're a small credit union or a large financial
    institution, our Loan Default Prediction App can help you make more informed
    lending decisions and minimize the risk of loan defaults.
   </p>
  </div>
 );
};

export default UserDesc;
