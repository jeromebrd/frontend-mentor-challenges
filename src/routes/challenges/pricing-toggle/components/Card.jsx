import PropTypes from 'prop-types';

const Card = ({ className, main = false, isChecked, title }) => {
  let price, texts;
  if (title === 'Basic') {
    price = { monthly: '19.99', annually: '199.99' };
    texts = { storage: '500 GB', users: '2', send: '3 GB' };
  } else if (title === 'Master') {
    price = { monthly: '39.99', annually: '399.99' };
    texts = { storage: '2 TB', users: '10', send: '20 GB' };
  } else {
    price = { monthly: '24.99', annually: '249.99' };
    texts = { storage: '1 TB', users: '5', send: '10 GB' };
  }
  return (
    <div
      className={`${className}  text-[#494c5f] h-[450px] min-w-[300px] w-full  bg-white rounded-xl md:min-w-0 lg:w-[350px]`}
    >
      <div
        className={`${
          main ? 'text-white' : ''
        } h-full w-full flex flex-col justify-between items-center p-10`}
      >
        {/* title + price */}
        <div className="flex flex-col items-center gap-6">
          <h2 className={`text-2xl ${main ? 'text-white' : 'text-[#6d708d]'}`}>
            {title}
          </h2>
          <h3 className="text-6xl flex items-center gap-1 before:content-['$'] before:text-4xl">
            {isChecked ? price.annually : price.monthly}
          </h3>
        </div>
        {/* description */}
        <div
          className={`w-full flex flex-col justify-between items-center ${
            main ? 'text-white' : 'text-[#6d708d]'
          }`}
        >
          <hr className="w-full" />
          <p className="py-3">{texts.storage} Storage</p>
          <hr className="w-full" />
          <p className="py-3">{texts.users} Users Allowed</p>
          <hr className="w-full" />
          <p className="py-3">Send up tu {texts.send}</p>
          <hr className="w-full" />
        </div>
        <button
          className={`${
            main
              ? 'bg-white text-[#696fdd]  '
              : 'bg-gradient-to-r from-[#a3a8f0] to-[#696fdd] text-white '
          } hover:cursor-pointer rounded-md py-2 uppercase w-full
          transition-all duration-200 hover:text-opacity-75`}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};
Card.propTypes = {
  className: PropTypes.string,
  main: PropTypes.bool,
  isChecked: PropTypes.bool,
  title: PropTypes.string,
};
export default Card;
