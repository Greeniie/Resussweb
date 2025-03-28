import React from "react";
import article1 from "../assets/testimgs/article1.png";
import article2 from "../assets/testimgs/article2.png";
import article3 from "../assets/testimgs/article3.png";
import article4 from "../assets/testimgs/article4.png";
import article5 from "../assets/testimgs/article5.png";
import { EllipsisOutlined } from "@ant-design/icons";

const Articles = () => {
  const articles = [
    {
      image: article1,
      title: "The Future of Film Festivals in a Digital World",
      content:
        "Film festivals have long been a cornerstone of the entertainment industry, providing a platform for emerging filmmakers, networking opportunities, and exclusive premieres.",
    },
    {
      image: article2,
      title:
        "The Rise of Nollywood: How Nigerian Cinema is Taking Over the World",
      content:
        "State management is crucial for maintaining application consistency. Tools like Redux, Recoil, and Zustand provide different ways to handle state effectively.",
    },
    {
      image: article3,
      title: "Streaming Wars: Which Platform is Winning in 2025?",
      content:
        "Artificial intelligence is becoming an integral part of our daily lives, from smart assistants to recommendation systems, transforming the way we interact with technology.",
    },
    {
      image: article4,
      title:
        "Inside the Mind of a Filmmaker: The Art of Storytelling on Screen",
      content:
        "TypeScript has gained popularity due to its type safety and better tooling support. Many companies are adopting it to improve code maintainability and scalability.",
    },
    {
      image: article5,
      title: "The Business of Entertainment: How Creators Are Cashing In",
      content:
        "Minimalist designs, dark mode, and micro-interactions are some of the key UI/UX trends that will dominate the web and mobile application landscape in 2025.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto md:py-4">
      {/* Featured Article (Most Recent) */}
      <div className="hidden md:flex text-white rounded-lg overflow-hidden mb-6">
        <img
          src={articles[0].image}
          alt={articles[0].title}
          className="w-full md:w-1/2 min-h-80 rounded-bl-[25px] rounded-tl-[25px] object-cover"
        />
        <div className="flex flex-col pt-[10px] px-[30px] w-full md:w-1/2 rounded-br-[25px] rounded-tr-[25px] bg-black">
          <button className="flex justify-end mb-[30px]">
            <EllipsisOutlined style={{ fontSize: "32px" }} />
          </button>
          <h2 className="text-2xl text-[#fff] font-bold mb-[30px]">
            {articles[0].title}
          </h2>
          <p className="text-gray-300">{articles[0].content}</p>
        </div>
      </div>

      <div
        className="block md:hidden relative min-h-[250px] mb-4 md:min-h-64 bg-cover bg-center rounded-[25px] overflow-hidden"
        style={{ backgroundImage: `url(${articles[0].image})` }}
      >
        <button className="absolute right-[30px] mt-[10px] mb-[30px]">
          <EllipsisOutlined style={{ fontSize: "32px", color: "white" }} />
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3">
          <h3 className="text-lg text-white font-semibold">
            {articles[0].title}
          </h3>
        </div>
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {articles.slice(1).map((article, index) => (
          <div
            key={index}
            className="relative min-h-[200px] md:min-h-64 bg-cover bg-center rounded-[25px] overflow-hidden"
            style={{ backgroundImage: `url(${article.image})` }}
          >
            <button className="absolute right-[30px] mt-[10px] mb-[30px]">
              <EllipsisOutlined style={{ fontSize: "32px", color: "white" }} />
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3">
              <h3 className="text-lg text-white font-semibold">
                {article.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
