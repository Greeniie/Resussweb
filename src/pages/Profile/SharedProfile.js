import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { getOneClient } from "../../redux/clientSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import articlead from "../../assets/testimgs/articlead.png";
import SharedUserInfo from "../../components/SharedUserInfo";

const SharedProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleData } = useSelector((state) => state.users);
  const { isLoggedIn } = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setLoading(true);
    dispatch(getOneClient(id)).finally(() => {
      setLoading(false);
    });
  }, [id]);

  const goBack = () => {
    navigate(-1);
  };

  console.log(singleData);
  const thisUser = singleData?.user;

  return (
    <div className="min-h-screen bg-[#EDEBF4] rounded-lg px-[20px] md:px-[50px] py-[20px] my-0 md:py-[40px] my-[100px]">
      <div className="flex justify-between items-start">
        <img src={logo} className="h-[30px] md:h-[40px] w-auto" alt="logo" />
        <div className="w-[70%] hidden md:block">
          <img
            src={articlead}
            alt="ad"
            className="h-auto w-full object-center object-cover"
          />
        </div>
        {isLoggedIn ? (
          <Link
            to="/home"
            className="no-underline border-[2px] text-[#461378] hover:text-[#461378] border-[#461378] px-4 py-1 rounded-[60px] font-medium text-[16px]"
          >
            Go to Home
          </Link>
        ) : (
          <div className="flex items-center gap-[20px]">
            <Link
              to="create-account"
              className="text-[#461378] hover:text-[#9900FF] font-medium"
            >
              Join us
            </Link>
            <Link
              to="/login"
              className="no-underline border-[2px] text-[#461378] hover:text-[#461378] border-[#461378] px-4 py-1 rounded-[60px] font-medium text-[16px]"
            >
              Sign in
            </Link>
          </div>
        )}
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <LoadingOutlined className="text-[#461378] text-3xl animate-spin" />
        </div>
      ) : (
        <div className="w-full md:w-[90%] mx-auto">
          <SharedUserInfo user={thisUser} />
        </div>
      )}
    </div>
  );
};

export default SharedProfile;
