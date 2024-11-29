import LayoutChall from '../../../components/LayoutChall';
import { useState } from 'react';

/* Lime: #d7da2e
Red: #d73327
Neutral
White: #ffffff
Slate 100: #e2f3fc
Slate 300: #9abed4
Slate 500: #6b93a8
Slate 700: #4d6e7e
Slate 900: #122e3f */

const MortgageRepayment = () => {
  const [mortgageValue, setMorgageValue] = useState('');
  return (
    <LayoutChall
      className={'font-plusjakarta font-medium bg-[#e2f3fc] text-[#122e3f]'}
    >
      <section className="w-full h-full bg-white md:rounded-xl flex flex-col justify-between md:flex-row md:h-[500px] md:w-[80%]">
        {/* section : form */}
        <div className="h-full w-1/2 p-8">
          <div className="flex flex-wrap justify-between text-[#122e3f] ">
            <h1 className="font-bold text-2xl">Morgage Calculator</h1>
            <button className="underline underline-offset-4 text-[#4d6e7e] ">
              Clear all
            </button>
          </div>
          <form className="flex flex-col mt-4 text-[#4d6e7e]">
            <label htmlFor="mortgage" className="text-[#4d6e7e]">
              Mortgage Amount
            </label>
            <div className="border border-[#4d6e7e] rounded-md flex items-center h-10">
              <span className="px-4 bg-[#e2f3fc] h-full">€</span>
              <input
                type="number"
                name="mortgage"
                id="mortgage"
                value={mortgageValue}
                className="outline-none flex-1 h-full "
              />
            </div>
          </form>
        </div>
        {/* section : display result */}
        <div className="bg-[#122e3f] w-full h-full md:w-1/2 md:rounded-r-xl md:rounded-bl-[5rem]"></div>
      </section>
    </LayoutChall>
  );
};

export default MortgageRepayment;
