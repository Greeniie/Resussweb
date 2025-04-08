import apple from "../assets/menu-icons/apple.png";
import playstore from "../assets/menu-icons/playstore.png";

const StoreButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start md:items-center gap-4 mt-6">
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

export default StoreButtons;
