import PropTypes from 'prop-types';
import imgProfile from './img/avatar-jessica.jpeg';
import LayoutChall from '../../../components/LayoutChall';
const Card = ({ data }) => {
  const { name, city, desc, socialMediaList } = data;
  return (
    <div className="min-h-[70%] w-[90%] max-w-[400px] bg-[#1E1E1E] rounded-xl  flex justify-center font-inter xl:h-[75%]">
      <div className="py-9 w-[85%] px-1 flex flex-col items-center justify-between ">
        {/* avatar */}
        <img
          src={imgProfile}
          alt="profile picture"
          className="rounded-full w-20"
        />
        {/* infos */}
        <div className="flex flex-col items-center p-5 gap-2">
          <h1 className="text-white text-2xl font-bold">{name}</h1>
          <p className={'text-[#C4F82A] font-bold text-sm'}> {city}</p>
        </div>
        {/* desc */}
        <p className="text-white text-center">&ldquo;{desc}&ldquo;</p>
        <nav className="text-white w-full h-full">
          <ul className="flex flex-col  gap-2 justify-evenly text-center h-full  pt-6 lg:gap-3 ">
            {socialMediaList.map((social, i) => (
              <li
                key={i}
                className="bg-[#333333] w-full rounded-lg hover:bg-[#C4F82A] hover:text-[#333333] transition-colors duration-200"
              >
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 block w-full h-full font-bold text-sm"
                >
                  {social}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
const SocialLinkProfile = () => {
  //{`text-[#C4F82A]`}
  const data = {
    name: 'Jessica Randall',
    city: 'London, United Kingdom',
    desc: 'Front-end developer and avid reader.',
    socialMediaList: [
      'GitHub',
      'Frontend Mentor',
      'LinkedIn',
      'X',
      'Instagram',
    ],
  };

  return (
    <LayoutChall className={'bg-[#141414]'}>
      <Card data={data} />
    </LayoutChall>
  );
};
Card.propTypes = {
  data: PropTypes.string,
};
export default SocialLinkProfile;
