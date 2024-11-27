import PropTypes from 'prop-types';
import InputRating from './InputRating';
import iconStar from '../img/icon-star.svg';

const RatingComponent = ({
  selectedRating,
  setSelectedRating,
  handleSubmit,
}) => {
  const ratings = [1, 2, 3, 4, 5];

  return (
    <>
      {/* icon */}
      <div className="h-12 w-12 bg-slate-700 rounded-full self-start flex items-center justify-center">
        <img src={iconStar} alt="icon star" />
      </div>
      {/* title */}
      <h1 className="text-white text-2xl">How did we go?</h1>
      {/* content */}
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      {/* form */}
      <form className="flex flex-col w-full gap-8" onSubmit={handleSubmit}>
        <div className="flex justify-between w-full ">
          {/* rating 1-5 */}
          {ratings.map((rating) => (
            <InputRating
              rating={rating}
              key={rating}
              selectedRating={selectedRating}
              setSelectedRating={setSelectedRating}
            />
          ))}
        </div>

        {/* submit */}
        <button
          type="submit"
          className="uppercase bg-[#fb7413] rounded-full py-3 text-[#121417] font-bold tracking-wide active:bg-white hover:bg-white transition-colors duration-200 ease-in-out"
        >
          Submit
        </button>
      </form>
    </>
  );
};
RatingComponent.propTypes = {
  selectedRating: PropTypes.number.isRequired,
  setSelectedRating: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
export default RatingComponent;
