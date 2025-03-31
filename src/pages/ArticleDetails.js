import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import HomeNav from "../components/HomeNav";
import moment from "moment";
import { getOneArticle } from "../redux/articleSlice";
import { useDispatch, useSelector } from "react-redux";
import ArticleBody from "../components/ArticleBody";
import articlead from "../assets/testimgs/articlead.png";
import { LoadingOutlined } from "@ant-design/icons";

const ArticleDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleData } = useSelector((state) => state.articles);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    dispatch(getOneArticle(id)).finally(() => {
      setLoading(false);
    });
  }, [id]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-[#EDEBF4] min-h-screen">
      <HomeNav />
      <div className="py-[30px] hidden md:block">
        <img
          src={articlead}
          alt="ad"
          className="h-[150px] w-auto mx-auto object-center object-cover"
        />
      </div>

      <div className="border border-[red]">
        {loading ? (
          <div className="flex justify-center items-center py-10">
            <LoadingOutlined className="text-[#461378] text-3xl animate-spin" />
          </div>
        ) : (
          <div>
            <ArticleBody goBack={goBack} singleData={singleData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleDetails;
