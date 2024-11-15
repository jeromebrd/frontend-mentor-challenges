import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const BackButton = ({ path }) => {
  return (
    <NavLink
      to={path}
      className="absolute top-5 left-2 ml-5 text-2xl flex items-center justify-center gap-2 bg-white px-4 py-2 shadow-md  rounded-full text-slate-800 lg:shadow-lg"
    >
      <FontAwesomeIcon icon={faArrowLeft} />
      <span className="text-lg">Back</span>
    </NavLink>
  );
};
BackButton.propTypes = {
  path: PropTypes.string,
};
export default BackButton;
