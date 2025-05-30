import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../../redux/profileSlice";
import { useDispatch, useSelector } from "react-redux";
import { LoadingOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import logo from "../../assets/logo.png";
import UserInfo from "../../components/UserInfo";
import ShareButton from "../../components/ShareButton";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { singleData } = useSelector((state) => state.profile);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setLoading(true);
    dispatch(getProfile()).finally(() => {
      setLoading(false);
    });
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  console.log(singleData?.user);
  const thisUser = singleData?.user;

  

  return (
    <div className="min-h-screen bg-[#EDE8FC] rounded-lg px-[0] md:px-[50px] py-[20px] my-0 md:py-[40px] my-[100px]">
      <div className="px-[20px] md:px-[0]">
        <img src={logo} className="h-[30px] md:h-[40px] w-auto" alt="logo" />
      </div>
      <div className="flex justify-between items-center pt-[30px] px-[20px] md:px-[0]">
        <div className="flex gap-3 items-center">
          <button onClick={goBack} className="block md:hidden">
            <ArrowLeftOutlined style={{ fontSize: "14px" }} />
          </button>
          <button onClick={goBack} className="hidden md:block">
            <ArrowLeftOutlined style={{ fontSize: "30px" }} />
          </button>
          <div className="font-semibold text-[#330066] text-[18px] md:text-[25px]">
            My Profile
          </div>
        </div>
        <ShareButton user={thisUser?.id} />
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <LoadingOutlined className="text-[#461378] text-3xl animate-spin" />
        </div>
      ) : (
        <div>
          <UserInfo user={thisUser} />
        </div>
      )}
    </div>
  );
};

export default Profile;
