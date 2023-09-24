import React from "react";
import LoanAmountComponent from "./LoanAmountComponent";
import TopDown from "../../../../Images/Dashboard/topdownarrow.svg";
import Cash from "../../../../Images/Dashboard/cash.svg";
import Earnings from "../../../../Images/Dashboard/earnings.svg";
import {
 calculateTotalLoans,
 checkForDeafaultedLoans,
} from "../../../../utils/utils";

const LoanAmount = ({ loanCardData }) => {
 const totalNumberOfLoans = loanCardData.length;
 const totalAmountOfLoans = calculateTotalLoans(loanCardData);
 const defaultedLoans = checkForDeafaultedLoans(loanCardData);
 const totalAmountOfDefaultedLoans = calculateTotalLoans(defaultedLoans);

 return (
  <>
   <div className="loanAmountContainer">
    <LoanAmountComponent
     image={TopDown}
     amount={totalNumberOfLoans}
     description="Total Number of Loans"
    />
    <LoanAmountComponent
     image={Cash}
     amount={totalAmountOfLoans}
     description="Total Amount of Loans"
    />
    <LoanAmountComponent
     image={TopDown}
     amount={defaultedLoans.length}
     description="Number of Loans in Default"
    />
    <LoanAmountComponent
     image={Cash}
     amount="N12,000,000.00"
     description="Total Recovered loan"
    />
    <LoanAmountComponent
     image={Cash}
     amount={totalAmountOfDefaultedLoans}
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
