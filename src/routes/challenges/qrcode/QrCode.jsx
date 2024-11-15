import PropTypes from 'prop-types';
import qrCodeImg from './img/image-qr-code.png';
import BackButton from '../../../components/BackButton';

const Card = ({ title, text }) => {
  return (
    <div className="bg-white w-[300px] p-5 rounded-2xl shadow-xl ">
      <div className="">
        <img className="rounded-xl" src={qrCodeImg} alt="qrcode" />
      </div>
      <div className="py-5 flex flex-col items-center justify-center gap-2 text-center">
        <h2 className="text-slate-900 font-bold font-outfit text-xl">
          {title}
        </h2>
        <p className="text-[15px] text-slate-500 font-outfit">{text}</p>
      </div>
    </div>
  );
};

const QrCode = () => {
  const texts = {
    title: 'Improve your front-end skills by building projects',
    text: 'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level',
  };

  return (
    <section className="relative w-full h-[100vh] flex justify-center items-center  ">
      <BackButton path={'/challenges'} />
      <div className=" bg-slate-300 h-full w-full flex items-center justify-center xl:h-[90%] xl:max-w-[80%] xl:rounded-xl">
        <Card text={texts.text} title={texts.title} />
      </div>
    </section>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default QrCode;
