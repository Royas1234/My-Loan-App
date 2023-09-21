import React from "react";
import LoanAmountComponent from "./LoanAmountComponent";
import TopDown from "../../../../Images/Dashboard/topdownarrow.svg";
import Cash from "../../../../Images/Dashboard/cash.svg";
import Earnings from "../../../../Images/Dashboard/earnings.svg";

const LoanAmount = ({ loanCardData }) => {
  const totalNumberOfLoans = loanCardData.length;

  function totalLoans(loanData) {
    let total = 0;
    loanData.forEach((loan) => {
      total += loan.amount;
    });
    const formatAmout = new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(total);
    return formatAmout;
  }
  const totalAmountOfLoans = totalLoans(loanCardData);

  function loanStatus(loanData) {
    return loanData.filter((loanStatus) => loanStatus.status === "DEFAULTED");
  }
  const defaultedLoans = loanStatus(loanCardData);
  const totalAmountOfDefaultedLoans = totalLoans(defaultedLoans);

  return (
    <>
      <div className="loanAmountContainer">
        <LoanAmountComponent
          image={TopDown}
          amount={totalNumberOfLoans}
          description={"Total Number of Loans"}
        />
        <LoanAmountComponent
          image={Cash}
          amount={totalAmountOfLoans}
          description={"Total Amount of Loans"}
        />
        <LoanAmountComponent
          image={TopDown}
          amount={defaultedLoans.length}
          description={"Number of Loans in Default"}
        />
        <LoanAmountComponent
          image={Cash}
          amount={"N12,000,000.00"}
          description={"Total Recovered loan"}
        />
        <LoanAmountComponent
          image={Cash}
          amount={totalAmountOfDefaultedLoans}
          description={"Amount of Loans in Default"}
        />
        <LoanAmountComponent
          image={Earnings}
          amount={"N6,000,000.00"}
          description={"Interest Earnings"}
        />
      </div>
    </>
  );
};

export default LoanAmount;
