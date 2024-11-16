import CardChallenge from '../../components/CardChallenge';
import BackButton from '../../components/BackButton';
const ChallengesPage = () => {
  return (
    <section className="relative ">
      <BackButton path={'/'} />
      <div className="w-[90%] mx-auto lg:max-w-[80%] pt-16">
        <h1 className="text-center font-outfit text-3xl text-gray-800 uppercase font-bold">
          Tous mes challenges frontend
        </h1>
        <span className="block h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 my-8"></span>
        {/* Cards container */}
        <div className="flex justify-center gap-5 flex-wrap">
          <CardChallenge
            path={'qrcode'}
            title={'Qr Code'}
            keywords={['responsive', 'card', 'html/css']}
            challNb={'1'}
          />
          <CardChallenge
            path={'social-link-profile'}
            title={'Social link profile'}
            keywords={['responsive', 'card', 'html/css']}
            challNb={'2'}
          />
        </div>
      </div>
    </section>
  );
};

export default ChallengesPage;
