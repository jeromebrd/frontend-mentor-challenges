import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const CardChallenge = ({ path, title, keywords, challNb }) => {
  return (
    <div
      className={
        'relative h-[150px] bg-white shadow-xl rounded-md  w-full  p-2 flex flex-col items-center justify-evenly gap-3 scale-100 hover:scale-105 transition duration-150 ease-in will-change-transform sm:w-[200px] md:h-[200px]'
      }
    >
      <NavLink
        to={path}
        className={'absolute top-0 left-0 block w-full h-full '}
      ></NavLink>
      {/* Challenge Number tag */}
      <span
        className={
          ' flex  items-center justify-center top-1 right-1 text-xs bg-white text-violet-500 w-8 h-8 border border-violet-500 p-1 rounded-full'
        }
      >
        {challNb}
      </span>
      {/* title card */}
      <p className="uppercase font-outfit font-bold text-violet-500">{title}</p>
      {/* key words */}
      <ul className="flex flex-wrap  justify-center items-center text-xs gap-0.5 text-gray-400 w-full ">
        {keywords.map((word, i) => (
          <li key={i} className="border border-gray-200 rounded-md py-0.5 px-1">
            {word}
          </li>
        ))}
      </ul>
    </div>
  );
};
CardChallenge.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
  keywords: PropTypes.array,
  challNb: PropTypes.string,
};
export default CardChallenge;
