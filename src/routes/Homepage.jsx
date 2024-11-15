import { NavLink } from 'react-router-dom';
const Homepage = () => {
  return (
    <section className="container lg:max-w-[80%]">
      <h2>Homepage</h2>
      <NavLink to={'challenges'}>Challenges</NavLink>
    </section>
  );
};

export default Homepage;
