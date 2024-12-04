import PropTypes from 'prop-types';
const RepaymentCompleted = ({ resultsToDisplay, selectedType }) => {
  return (
    <div className="flex flex-col  mt-6 pb-10 gap-6 text-white w-[90%]  mx-auto md:h-[80%] md:w-[80%]">
      <h2 className="text-2xl font-bold">Your results</h2>
      <p className="text-[#9abed4] text-sm md:text-base">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>
      <div className="bg-[#001f33] px-4 py-4 flex-grow border-t-4 border-[#d7da2e] rounded-lg  md:px-8 md:py-8">
        {selectedType === 'interest' ? (
          <>
            <p className="text-sm text-[#9abed4]">Your monthly interest</p>
            <p className="text-[#d7da2e] font-bold text-4xl py-2">
              {parseFloat(resultsToDisplay.monthlyInterest).toFixed(2)}€
            </p>
            <span className="h-[1px] w-full block bg-[#9abed4] my-2" />
            <p className="text-sm text-[#9abed4]">
              Total you&apos;ll repay over the term
            </p>
            <p className="text-white font-bold text-xl py-2">
              {parseFloat(resultsToDisplay.totalInterest).toFixed(2)}€
            </p>
          </>
        ) : (
          <>
            <p className="text-sm text-[#9abed4]">Your monthly repayments</p>
            <p className="text-[#d7da2e] font-bold text-4xl py-2">
              {parseFloat(resultsToDisplay.monthlyPayment).toFixed(2)} €
            </p>
            <span className="h-[1px] w-full block bg-[#9abed4] my-2" />
            <p className="text-sm text-[#9abed4]">
              Total you&apos;ll repay over the term
            </p>
            <p className="text-white font-bold text-xl py-2">
              {parseFloat(resultsToDisplay.totalRepay).toFixed(2)} €
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default RepaymentCompleted;

RepaymentCompleted.propTypes = {
  resultsToDisplay: PropTypes.object,
  selectedType: PropTypes.string,
};
