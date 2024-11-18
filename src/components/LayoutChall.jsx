import PropTypes from 'prop-types';
import BackButton from '../components/BackButton';

const LayoutChall = ({ className, children }) => {
  return (
    <section className="relative w-full h-[100dvh] flex justify-center items-center  ">
      <BackButton path={'/challenges'} />
      <main
        className={`${className} relative h-full w-full flex items-center justify-center xl:h-[90%] xl:max-w-[80%] xl:rounded-3xl`}
      >
        {children}
      </main>
    </section>
  );
};
LayoutChall.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
export default LayoutChall;
