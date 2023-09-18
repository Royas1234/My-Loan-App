import React from "react";
import LoanAmountComponent from "./LoanAmountComponent";
import TopDown from "../../../../Images/Dashboard/topdownarrow.svg";
import Cash from "../../../../Images/Dashboard/cash.svg";
import Earnings from "../../../../Images/Dashboard/earnings.svg";

const LoanAmount = () => {
 return (
  <>
   <div className="loanAmountContainer">
    <LoanAmountComponent
     image={TopDown}
     amount={1200}
     description="Total Number of Loans"
    />
    <LoanAmountComponent
     image={Cash}
     amount="N30,500,000.00"
     description="Total Number of Loans"
    />
    <LoanAmountComponent
     image={TopDown}
     amount={350}
     description="Number of Loans in Default"
    />
    <LoanAmountComponent
     image={Cash}
     amount="N12,000,000.00"
     description="Total Recovered loan"
    />
    <LoanAmountComponent
     image={Cash}
     amount="N8,500,000.00"
     description="Amount of Loans in Default"
    />
    <LoanAmountComponent
     image={Earnings}
     amount="N6,000,000.00"
     description="Interest Earnings"
    />
   </div>
  </>
 );
};

export default LoanAmount;
