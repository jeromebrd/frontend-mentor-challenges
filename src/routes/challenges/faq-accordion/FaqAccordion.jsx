import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LayoutChall from '../../../components/LayoutChall';
import iconStar from './img/icon-star.svg';
import iconPlus from './img/icon-plus.svg';
import iconMinus from './img/icon-minus.svg';
import { texts } from './texts/texts';

const Droptown = ({ title, desc }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="w-full py-5">
      {/* title + Icon */}
      <div
        className="flex justify-between items-center gap-4 hover:text-[#AD28EB] transition-all duration-200 cursor-pointer"
        onClick={handleClick}
      >
        <h2 className="font-bold text-base  md:text-lg">{title}</h2>
        {isActive ? (
          <img src={iconMinus} alt="minus" />
        ) : (
          <img src={iconPlus} alt="plus" />
        )}
      </div>
      {/* text desc */}
      <div className={`py-5 text-sm ${isActive ? '' : 'hidden'} md:text-base`}>
        <p className="text-[#8B6890]">{desc}</p>
      </div>
    </div>
  );
};

const FaqAccordion = () => {
  // light pink : #F8EFFF
  // grayish purple : #8B6890
  // dark purple: #2E1432

  return (
    <LayoutChall className="font-worksans bg-[#F8EFFF] relative text-[#2E1432]">
      <div
        className={`bg-[url('/img/background-faq-accordion.svg')] absolute top-0 left-O w-full h-1/3 xl:rounded-t-xl`}
      ></div>
      <div className="bg-white min-h-[60%] max-h-[80%] overflow-y-auto max-w-[90%] w-[90%] px-8  rounded-xl z-10 md:w-[80%] md:pb-1 lg:w-[50%]">
        {/* container text */}
        <div className="flex flex-col h-full pb-4">
          {/* title FAQS */}
          <div className="flex items-center py-6 md:py-10">
            <img src={iconStar} alt="icon star" />
            <h1 className="ml-7 text-4xl font-bold uppercase md:text-6xl">
              faq
              <span className="text-3xl md:text-5xl">s</span>
            </h1>
          </div>
          {/* droptowns */}
          <div className="h-full flex flex-col justify-between">
            {/* affiche les droptowns avec un séparateur sauf pour le dernier élément */}
            {texts.map((text, i) => (
              <React.Fragment key={i}>
                <Droptown title={text.title} desc={text.desc} />
                {i < texts.length - 1 && <hr />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </LayoutChall>
  );
};
Droptown.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};
export default FaqAccordion;
