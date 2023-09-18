import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Team from "./Team";
import Vision from "./Vision";
import Mission from "./Mission";
import Profile from "./Profile";
import "./about.css";

const AboutUs = () => {
 return (
  <div className="container">
   <Header />
   <div className="team1">
    <Team
     heading="Simplifying lending, reducing loan default risk."
     imageUrl="./images/about-us-hero.png"
     content="The Loan Default Prediction App is a company dedicated to simplifying the lending process for financial institutions and borrowers. Their experienced team understands the complexities and challenges involved in lending money, and their goal is to help financial institutions reduce the risk of loan default and make more informed lending decisions."
    />
   </div>
   <Vision />
   <Mission />
   <Team
    heading="Meet Our Amazing Team"
    content="We are proud to introduce the talented individuals who make up the Loan Default Prediction App team. Our team is comprised of experienced professionals from diverse backgrounds, each bringing their unique skills and expertise to our mission of making the lending process simpler and more transparent."
   />
   <Profile />
   <Footer />
  </div>
 );
};

export default AboutUs;
