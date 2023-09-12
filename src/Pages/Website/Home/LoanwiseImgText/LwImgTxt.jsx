import React from "react";
import styles from "../styles.module.css";
import LoanDefaultersText from "./LwFlexText";
import LoanDefaultersImg from "./LwFlexImg";
import LoanDefaulters from "../../../../Images/loanDefaulters.svg";

const listItems = [
 "Enhance loan approval accuracy.",
 "Reduce the risk of defaults.",
 "Streamline lending decisions.",
];

const heading = `Identify loan defaulters precision.`;

const paragraph = `Our innovative financial behavioral analysis feature goes beyond
traditional credit checks to help financial institutions more accurately
predict loan defaults. By analyzing a borrower's financial habits and
behavior, our app provides a more comprehensive view of their
creditworthiness, allowing lenders to make better-informed lending
decisions.`;

const LwImgTxt = () => {
 return (
  <section className={styles.loanDefaulters}>
   <LoanDefaultersText
    listItems={listItems}
    paragraph={paragraph}
    heading={heading}
   />
   <LoanDefaultersImg image={LoanDefaulters} />
  </section>
 );
};

export default LwImgTxt;
