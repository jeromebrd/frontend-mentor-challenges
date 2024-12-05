import illustration from '../img/illustration-empty.svg';

const EmptyResults = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-6 pb-10 gap-6 text-white w-[90%]  mx-auto md:h-[80%] md:w-[80%]">
      <div className="flex flex-col items-center gap-4 md:mt-12">
        <img src={illustration} alt="illustration" />
        <p className="font-bold">Results shown here</p>
        <p className="text-sm text-[#9abed4] text-center w-[80%] leading-relaxed">
          Complete the form and click “calculate repayments” to see what your
          monthly repayments would be.
        </p>
      </div>
    </div>
  );
};

export default EmptyResults;
