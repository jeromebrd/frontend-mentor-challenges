import { useDocumentTitle } from '../../../hooks/useDocumentTitle';
import PropTypes from 'prop-types';
import LayoutChall from '../../../components/LayoutChall';
import iconStar from './img/icon-star.svg';
import { useState } from 'react';
/* ### Primary

- Orange: 	#fb7413

### Neutral

- White: 	#ffffff
- Light Grey: 	#959eac
- Dark Blue: 	#252d37
- Very Dark Blue: 	#121417*/

const InputRating = ({ rating, selectedRating, setSelectedRating }) => {
  const isChecked = selectedRating === rating;
  return (
    <div
      className={`relative flex items-center justify-center h-12 w-12 rounded-full bg-slate-700 cursor-pointer hover:bg-[#fb7413] hover:text-[#252d37] transition-colors duration-200 ease-in-out active:bg-white active:text-[#252d37] ${
        isChecked ? 'text-[#252d37] bg-white' : ''
      }`}
      onClick={() => setSelectedRating(rating)}
    >
      <input
        type="radio"
        name={`rating-${rating}`}
        id={`rating-${rating}`}
        value={rating}
        className="hidden"
        checked={isChecked}
        onChange={() => setSelectedRating(rating)}
      />
      <label
        htmlFor={`rating-${rating}`}
        className="self-center cursor-pointer font-bold"
      >
        {rating}
      </label>
    </div>
  );
};

const InteractiveRating = () => {
  const ratings = [1, 2, 3, 4, 5];
  const [selectedRating, setSelectedRating] = useState(0);

  useDocumentTitle('Frontend mentor | Interactive Rating');
  return (
    <>
      <LayoutChall className={'bg-[#121417] text-[#959eac] font-overpass'}>
        <div
          className=" min-w-[350px] w-[90%] min-h-[400px] flex flex-col justify-between bg-gradient-to-t from-[#252d37] to-[#959eac] p-8 rounded-3xl md:w-[400px]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% -30%,	rgb(149, 158, 172,0.35), #252d37,	rgb(18, 20, 23, 0.5))',
          }}
        >
          {/* icon */}
          <div className="h-12 w-12 bg-slate-700 rounded-full self-start flex items-center justify-center">
            <img src={iconStar} alt="icon star" />
          </div>
          {/* title */}
          <h1 className="text-white text-2xl">How did we go?</h1>
          {/* content */}
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          {/* form */}
          <form className="flex flex-col w-full gap-8">
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
              className="uppercase bg-[#fb7413] rounded-full py-3 text-[#121417] font-bold tracking-wide"
            >
              Submit
            </button>
          </form>
        </div>
      </LayoutChall>
    </>
  );
};
InputRating.propTypes = {
  rating: PropTypes.number.isRequired,
  selectedRating: PropTypes.number.isRequired,
  setSelectedRating: PropTypes.func.isRequired,
};
export default InteractiveRating;
