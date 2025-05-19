import React from "react";
import user from "../assets/menu-icons/user.png";
import support from "../assets/menu-icons/support.png";
import bookmark from "../assets/menu-icons/bookmark.png";
import share from "../assets/menu-icons/share.png";
import view from "../assets/menu-icons/view.png";
import setting from "../assets/menu-icons/setting.png";
import verified from "../assets/menu-icons/verified.png";
import placeholderimg from "../assets/images/profile.png";
import {
  RightOutlined,
  EnvironmentFilled,
  CloseOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { logout } from "../redux/authSlice";
import { useDispatch } from "react-redux";
import { Tooltip } from "antd";

const MobileSidebar = ({ profile, toggleSidebar }) => {
  const dispatch = useDispatch();

  const fullName = `${profile?.first_name || ""}${
    profile?.last_name || ""
  }`.toLowerCase();

  const handleShare = async (talent) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Share your profile",
          url: `https://resussweb.netlify.app/user/${profile?.first_name}${profile?.last_name}?id=${profile?.id}`, // Current page URL
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      // Fallback for browsers that don't support the share API
      alert("Share feature is not supported on this browser.");
    }
  };

  const items = [
    {
      label: (
        <Link
          to={`/${fullName}`}
          onClick={(e) => {
            toggleSidebar(e); // event will be passed, stopPropagation will run
          }}
          className="flex text-[#000] items-center justify-between text-base pb-2"
        >
          <div className="flex gap-3 items-center">
            <img src={user} alt="Profile" className="w-4 h-4" />
            <span className="text-[12px]">Your profile</span>
          </div>
          <RightOutlined style={{ fontSize: "14px" }} />
        </Link>
      ),
    },
    {
      label: (
        <Link
          to={`/user/${fullName}`}
          state={{ id: profile?.singleData?.user?.id }}
          onClick={(e) => {
            toggleSidebar(e); // event will be passed, stopPropagation will run
          }}
          className="flex items-center justify-between text-base py-2 text-[#000]"
        >
          <div className="flex gap-3 items-center">
            <img
              src={view}
              alt="view"
              className="w-auto h-3 object-cover object-center"
            />
            <span className="text-[12px]">View my account</span>
          </div>
          <RightOutlined style={{ fontSize: "14px" }} />
        </Link>
      ),
    },
    {
      label: (
        <div
          onClick={() => handleShare()}
          className="flex items-center justify-between text-base  py-2 cursor-pointer"
        >
          <div className="flex gap-3 items-center">
            <img src={share} alt="share" className="w-4 h-4" />
            <span className="text-[12px]">Share your profile</span>
          </div>
        </div>
      ),
    },
    {
      type: "divider",
    },
    {
      label: (
        <div className="flex items-center justify-between text-base  py-2">
          <div className="flex gap-3 items-center">
            <img src={bookmark} alt="bookmark" className="w-4 h-4" />
            <span className="text-[12px]">Bookmarks</span>
          </div>
          <RightOutlined style={{ fontSize: "14px" }} />
        </div>
      ),
    },
    {
      label: (
        <div className="flex items-center justify-between text-base  py-2">
          <div className="flex gap-3 items-center">
            <img src={setting} alt="Settings" className="w-4 h-4" />
            <span className="text-[12px]">Settings</span>
          </div>
          <RightOutlined style={{ fontSize: "14px" }} />
        </div>
      ),
    },
    {
      label: (
        <div className="flex items-center justify-between text-base  py-2">
          <div className="flex gap-3 items-center">
            <img src={support} alt="support" className="w-4 h-4" />
            <span className="text-[12px]">Support</span>
          </div>
          <RightOutlined style={{ fontSize: "14px" }} />
        </div>
      ),
    },
    {
      label: (
        <div
          className="flex items-center gap-3 text-base  py-2 text-[#9900FF]"
          onClick={() => dispatch(logout())}
        >
          <span className="text-[12px]">Sign out</span>
        </div>
      ),
    },
  ];

  return (
    <div className="pt-5 pb-3 px-4 overflow-x-hidden h-[95vh] overflow-y-scroll">
      {profile?.profile_photo_url ? (
        <div
          className="relative h-[250px] w-full bg-cover rounded-[25px] overflow-hidden"
          style={{ backgroundImage: `url(${profile?.profile_photo_url})` }}
        >
          {profile?.level === "verified" && (
            <div className="absolute right-[5px] mt-[10px]">
              <img
                src={verified}
                alt="bookmark"
                className="h-[30px] w-auto object-center object-cover"
              />
            </div>
          )}
        </div>
      ) : (
        <div
          className="relative h-[250px] w-auto bg-contain bg-no-repeat" // removed overflow-hidden
          style={{ backgroundImage: `url(${placeholderimg})` }}
        ></div>
      )}

      <div>
        <div>
          <div className="text-[#545454] text-[22px] font-bold pt-[20px]">
            {profile?.first_name} {profile?.last_name}
          </div>
          <div>
            <EnvironmentFilled
              style={{
                fontSize: "14px",
                color: "#6633FF",
                paddingRight: "10px",
              }}
            />
            <span className="text-[14px] text-[#70E1FF] font-bold">
              {profile?.location || "no location added"}
            </span>
          </div>
        </div>

        <div className="mt-[10px] mb-[20px] pb-[30px] border-b -[#DAD0D0]">
          <div className="flex flex-col gap-[10px]">
            {profile?.services.length > 0 ? (
              profile?.services?.map((role, index) => (
                <div
                  key={index}
                  className={`w-fit flex justify-between px-[15px] py-[5px] rounded-[50px] ${
                    index === 0
                      ? "bg-[#461378] text-white"
                      : "bg-[#F6E9FF] text-[#330066]"
                  }`}
                >
                  <span>{role.name}</span>
                </div>
              ))
            ) : (
              <p className="text-[#461378]">No roles selected</p>
            )}
          </div>
        </div>
      </div>

      <div>
        {items.map((item, i) => (
          <div key={i}>
            {item.type === "divider" ? (
              <hr className="my-2 border-gray-300" />
            ) : (
              item.label
            )}
          </div>
        ))}
      </div>

      {/* Close Button */}
      {/* <button
        onClick={toggleSidebar}
        className="flex justify-center absolute top-14 right-4 text-white bg-[#461378] p-2 rounded-full hover:bg-[#330066] transition-all"
      >
        <CloseOutlined style={{ fontSize: "20px" }} />
      </button> */}
    </div>
  );
};

export default MobileSidebar;
