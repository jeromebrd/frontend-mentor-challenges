import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const BackButton = ({ path }) => {
  return (
    <NavLink
      to={path}
      className="absolute top-5 left-2 ml-5 flex items-center justify-center gap-2 font-montserrat bg-white px-4 py-2 shadow-md font-bold rounded-full text-slate-800 lg:shadow-lg z-30 hover:-translate-x-1 transition-transform duration-150"
    >
      <FontAwesomeIcon icon={faArrowLeft} />
      <span className="hidden md:inline lg:text-xs">Back</span>
    </NavLink>
  );
};
BackButton.propTypes = {
  path: PropTypes.string,
};
export default BackButton;
