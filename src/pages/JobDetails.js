import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HomeNav from "../components/HomeNav";
import { getOneJob } from "../redux/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import ArticleBody from "../components/ArticleBody";
import articlead from "../assets/testimgs/articlead.png";
import { LoadingOutlined } from "@ant-design/icons";
import JobBody from "../components/JobBody";

const JobDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleData } = useSelector((state) => state.jobs);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setLoading(true);
    dispatch(getOneJob(id)).finally(() => {
      setLoading(false);
    });
  }, [id]);

  console.log(singleData);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-[#EDEBF4] min-h-screen overflow-hidden">
      <HomeNav />

      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <LoadingOutlined className="text-[#461378] text-3xl animate-spin" />
        </div>
      ) : (
        <div>
          <JobBody singleData={singleData} goBack={goBack} />
        </div>
      )}
    </div>
  );
};

export default JobDetails;
