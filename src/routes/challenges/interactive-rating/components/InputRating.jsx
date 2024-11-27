import PropTypes from 'prop-types';
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
InputRating.propTypes = {
  rating: PropTypes.number.isRequired,
  selectedRating: PropTypes.number.isRequired,
  setSelectedRating: PropTypes.func.isRequired,
};
export default InputRating;
