import React from "react";
import share from "../assets/menu-icons/share.png";


const ShareButton = ({user}) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Share your profile",
          url: `https://resussweb.netlify.app/user/${user}`, // Current page URL
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      // Fallback for browsers that don't support the share API
      alert("Share feature is not supported on this browser.");
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex gap-2 items-center text-[#161616] py-2 px-4 rounded"
    >
      <img src={share} alt="share" className="w-5 h-5" />
      <span className="text-[14px]">Share your profile</span>
    </button>
  );
};

export default ShareButton;
