import BackButton from '../../../components/BackButton';
const PricingToggle = () => {
  // gradient : bg-gradient-to-tl from-[#a3a8f0] to #696fdd
  // - Very Light Grayish Blue: 	#f6f6fe
  // - Light Grayish Blue: 	#b3b5c6
  // - Grayish Blue: #6d708d
  // - Dark Grayish Blue: 	#494c5f
  return (
    <>
      <BackButton path={'/challenges'} />
      <section className="min-h-[100dvh] h-full w-full bg-[#f6f6fe] font-montserrat font-bold lg:h-[100dvh] ">
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
            <div className="flex flex-col items-center h-28">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#6d708d] to-[#494c5f] text-xl">
                Our Pricing
              </h1>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingToggle;
