import PropTypes from 'prop-types';
import illustration from '../img/illustration-thank-you.svg';

const ThanksComponent = ({ rating }) => {
  return (
    <div className="flex flex-col items-center w-full h-full flex-1 gap-6">
      {/* illustration */}
      <div>
        <img src={illustration} alt="illustration" />
      </div>
      {/* rating selected */}
      <p className="text-[#fb7413] py-2 px-6 rounded-full bg-slate-700">
        You selected {rating} out of 5
      </p>
      {/* text */}
      <div className="flex flex-col items-center text-center gap-3 pt-2">
        <h1 className="text-white text-2xl">Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don&apos;t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};
ThanksComponent.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default ThanksComponent;
