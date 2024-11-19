import { NavLink } from 'react-router-dom';
const NotFound = () => {
  return (
    <section className="flex items-center flex-col justify-center h-[100vh]">
      <h1 className="text-6xl mb-10">
        Oops... Error <span className="text-red-500 font-semibold">404</span> !
      </h1>
      <NavLink
        to={'/challenges'}
        className="border border-gray-200 p-4 rounded-xl hover:text-red-500  hover:border-red-500 transition-colors duration-250"
      >
        Return to challenges
      </NavLink>
    </section>
  );
};

export default NotFound;
