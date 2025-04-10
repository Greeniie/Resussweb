import React from "react";
import {
  ArrowLeftOutlined,
  EnvironmentFilled,
  EditFilled,
} from "@ant-design/icons";

const UserInfo = ({ user }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 my-[20px] gap-[30px]">
      <div className="z-50 col-span-2 bg-white w-full min-h-[400px] rounded-[30px] mx-auto px-[20px] md:px-[50px] py-[20px] md:py-[60px]">
        <div className="block md:grid md:grid-cols-2 gap-[30px]">
          <div>
            <div className="relative h-[300px] w-[300px] flex justify-start md:justify-center items-center">
              <img
                src={user?.profile_photo_url}
                className="object-cover object-center h-[300px] w-auto"
                alt="profile"
              />
              <label className="absolute bottom-[-20px] bg-[#330066] w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer">
                <EditFilled className="text-white text-lg" />
                <input type="file" className="hidden" />
              </label>
            </div>

            <div className="mt-[40px] hidden md:block">
              <h2 className="text-[16px] font-bold text-[#DADADA] mb-[20px]">
                Your selected roles
              </h2>
              <div className="flex flex-col gap-[10px]">
                {user?.services.length > 0 ? (
                  user?.services.map((role, index) => (
                    <div
                      key={index}
                      className={`flex justify-between px-[15px] py-[10px] rounded-[50px] ${
                        index === 0
                          ? "bg-[#461378] text-white"
                          : "bg-[#F6E9FF] text-[#330066]"
                      }`}
                    >
                      <span>{role.name}</span>
                      <span className="cursor-pointer"></span>
                    </div>
                  ))
                ) : (
                  <p className="text-[#461378]">No roles selected</p>
                )}
              </div>
            </div>
            <div className="hidden md:block">
              <div className="text-[20px] text-[#70E1FF] font-bold py-[20px]">
                PERSONAL DATA
              </div>
            </div>
          </div>
          <div>
            <div className="text-[#545454] text-[27px] font-bold pt-[20px] md:pt-0">
              {user?.first_name} {user?.last_name}
            </div>
            <div className="text-[#898A8D] text-[16px]">
              {user?.phone_number}
            </div>
            <div className="py-[10px]">
              <EnvironmentFilled
                style={{
                  fontSize: "20px",
                  color: "#6633FF",
                  paddingRight: "10px",
                }}
              />
              <span className="text-[20px] text-[#70E1FF] uppercase font-bold">
                {user?.location || "No location added"}
              </span>
            </div>
            <div className="font-semibold text-[14px]">
              {user?.bio ||
                "You can add your bio to help people know more about you..."}
            </div>
          </div>
          <div className="mt-[40px] md:hidden block">
            <h2 className="text-[16px] font-bold text-[#DADADA] mb-[20px]">
              Your selected roles
            </h2>
            <div className="flex flex-col gap-[10px]">
              {user?.services.length > 0 ? (
                user?.services.map((role, index) => (
                  <div
                    key={index}
                    className={`flex justify-between px-[15px] py-[10px] rounded-[50px] ${
                      index === 0
                        ? "bg-[#461378] text-white"
                        : "bg-[#F6E9FF] text-[#330066]"
                    }`}
                  >
                    <span>{role.name}</span>
                    <span className="cursor-pointer"></span>
                  </div>
                ))
              ) : (
                <p className="text-[#461378]">No roles selected</p>
              )}
            </div>
          </div>
          <div className="md:hidden block">
            <div className="text-[20px] text-[#70E1FF] font-bold py-[20px]">
              PERSONAL DATA
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="form z-50 bg-white min-h-[400px] w-full mb-[30px] rounded-[40px]  mx-auto px-[40px] py-[50px]"></div>
        <div className="form z-50 bg-white min-h-[40px]w-full  mb-[30px] rounded-[40px]  mx-auto px-[40px] py-[50px]"></div>
      </div>
    </div>
  );
};

export default UserInfo;
