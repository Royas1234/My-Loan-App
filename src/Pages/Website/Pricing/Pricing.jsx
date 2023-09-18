import React from "react";
import checkmark from "../../../Images/Vector.svg";
import Question from "./Question.jsx";
import Footer from "../../../components/Footer/Footer.jsx";
import Header from "../../../components/Header/Header.jsx";
import LoanwiseUsers from "../Home/LoanwiseUsers/LoanwiseUsers";
import "./Pricing.css";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
 const navigate = useNavigate();

 return (
  <div className="container">
   <Header />
   <div className="plan-div">
    <h1>Choose your plan</h1>
    <p>
     Choose the pricing plan that works best for you, whether you're looking for
     casual transaction or flexible customizations
    </p>
    <a href="/">Learn More in FAQ's</a>
   </div>

   <div className="card-wrapper">
    <div className="card-div">
     <div className="free-card">
      <h2>Free</h2>
      <p>The basics for individuals and organisations</p>
      <div className="price-div">
       <span className="dollar">
        <sup>$ </sup>
       </span>
       <span className="zero">0</span>
       <div className="time-div">
        <span>per year</span>
        <span>forever</span>
       </div>
      </div>
      <button className="join-btn" onClick={() => navigate("/create-account")}>
       Join for free
      </button>
     </div>
     <div className="card-features">
      <ul>
       <li>
        <img src={checkmark} alt="check mate icon" />
        <div className="list">
         Access core features, including predictive analytics and customizable
         loan criteria.
        </div>
       </li>
       <li>
        <img src={checkmark} alt="check mate icon" />
        <div className="list">
         Real-time default alerts for prompt action by financial institutions.
        </div>
       </li>
       <li>
        <img src={checkmark} alt="check mate icon" />
        <div className="list">
         Historical loan performance analysis to help predict future defaults.
        </div>
       </li>
       <li>
        <img src={checkmark} alt="check mate icon" />
        <div className="list">
         Compliance with local and federal regulations for loan applications.
        </div>
       </li>
       <li>
        <img src={checkmark} alt="check mate icon" />
        <div className="list">
         Risk scoring prioritizes high-risk loans and minimizes default risk.
        </div>
       </li>
       <li>
        <img src={checkmark} alt="check mate icon" />
        <div className="list">
         Data integration with credit bureaus and financial institutions for
         borrower history.
        </div>
       </li>
       <li>
        <img src={checkmark} alt="check mate icon" />
        <div className="list">
         Affordable pricing for small financial institutions.
        </div>
       </li>
      </ul>
     </div>
    </div>
    <div className="premium-card">
     <div className="card-div premium-card-div">
      <div className="free-card premium">
       <h2>Premium</h2>
       <p>Advanced collaboration for individuals and organisations</p>
       <div className="premium-price-div">
        <span className="premium-dollar  dollar">
         <sup>$ </sup>
        </span>
        <span className="premium-price-ash">15 </span>
        <span className="premium-dollar-black dollar">
         <sup>$ </sup>
        </span>
        <span className="premium-price-black">30</span>
        <div className="time-div  premium-time">
         <span>per year forever</span>
         <span>for the first 12 months</span>
        </div>
       </div>
       <button
        className="started-btn"
        onClick={() => navigate("/create-account")}
       >
        Get Started Premium
       </button>
      </div>
      <div className="card-features">
       <ul>
        <li>
         <img src={checkmark} alt="check mate icon" />
         <div className="list">
          Basic Plan benefits plus fraud detection and financial behavioral
          analysis.
         </div>
        </li>
        <li>
         <img src={checkmark} alt="check mate icon" />
         <div className="list">
          Analyze borrower's social media for deeper financial insights.
         </div>
        </li>
        <li>
         <img src={checkmark} alt="check mate icon" />
         <div className="list">
          Customizable dashboards for a comprehensive lending view and informed
          decisions.
         </div>
        </li>
        <li>
         <img src={checkmark} alt="check mate icon" />
         <div className="list">
          Advanced reporting capabilities for valuable lending insights.
         </div>
        </li>
        <li>
         <img src={checkmark} alt="check mate icon" />
         <div className="list">
          {" "}
          Dedicated support and training for optimal app usage.
         </div>
        </li>
        <li>
         <img src={checkmark} alt="check mate icon" />
         <div className="list">
          Unlimited users for sealable lending as buisness grow
         </div>
        </li>
        <li>
         <img src={checkmark} alt="check mate icon" />
         <div className="list">
          Competitive pricing with exceptional value for financial institution
         </div>
        </li>
       </ul>
      </div>
     </div>
    </div>
    <div className="card-div">
     <div className="free-card premium">
      <h2>Enterprise</h2>
      <p>Security, compliance and flexible deployment</p>
      <div className="premium-price-div">
       <span className="premium-dollar  dollar">
        <sup>$ </sup>
       </span>
       <span className="premium-price-ash">252 </span>
       <span className="premium-dollar-black dollar">
        <sup>$ </sup>
       </span>
       <span className="premium-price-black">231</span>
       <div className="time-div  premium-time">
        <span>per year forever</span>
        <span>for the first 12 months*</span>
       </div>
      </div>
      <div className="trial-btn-div">
       <button className="free-btn" onClick={() => navigate("/create-account")}>
        Start a free trial
       </button>
       <button className="contact-btn">Contact Sales</button>
      </div>
     </div>
     <div className="card-features">
      <ul>
       <li>
        <img src={checkmark} alt="check mate icon" />
        <div className="list">
         Premium Plan benefit plus customized risk models and white-labeling.
        </div>
       </li>
       <li>
        <img src={checkmark} alt="check mate icon" />
        <div className="list">
         Tailored risk models meet specific needs of financial institutions.
        </div>
       </li>

       <li>
        <img src={checkmark} alt="check mate icon" />
        <div className="list">
         White-labeling enables branding of the app as their own.
        </div>
       </li>
       <li>
        <img src={checkmark} alt="check mate icon" />
        <div className="list"></div>
        Custom integrations with third-party systems provide seamless
        experience.
       </li>
       <li>
        <img src={checkmark} alt="check mate icon" />
        <div className="list">
         Advanced security features ensure safety of sensitive borrower data.
        </div>
       </li>
       <li>
        <img src={checkmark} alt="check mate icon" />
        <div className="list">
         Flexible pricing options for tailored needs of financial institutions.
        </div>
       </li>
       <li>
        <img src={checkmark} alt="check mate icon" />
        <div className="list">
         Dedicated account management for personalized support.
        </div>
       </li>
      </ul>
     </div>
    </div>
   </div>

   <div className="Useloanwise">
    <LoanwiseUsers />
   </div>

   <div className="question-wrapper">
    <Question />
   </div>
   <div className="footer">
    <Footer />
   </div>
  </div>
 );
};

export default Pricing;
