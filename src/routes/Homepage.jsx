import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Homepage = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[100dvh] flex items-center justify-center">
      <div className=" w-[80%] text-center flex flex-col items-center justify-center lg:w-1/2">
        <h1 className="capitalize   font-outfit font-bold text-4xl text-white p-10 md:text-6xl md:mb-10 lg:text-left lg:w-3/4 ">
          Welcome on my frontend mentor challenges
        </h1>
        <NavLink
          className={
            'flex items-center gap-2 text-white font-bold text-sm bg-black py-3 px-5 rounded-full hover:translate-x-2 transition-transform duration-150 sm:text-lg lg:self-end'
          }
          to={'challenges'}
        >
          Challenges
          <FontAwesomeIcon icon={faArrowRight} />
        </NavLink>
      </div>
    </section>
  );
};

export default Homepage;
