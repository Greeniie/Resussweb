import React from "react";
import user from "../assets/menu-icons/user.png";
import support from "../assets/menu-icons/support.png";
import bookmark from "../assets/menu-icons/bookmark.png";
import share from "../assets/menu-icons/share.png";
import view from "../assets/menu-icons/user.png";
import setting from "../assets/menu-icons/setting.png";
import verified from "../assets/menu-icons/verified.png";
import { RightOutlined, EnvironmentFilled, CloseOutlined } from "@ant-design/icons";

const MobileSidebar = ({ profile, toggleSidebar }) => {
  const items = [
    {
      label: (
        <div className="flex items-center justify-between text-base pb-2">
          <div className="flex gap-3 items-center">
            <img src={user} alt="Profile" className="w-4 h-4" />
            <span className="text-[12px]">Your profile</span>
          </div>
          <RightOutlined style={{ fontSize: "14px" }} />
        </div>
      ),
    },
    {
      label: (
        <div className="flex items-center justify-between text-base py-2">
          <div className="flex gap-3 items-center">
            <img src={view} alt="view" className="w-4 h-4" />
            <span className="text-[12px]">View my account</span>
          </div>
          <RightOutlined style={{ fontSize: "14px" }} />
        </div>
      ),
    },
    {
      label: (
        <div className="flex items-center justify-between text-base  py-2">
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
        <div className="flex items-center gap-3 text-base  py-2 text-[#9900FF]">
          <span className="text-[12px]">Sign out</span>
        </div>
      ),
    },
  ];

  return (
    <div className="py-3 px-4 overflow-x-hidden">
      <div className="relative h-[300px] w-[300px] flex items-center">
        <img
          src={verified}
          alt="verified"
          className="h-[30px] w-auto object-center object-cover absolute right-[105px] top-[88px]"
        />
        <img
          src={profile?.profile_photo_url}
          className="object-cover object-center h-[200px] w-[200px] mt-[50px]"
          alt="profile"
        />
      </div>
      <div>
        <div>
          <div className="text-[#545454] text-[22px] font-bold">
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
            <span className="text-[14px] text-[#70E1FF] uppercase font-bold">
              BENIN
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
      <button
        onClick={toggleSidebar}
        className="flex justify-center absolute top-14 right-4 text-white bg-[#461378] p-2 rounded-full hover:bg-[#330066] transition-all"
      >
        <CloseOutlined style={{ fontSize: "20px" }} />
      </button>
    </div>
  );
};

export default MobileSidebar;
