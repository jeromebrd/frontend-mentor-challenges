export const calculateMonthlyPayment = (amount, rate, years, type) => {
  let months = years * 12; // nb monthly
  let monthlyRate = rate / 12 / 100;
  if (type === 'repayment') {
    return (
      (amount * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -months)).toFixed(2)
    );
  } else if (type === 'interest') {
    return (amount * monthlyRate).toFixed(2);
  }
  return 0; //default type
};

export const calculateTotalCost = (monthlyPayment, years) => {
  const months = years * 12; // nb monthly
  const totalCost = monthlyPayment * months;

  return totalCost;
};
