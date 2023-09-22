function calculateTotalLoans(loanData) {
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

function checkForDeafaultedLoans(loanData) {
  return loanData.filter((loanStatus) => loanStatus.status === "DEFAULTED");
}

export { calculateTotalLoans, checkForDeafaultedLoans };
