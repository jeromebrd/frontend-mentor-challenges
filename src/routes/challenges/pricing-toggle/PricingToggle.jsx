import BackButton from '../../../components/BackButton';
import Card from './components/Card';
import { useState } from 'react';
import { useDocumentTitle } from '../../../hooks/useDocumentTitle';
/* 
- gradient : bg-gradient-to-tl from-[#a3a8f0] to #696fdd
- Very Light Grayish Blue: 	#f6f6fe
- Light Grayish Blue: 	#b3b5c6
- Grayish Blue: #6d708d
- Dark Grayish Blue: 	#494c5f  
*/

const PricingToggle = () => {
  useDocumentTitle('Frontend mentor | Pricing toggle');
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <BackButton path={'/challenges'} />
      <section className=" h-full w-full font-montserrat font-bold lg:h-[100dvh] ">
        {/* backgrounds */}
        <div className="relative h-full w-full bg-[#f6f6fe] overflow-hidden ">
          <div
            className={`absolute top-0 -right-[135px]  bg-[url('/img/bg-top.svg')] bg-no-repeat bg-right-top h-[50vh] w-[75%] bg-contain md:top-0 md:right-0 md:bg-auto md:w-full md:h-full `}
          />

          <div
            className={`hidden absolute bottom-0 left-0 bg-[url('/img/bg-bottom.svg')] bg-no-repeat bg-left-bottom h-[40vh] w-[75%] bg-contain md:block md:bg-auto md:w-full md:h-full`}
          />

          <div className="min-h-[100vh] flex flex-col items-center justify-start py-10 lg:h-full ">
            {/* container title + toggle */}
            <div className=" z-20 flex flex-col items-center justify-between h-24 lg:h-28">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#6d708d] to-[#494c5f] text-2xl lg:text-3xl">
                Our Pricing
              </h1>
              <div className="toggle-pricing flex items-center gap-4 ">
                <label htmlFor="toggle-btn" className="text-sm text-[#b3b5c6]">
                  Annually
                </label>
                <input
                  type="checkbox"
                  id="toggle-btn"
                  name="toggle-btn"
                  onChange={() => setIsChecked(!isChecked)}
                />
                <label htmlFor="toggle-btn" className="text-sm text-[#b3b5c6]">
                  Monthly
                </label>
              </div>
            </div>
            {/* container cards */}
            <main className="z-20 flex flex-col items-center w-[90%] h-full gap-4 pt-20 md:px-5 md:flex-row md:justify-center md:w-full md:gap-0 md:pt-20 lg:max-w-[90dvw] lg:pt-0">
              <Card
                className={'lg:rounded-tr-none lg:rounded-br-none'}
                isChecked={isChecked}
                title={'Basic'}
              />
              <Card
                className={
                  'bg-gradient-to-br from-[#a3a8f0] to-[#696fdd] lg:h-[500px] lg:py-[25px]'
                }
                main={true}
                isChecked={isChecked}
                title={'Professional'}
              />
              <Card
                className={'lg:rounded-tl-none lg:rounded-bl-none'}
                isChecked={isChecked}
                title={'Master'}
              />
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingToggle;
