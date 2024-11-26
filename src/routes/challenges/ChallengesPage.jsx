import CardChallenge from '../../components/CardChallenge';
import BackButton from '../../components/BackButton';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
const ChallengesPage = () => {
  useDocumentTitle('Frontend mentor | Challenges');
  return (
    <section className="relative ">
      <BackButton path={'/'} />
      <div className="w-[90%] mx-auto lg:max-w-[80%] pt-16">
        <h1 className="text-center font-outfit text-xl text-gray-800 uppercase font-bold md:text-3xl">
          All my frontend challenges
        </h1>
        <span className="block h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 my-8"></span>
        {/* Cards container */}
        <div className="flex justify-center flex-wrap gap-4 md:justify-between md:gap-y-8 ">
          <CardChallenge
            path={'qrcode'}
            title={'Qr Code'}
            keywords={['responsive', 'card']}
            challNb={'1'}
          />
          <CardChallenge
            path={'social-link-profile'}
            title={'Social link profile'}
            keywords={['responsive', 'card']}
            challNb={'2'}
          />
          <CardChallenge
            path={'faq-accordion'}
            title={'faq accordion'}
            keywords={['responsive']}
            challNb={'3'}
          />
          <CardChallenge
            path={'blog-preview-card'}
            title={'blog preview'}
            keywords={['responsive', 'card']}
            challNb={'4'}
          />
          <CardChallenge
            path={'pricing-toggle'}
            title={'Pricing with toggle'}
            keywords={['responsive', 'toggle button', '3 cards prices']}
            challNb={'5'}
          />
          <CardChallenge
            path={'todo-app'}
            title={'Todo App'}
            keywords={['responsive', 'todo app', 'filter', 'drag/drop']}
            challNb={'6'}
          />
          <CardChallenge
            path={'interactive-rating'}
            title={'Interactive Rating'}
            keywords={['responsive', 'rating', 'component']}
            challNb={'7'}
          />
        </div>
      </div>
    </section>
  );
};

export default ChallengesPage;
