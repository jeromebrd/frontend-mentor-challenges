import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Homepage = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[100vh] flex items-center justify-center">
      <div className=" w-[80%] text-center flex flex-col items-center justify-center">
        <h1 className="capitalize font-outfit font-bold text-4xl text-white p-10 sm:text-6xl">
          Welcome on my frontend mentor challenges
        </h1>
        <NavLink
          className={
            'flex items-center gap-2 text-white font-bold text-sm bg-black py-3 px-5 rounded-2xl sm:text-lg'
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
