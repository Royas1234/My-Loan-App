import React from "react";
import Barchart from "./BarChart";
import LoanAmount from "./LoanAmount";
import Earnings from "../../../../Images/Dashboard/earnings.svg";
import LoanAmountComponent from "./LoanAmountComponent";
import NewBarGraph from "./NewBarGraph";

const ChartCards = ({ loanCardData }) => {
 return (
  <div className="ChartCards">
   <LoanAmount loanCardData={loanCardData} />
   <div className="chart">
    <LoanAmountComponent
     image={Earnings}
     amount="N6,000,000.00"
     description="Interest Earnings"
    />
    <Barchart />
    {/* <Barchart /> */}
    <NewBarGraph />
   </div>
  </div>
 );
};

export default ChartCards;
