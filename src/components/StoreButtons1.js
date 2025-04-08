import apple from "../assets/menu-icons/apple.png";
import playstore from "../assets/menu-icons/playstore.png";

const StoreButtons1 = () => {
  return (
    <div className="flex items-center md:justify-start justify-center gap-4 mt-6 pb-[70px] md:pb-0">
      {/* App Store Button */}
      <a
        href="#"
        className="flex items-center  w-[130px] h-[40px] bg-black text-white rounded-xl px-4 py-2 shadow-lg hover:scale-105 transition-transform"
      >
        <img src={playstore} alt="Play Store" className="h-5 object-contain" />
      </a>

      {/* Play Store Button */}
      <a
        href="#"
        className="flex items-center  w-[130px] h-[40px] bg-black text-white rounded-xl px-4 py-2 shadow-lg hover:scale-105 transition-transform"
      >
        <img src={apple} alt="Play Store" className="h-5 object-contain" />
      </a>
    </div>
  );
};

export default StoreButtons1;
