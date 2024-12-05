import PropTypes from 'prop-types';

const TypeChoice = ({
  label,
  title,
  selectedType,
  setSelectedType,
  isSubmited,
  setIsSubmited,
}) => {
  const isChecked = selectedType === label;

  const handleClick = () => {
    if (isSubmited) {
      setIsSubmited(false);
    }
    setSelectedType(label);
  };
  return (
    <div
      className={`border cursor-pointer ${
        isChecked
          ? 'border-[#d7da2e] bg-[#d7da2e] bg-opacity-15'
          : 'border-[#4d6e7e]'
      } rounded-md px-4 py-2 h-10 flex  items-center gap-4`}
      onClick={handleClick}
    >
      <input
        type="radio"
        name="type"
        id={label}
        checked={isChecked}
        onChange={handleClick}
        className={'peer hidden'}
      />
      <span
        className={`h-3 w-3 rounded-full  border border-[#122e3f]  ${
          isChecked
            ? 'border-[#d7da2e] bg-[#d7da2e] shadow-[inset_0_0_0_1.5px_white] '
            : 'bg-white'
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
  isSubmited: PropTypes.bool.isRequired,
  setIsSubmited: PropTypes.func.isRequired,
};

export default TypeChoice;
