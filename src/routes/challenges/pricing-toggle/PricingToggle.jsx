import BackButton from '../../../components/BackButton';
import PropTypes from 'prop-types';

const Card = ({ className }) => {
  return (
    <div
      className={`${className} h-[450px] min-w-[300px] w-full p-4 bg-white rounded-xl shadow-2xl shadow-[#b3b5c6]  lg:shadow-none lg:w-[350px]`}
    ></div>
  );
};

const PricingToggle = () => {
  // gradient : bg-gradient-to-tl from-[#a3a8f0] to #696fdd
  // - Very Light Grayish Blue: 	#f6f6fe
  // - Light Grayish Blue: 	#b3b5c6
  // - Grayish Blue: #6d708d
  // - Dark Grayish Blue: 	#494c5f
  return (
    <>
      <BackButton path={'/challenges'} />
      <section className="min-h-[100dvh] h-full w-full font-montserrat font-bold lg:h-[100dvh] ">
        {/* backgrounds */}
        <div className="relative h-full w-full bg-[#f6f6fe] overflow-hidden">
          <div
            className={`absolute top-0 -right-[135px]  bg-[url('/img/bg-top.svg')] bg-no-repeat bg-right-top h-[50vh] w-[75%] bg-contain md:top-0 md:right-0 md:bg-auto md:w-full md:h-full `}
          />

          <div
            className={`hidden absolute bottom-0 left-0 bg-[url('/img/bg-bottom.svg')] bg-no-repeat bg-left-bottom h-[40vh] w-[75%] bg-contain md:block md:bg-auto md:w-full md:h-full`}
          />

          <div className="min-h-[100vh] flex flex-col items-center justify-start py-10 lg:h-full">
            {/* container title + toggle */}
            <div className="flex flex-col items-center justify-between h-24">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#6d708d] to-[#494c5f] text-xl">
                Our Pricing
              </h1>
              <div className="toggle-pricing flex items-center gap-4">
                <label htmlFor="toggle-btn" className="text-sm text-[#b3b5c6]">
                  Annually
                </label>
                <input
                  type="checkbox"
                  id="toggle-btn"
                  name="toggle-btn"
                  className="pee"
                />
                <label htmlFor="toggle-btn" className="text-sm text-[#b3b5c6]">
                  Monthly
                </label>
              </div>
            </div>
            {/* container cards */}
            <main className=" z-20 flex flex-col items-center w-[90%] h-full gap-4 pt-20 md:flex-row md:justify-center md:w-full md:gap-0 md:pt-20 lg:max-w-[90dvw] lg:pt-0">
              <Card className={'lg:rounded-tr-none lg:rounded-br-none'} />
              <Card
                className={
                  'bg-gradient-to-tl from-[#a3a8f0] to #696fdd lg:h-[500px]'
                }
              />
              <Card className={'lg:rounded-tl-none lg:rounded-bl-none'} />
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

Card.propTypes = {
  className: PropTypes.string,
};

export default PricingToggle;
