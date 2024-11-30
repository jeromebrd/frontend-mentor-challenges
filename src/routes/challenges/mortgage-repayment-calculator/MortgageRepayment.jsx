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
  const [mgAccountValue, setMgAccountValue] = useState('');
  const [mgTermValue, setMgTermValue] = useState('');
  const [mgRateValue, setMgRateValue] = useState('');
  console.log(mgAccountValue, mgTermValue, mgRateValue);

  return (
    <LayoutChall
      className={'font-plusjakarta font-medium bg-[#e2f3fc] text-[#122e3f]'}
    >
      <section className="w-full h-full bg-white md:rounded-xl flex flex-col justify-between md:flex-row md:h-[500px] md:w-[80%]">
        {/* section : form */}
        <div className="h-full md:w-1/2 p-6">
          <div className="flex flex-wrap justify-between text-[#122e3f] px-2 ">
            <h1 className="font-bold text-2xl">Morgage Calculator</h1>
            <button className="underline underline-offset-4 text-[#4d6e7e] ">
              Clear all
            </button>
          </div>
          <form className="flex flex-col mt-4 text-[#4d6e7e] gap-4">
            <div className="px-2">
              <label
                htmlFor="mortgage-account"
                className="text-[#4d6e7e] mb-2 "
              >
                Mortgage Amount
              </label>
              <div className="border border-[#4d6e7e] rounded-md flex items-center h-10 bg-inherit ">
                <span className="px-4 bg-[#e2f3fc] h-full flex items-center justify-center rounded-l-md font-bold  ">
                  €
                </span>
                <input
                  type="number"
                  name="mortgage-account"
                  id="mortgage-account"
                  value={mgAccountValue}
                  className="outline-none flex-1 h-full py-2 px-4 bg-inherit"
                  onChange={(e) => setMgAccountValue(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full flex px-2 gap-2">
              <div className="">
                <label
                  htmlFor="mortgage-term"
                  className="text-[#4d6e7e] mb-2  "
                >
                  Mortgage Term
                </label>
                <div className="border border-[#4d6e7e] rounded-md flex items-center h-10 bg-inherit ">
                  <input
                    type="number"
                    name="mortgage-term"
                    id="mortgage-term"
                    value={mgTermValue}
                    className="outline-none flex-1 h-full py-2 px-4 bg-inherit w-1/2"
                    onChange={(e) => setMgTermValue(e.target.value)}
                  />
                  <span className="px-4 bg-[#e2f3fc] h-full flex items-center justify-center rounded-r-md font-bold  ">
                    years
                  </span>
                </div>
              </div>
              <div className="">
                <label htmlFor="mortgage" className="text-[#4d6e7e] mb-2 ">
                  Mortgage Rate
                </label>
                <div className="border border-[#4d6e7e] rounded-md flex items-center h-10 bg-inherit ">
                  <input
                    type="number"
                    name="mortgage-rate"
                    id="mortgage-rate"
                    value={mgRateValue}
                    className="outline-none flex-1 h-full py-2 px-4 bg-inherit w-1/2"
                    onChange={(e) => setMgRateValue(e.target.value)}
                  />
                  <span className="px-4 bg-[#e2f3fc] h-full flex items-center justify-center rounded-r-md font-bold ">
                    %
                  </span>
                </div>
              </div>
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
