export const calculateMonthlyPayment = (amount, rate, years) => {
  let months = years * 12; // nb monthly
  let monthlyRate = rate / 12 / 100;
  return (
    (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months)).toFixed(2)
  );
};
export const calculateTotalInterest = (totalRepay, amount) => {
  const totalInterest = totalRepay - amount;

  return totalInterest.toFixed(2); // Résultat limité à 2 décimales
};

export const calculateTotalCost = (monthlyPayment, years) => {
  const months = years * 12; // nb monthly
  const totalCost = monthlyPayment * months;

  return totalCost;
};
