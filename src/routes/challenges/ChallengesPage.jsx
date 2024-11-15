import { NavLink } from 'react-router-dom';

const ChallengesPage = () => {
  return (
    <section className="container lg:max-w-[80%]">
      <h2>Ici tous mes challenges frontend :</h2>
      <NavLink to={'qrcode'}>Qrcode</NavLink>
    </section>
  );
};

export default ChallengesPage;
