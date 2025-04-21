import React, { useState } from "react";
import parse from "html-react-parser";
import { convert } from "html-to-text";
import { Link } from "react-router-dom";
import adsmallscreens from "../assets/testimgs/adsmallscreens.png";
import share from "../assets/menu-icons/shareblack.png";
import { Tooltip } from "antd";

const Articles = ({ articles }) => {
  const [visibleCount, setVisibleCount] = useState(9);

  // Reverse the articles array to show the most recent first
  const sortedArticles = [...articles].reverse();

  const loadMoreArticles = () => {
    setVisibleCount((prevCount) => prevCount + 9);
  };

  const truncateString = (str, limit = 300) => {
    if (str.length <= limit) return str;

    const trimmedStr = str.slice(0, limit);
    const lastSpaceIndex = trimmedStr.lastIndexOf(" ");

    return trimmedStr.slice(0, lastSpaceIndex) + "...";
  };

  const rawText = convert(sortedArticles[0]?.article_content[0]?.content_body, {
    wordwrap: false,
  });

  const truncatedText = truncateString(rawText);
  const parsedContent = parse(truncatedText);

  const handleShare = async (id) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Share this article",
          url: `https://resussweb.netlify.app/articles/details/${id}`, // Current page URL
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Share feature is not supported on this browser.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto md:py-4">
      {sortedArticles[0] && (
        <div className="hidden md:flex text-white rounded-lg overflow-hidden mb-6">
          <img
            src={sortedArticles[0]?.image_path}
            alt={sortedArticles[0]?.title}
            className="w-full md:w-1/2 min-h-80 rounded-bl-[25px] rounded-tl-[25px] object-cover"
          />
          <div className="flex flex-col pt-[10px] px-[30px] w-full md:w-1/2 rounded-br-[25px] rounded-tr-[25px] bg-black">
            <div className="flex justify-end mb-[30px]">
              <Tooltip placement="left" title={"share"}>
                <button
                  onClick={() => handleShare(sortedArticles[0]?.id)}
                  className="flex items-center justify-center p-2 bg-[#F5F5F5] rounded-[7px]"
                >
                  <img
                    src={share}
                    alt="share"
                    className="h-[15px] md:h-[18px] w-auto object-center object-cover"
                  />
                </button>{" "}
              </Tooltip>
            </div>

            <Link to={`/article/details/${sortedArticles[0]?.id}`}>
              <h2 className="text-2xl text-[#fff] font-bold mb-[30px]">
                {sortedArticles[0]?.title}
              </h2>
              <p className="text-gray-300 pb-[50px] text-justify">
                {parsedContent}
              </p>
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Featured Article */}
      <div
        className="block md:hidden relative min-h-[250px] mb-4 md:min-h-64 bg-cover bg-center rounded-[25px] overflow-hidden"
        style={{ backgroundImage: `url(${sortedArticles[0]?.image_path})` }}
      >
        <div className="absolute right-[30px] mt-[10px] mb-[30px]">
          <Tooltip placement="left" title={"share"}>
            <button
              onClick={() => handleShare(sortedArticles[0]?.id)}
              className="flex items-center justify-center p-2 bg-[#F5F5F5] rounded-[7px]"
            >
              <img
                src={share}
                alt="share"
                className="h-[15px] md:h-[18px] w-auto object-center object-cover"
              />
            </button>
          </Tooltip>
        </div>

        <Link to={`/article/details/${sortedArticles[0]?.id}`}>
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3">
            <h3 className="text-lg text-white font-semibold">
              {sortedArticles[0]?.title}
            </h3>
          </div>
        </Link>
      </div>
      

      {/* Article Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sortedArticles?.slice(1, visibleCount).map((article, index) => (
          <React.Fragment key={article?.id}>
            {" "}
            {/* Add key to the fragment */}
            {index === 2 && ( // Display the ad after the third article
              <div key={`ad-${index}`} className="block md:hidden w-full my-4">
                <img
                  src={adsmallscreens}
                  alt="ad"
                  className="block md:hidden rounded-tl-[36px] rounded-tr-[36px]"
                />
              </div>
            )}
            <div
              key={article?.id}
              className="relative min-h-[200px] md:min-h-64 bg-cover bg-center rounded-[25px] overflow-hidden"
              style={{ backgroundImage: `url(${article?.image_path})` }}
            >
              <div className="absolute right-[30px] mt-[10px] mb-[30px]">
                <Tooltip placement="left" title={"share"}>
                  <button onClick={() => handleShare(article?.id)} className="flex items-center justify-center p-2 bg-[#F5F5F5] rounded-[7px]">
                    <img
                      src={share}
                      alt="share"
                      className="h-[15px] md:h-[18px] w-auto object-center object-cover"
                    />
                  </button>
                </Tooltip>
              </div>

              <Link to={`/article/details/${article?.id}`}>
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3">
                  <h3 className="text-lg text-white font-semibold leading-[23px]">
                    {article?.title}
                  </h3>
                </div>
              </Link>
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < sortedArticles?.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMoreArticles}
            className="bg-[#CECCD6] hover:bg-[#330066] hover:text-[#fff] text-[#330066] font-semibold px-6 py-2 rounded-[50px] shadow-lg transition duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Articles;
