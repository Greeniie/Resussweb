import React, { useState } from "react";
import { EllipsisOutlined } from "@ant-design/icons";
import parse from "html-react-parser";
import { convert } from "html-to-text";
import { Link, useParams, useNavigate } from "react-router-dom";

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

  const rawText = convert(sortedArticles[0].article_content[0].content_body, {
    wordwrap: false,
  });

  const truncatedText = truncateString(rawText);

  {
    parse(truncatedText);
  }

  return (
    <div className="max-w-6xl mx-auto md:py-4">
      {/* Featured Article (Most Recent) */}

      <Link to={`/article/details/${sortedArticles[0].id}`}>
        <div className="hidden md:flex text-white rounded-lg overflow-hidden mb-6">
          <img
            src={sortedArticles[0].image_path}
            alt={sortedArticles[0].title}
            className="w-full md:w-1/2 min-h-80 rounded-bl-[25px] rounded-tl-[25px] object-cover"
          />
          <div className="flex flex-col pt-[10px] px-[30px] w-full md:w-1/2 rounded-br-[25px] rounded-tr-[25px] bg-black">
            <button className="flex justify-end mb-[30px]">
              <EllipsisOutlined style={{ fontSize: "32px" }} />
            </button>
            <h2 className="text-2xl text-[#fff] font-bold mb-[30px]">
              {sortedArticles[0].title}
            </h2>
            <p className="text-gray-300 pb-[50px] text-justify">
              {parse(truncatedText)}
            </p>
          </div>
        </div>
      </Link>

      {/* Mobile Featured Article */}
      <Link to={`/article/details/${sortedArticles[0].id}`}>
        <div
          className="block md:hidden relative min-h-[250px] mb-4 md:min-h-64 bg-cover bg-center rounded-[25px] overflow-hidden"
          style={{ backgroundImage: `url(${sortedArticles[0].image_path})` }}
        >
          <button className="absolute right-[30px] mt-[10px] mb-[30px]">
            <EllipsisOutlined style={{ fontSize: "32px", color: "white" }} />
          </button>
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3">
            <h3 className="text-lg text-white font-semibold">
              {sortedArticles[0].title}
            </h3>
          </div>
        </div>
      </Link>

      {/* Article Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sortedArticles.slice(1, visibleCount).map((article, index) => (
          <Link to={`/article/details/${article.id}`} key={index}>
            <div
              className="relative min-h-[200px] md:min-h-64 bg-cover bg-center rounded-[25px] overflow-hidden"
              style={{ backgroundImage: `url(${article.image_path})` }}
            >
              <button className="absolute right-[30px] mt-[10px] mb-[30px]">
                <EllipsisOutlined
                  style={{ fontSize: "32px", color: "white" }}
                />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3">
                <h3 className="text-lg text-white font-semibold">
                  {article.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < sortedArticles.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMoreArticles}
            className="bg-[#6633FF] hover:bg-[#4d26cc] text-white font-semibold px-6 py-2 rounded-lg shadow-lg transition duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Articles;
