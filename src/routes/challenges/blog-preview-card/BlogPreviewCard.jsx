import LayoutChall from '../../../components/LayoutChall';
import illustration from './img/illustration-article.svg';
import avatar from './img/image-avatar.webp';

const Card = () => {
  return (
    <article
      href="#"
      className="relative cursor-pointer bg-white h-[500px] w-[327px] rounded-3xl border border-gray-950 p-6 pb-0"
    >
      <div className="absolute top-2 -right-3  bg-gray-950 w-[100.5%] h-[101%] rounded-[2rem] -z-10" />

      {/* illustration */}
      <div className="h-full flex flex-col gap-0.5">
        <img
          src={illustration}
          alt="illustration"
          className="w-full rounded-[10px]"
        />
        {/* Content */}
        <div className="h-full flex flex-col justify-evenly">
          {/* tag */}
          <ul className="flex justify-start w-full gap-2">
            <li className="bg-[#F4D04E] py-1 px-3 rounded font-extrabold text-xs">
              Learning
            </li>
          </ul>
          {/* date published */}
          <p className="text-xs font-medium">Published 21 Dec 2023</p>
          {/* title */}
          <a
            href={'#'}
            className="cursor-pointer text-xl font-extrabold hover:text-[#F4D04E]"
          >
            HTML & CSS foundations
          </a>
          {/* desc */}
          <p className="text-sm font-medium text-gray-500">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
          {/* author */}
          <div className="flex gap-4 items-center">
            <div className="w-8 h-8">
              <img src={avatar} alt="avatar" />
            </div>
            <p className="text-sm font-extrabold">Greg Hooper</p>
          </div>
        </div>
      </div>
    </article>
  );
};

const BlogPreviewCard = () => {
  return (
    <>
      <LayoutChall className={'font-figtree bg-[#F4D04E] text-gray-950 -z-10 '}>
        <Card />
      </LayoutChall>
    </>
  );
};

export default BlogPreviewCard;
