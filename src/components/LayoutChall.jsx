import PropTypes from 'prop-types';
import BackButton from '../components/BackButton';

const LayoutChall = ({ className, children }) => {
  return (
    <div className="relative w-full h-[100vh] flex justify-center items-center  ">
      <BackButton path={'/challenges'} />
      <main
        className={`${className} h-full w-full flex items-center justify-center xl:h-[90%] xl:max-w-[80%] xl:rounded-xl`}
      >
        {children}
      </main>
    </div>
  );
};
LayoutChall.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
export default LayoutChall;
