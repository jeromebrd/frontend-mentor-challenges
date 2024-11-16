import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const CardChallenge = ({ path, title, keywords, challNb }) => {
  return (
    <div
      className={
        'relative border border-gray-200 bg-white shadow-xl rounded-md h-[100px] w-full  p-2 flex flex-col items-center justify-center gap-2 sm:w-[200px]'
      }
    >
      <NavLink
        to={path}
        className={'absolute top-0 left-0 block w-full h-full'}
      ></NavLink>
      {/* Challenge Number tag */}
      <span
        className={
          'absolute flex  items-center justify-center top-[-10px] right-[-10px] text-xs bg-white text-yellow-400 w-8 h-8 border border-yellow-400 p-1 rounded-full'
        }
      >
        #{challNb}
      </span>
      {/* title card */}
      <p className="uppercase font-outfit font-bold text-violet-500">{title}</p>
      {/* key words */}
      <ul className="flex flex-wrap  justify-center items-center   text-xs gap-2 text-gray-400 w-full sm:justify-evenly sm:gap-1">
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
