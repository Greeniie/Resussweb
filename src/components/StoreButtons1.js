import apple from "../assets/menu-icons/apple.png";
import playstore from "../assets/menu-icons/playstore.png";

const StoreButtons1 = () => {
  return (
    <div className="flex items-center md:justify-start justify-center gap-2 mt-6 pb-[70px] md:pb-0">
      {/* Play Store Button */}
      <a
        href="#"
        className="flex items-center justify-center w-[180px] h-[50px] bg-black text-white rounded-xl px-4 py-2 hover:scale-105 transition-transform"
      >
        <img src={playstore} alt="Play Store" className="h-5 object-contain mr-3" />
        <div className="text-left text-xs leading-tight">
          <div className="text-[10px]">GET IT ON</div>
          <div className="text-sm font-semibold">Play Store</div>
        </div>
      </a>

      {/* App Store Button */}
      <a
        href="#"
        className="flex items-center justify-center w-[180px] h-[50px] bg-black text-white rounded-xl px-4 py-2 hover:scale-105 transition-transform"
      >
        <img src={apple} alt="App Store" className="h-5 object-contain mr-3" />
        <div className="text-left text-xs leading-tight">
          <div className="text-[10px]">GET IT ON</div>
          <div className="text-sm font-semibold">App Store</div>
        </div>
      </a>
    </div>
  );
};

export default StoreButtons1;
