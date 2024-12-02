import LayoutChall from '../../../components/LayoutChall';
import { useState } from 'react';
import iconCalculator from './img/icon-calculator.svg';
import PropTypes from 'prop-types';

/* Lime: #d7da2e
Red: #d73327
Neutral
White: #ffffff
Slate 100: #e2f3fc
Slate 300: #9abed4
Slate 500: #6b93a8
Slate 700: #4d6e7e
Slate 900: #122e3f */

const TypeChoice = ({ label, title, selectedType, setSelectedType }) => {
  const isChecked = selectedType === label;
  return (
    <div
      className={`border cursor-pointer ${
        isChecked
          ? 'border-[#d7da2e] bg-[#d7da2e] bg-opacity-15'
          : 'border-[#4d6e7e]'
      } rounded-md px-4 py-2 h-10 flex  items-center gap-4`}
      onClick={() => setSelectedType(label)}
    >
      <input
        type="radio"
        name="type"
        id={label}
        checked={isChecked}
        onChange={() => setSelectedType(label)}
        className={'peer hidden'}
      />
      <span
        className={`h-3 w-3 rounded-full bg-white border border-[#122e3f] shadow-[inset_0_0_0_1.5px_white] ${
          isChecked ? 'border-[#d7da2e] bg-[#d7da2e] ' : ''
        }`}
      ></span>
      <label htmlFor={label} className="font-bold">
        {title}
      </label>
    </div>
  );
};

TypeChoice.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  selectedType: PropTypes.string.isRequired,
  setSelectedType: PropTypes.func.isRequired,
};

const MortgageRepayment = () => {
  const [mgAmountValue, setMgAmountValue] = useState('');
  const [mgTermValue, setMgTermValue] = useState('');
  const [mgRateValue, setMgRateValue] = useState('');
  const [selectedType, setSelectedType] = useState('');
  console.log(mgAmountValue, mgTermValue, mgRateValue);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `amount: ${mgAmountValue}, term: ${mgTermValue}, rate:${mgRateValue}, selection:${selectedType}`
    );
  };
  return (
    <LayoutChall
      className={'font-plusjakarta font-medium bg-[#e2f3fc] text-[#122e3f]'}
    >
      <section className="w-full h-full bg-white md:rounded-xl flex flex-col justify-between md:flex-row md:h-[500px] md:w-[80%]">
        {/* section : form */}
        <div className="md:w-1/2 px-6 mt-6">
          <div className="flex flex-wrap justify-between text-[#122e3f] px-2 ">
            <h1 className="font-bold text-2xl">Morgage Calculator</h1>
            <button className="underline underline-offset-4 text-[#4d6e7e] ">
              Clear all
            </button>
          </div>
          <form
            className="flex flex-col mt-4 text-[#4d6e7e] gap-4"
            onSubmit={handleSubmit}
          >
            {/* Mortgage Amount */}
            <div className="px-2 ">
              <label htmlFor="mortgage-amount" className="text-[#4d6e7e] mb-2 ">
                Mortgage Amount
              </label>
              <div className="border border-[#4d6e7e] rounded-md flex items-center h-10 bg-inherit  mt-2">
                <span className="px-4 bg-[#e2f3fc] h-full flex items-center justify-center rounded-l-md font-bold  ">
                  €
                </span>
                <input
                  type="number"
                  name="mortgage-amount"
                  id="mortgage-amount"
                  value={mgAmountValue}
                  className="outline-none flex-1 h-full py-2 px-4 bg-inherit font-bold"
                  onChange={(e) => setMgAmountValue(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full flex px-2 gap-2 flex-wrap md:flex-nowrap">
              {/* Mortgage Term */}
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="mortgage-term"
                  className="text-[#4d6e7e] mb-2  "
                >
                  Mortgage Term
                </label>
                <div className="border border-[#4d6e7e] rounded-md flex items-center h-10 bg-inherit mt-2 ">
                  <input
                    type="number"
                    name="mortgage-term"
                    id="mortgage-term"
                    value={mgTermValue}
                    className="outline-none h-full flex-1 py-2 px-4 bg-inherit font-bold w-1/2"
                    onChange={(e) => setMgTermValue(e.target.value)}
                  />
                  <span className="px-4 bg-[#e2f3fc] h-full flex items-center justify-center rounded-r-md font-bold   ">
                    years
                  </span>
                </div>
              </div>
              {/* Mortgage Rate */}
              <div className="w-full  md:w-1/2">
                <label htmlFor="mortgage" className="text-[#4d6e7e] mb-2 ">
                  Mortgage Rate
                </label>
                <div className="border border-[#4d6e7e] rounded-md flex items-center h-10 bg-inherit mt-2">
                  <input
                    type="number"
                    name="mortgage-rate"
                    id="mortgage-rate"
                    value={mgRateValue}
                    className="outline-none flex-1 h-full py-2 px-4 bg-inherit w-1/2 font-bold"
                    onChange={(e) => setMgRateValue(e.target.value)}
                  />
                  <span className="px-4 bg-[#e2f3fc] h-full flex items-center justify-center rounded-r-md font-bold ">
                    %
                  </span>
                </div>
              </div>
            </div>
            {/* Mortgage Type */}
            <div className="w-full flex flex-col px-2 gap-2">
              <p className="text-[#4d6e7e]">Mortgage Type</p>
              <TypeChoice
                label={'repayment'}
                title={'Repayment'}
                selectedType={selectedType}
                setSelectedType={setSelectedType}
              />
              <TypeChoice
                label={'interest'}
                title={'Interest Only'}
                selectedType={selectedType}
                setSelectedType={setSelectedType}
              />
            </div>
            {/* SUBMIT */}
            <div className="px-2 w-full flex justify-center md:justify-start md:mt-4">
              <div className="flex items-center bg-[#d7da2e] text-[#122e3f] font-bold w-full  py-3 px-8 rounded-full sm:w-fit gap-2">
                <img src={iconCalculator} alt="icon" />
                <button type="submit" className="text-sm md:text-md">
                  Calculate Repayments
                </button>
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
