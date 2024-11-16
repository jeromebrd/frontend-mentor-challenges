import PropTypes from 'prop-types';
import qrCodeImg from './img/image-qr-code.png';
import LayoutChall from '../../../components/LayoutChall';

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
    <LayoutChall className={'bg-slate-300'}>
      <Card text={texts.text} title={texts.title} />
    </LayoutChall>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default QrCode;
