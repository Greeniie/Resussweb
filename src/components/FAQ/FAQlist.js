import React, { useState } from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const FAQlist = () => {
  const faqs = [
    {
      question: "Who can use Resuss?",
      answer:
        "Resuss is a platform that helps talents and creators connect, collaborate, and grow through project opportunities.",
    },
    {
      question: "Is Resuss free to use?",
      answer:
        "You can sign up with your email or social account and complete your profile to get started.",
    },
    {
      question: "How can I make money with Resuss?",
      answer: "Yes, Resuss offers a free tier with optional premium features.",
    },
    {
      question: "Can I post job opportunities on Resuss??",
      answer: "Yes, Resuss offers a free tier with optional premium features.",
    },
    {
      question: "Can I showcase my portfolio on Resuss?",
      answer: "Yes, Resuss offers a free tier with optional premium features.",
    },
    {
      question: "Can I use Resuss on both mobile and desktop?",
      answer: "Yes, Resuss offers a free tier with optional premium features.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[90%] md:w-[75%] mx-auto pt-[50px]">
      <div className="block md:grid md:grid-cols-3 gap-[50px]">
        <div className="font-[Inter] text-[20px] lg:text-[25px] mx-auto text-[#461378] mb-[30px] md:mb-[0] font-semibold">
          How Resuss works
        </div>
        <div className="col-span-2">
          <div className="space-y-4 mb-[60px]">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-lg">
                <button
                  className="w-full flex justify-between rounded-[14px] items-center px-4 py-3 text-left font-medium text-gray-800 bg-[#FAF9FE] hover:bg-gray-50 transition"
                  onClick={() => toggle(index)}
                >
                  <span className="w-[90%] text-sm sm:text-base text-[#461378]">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <div className="h-[30px] w-[30px] rounded-full bg-[#ABB0BA] text-[#FAF9FE] flex items-center justify-center">
                      <UpOutlined className="text-[14px]" />
                    </div>
                  ) : (
                    <div className="h-[30px] w-[30px] rounded-full bg-[#ABB0BA] text-[#FAF9FE] flex items-center justify-center">
                      <DownOutlined className="text-[14px]" />
                    </div>
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-4 py-3 pb-4 text-sm sm:text-base text-gray-600 transition duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="block md:grid md:grid-cols-3 gap-[50px]">
        <div className="font-[Inter] text-[20px] lg:text-[25px] mx-auto text-[#461378] mb-[30px] md:mb-[0] font-semibold">
        Community guidelines
        </div>
        <div className="col-span-2">
          <div className="space-y-4 mb-[60px]">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-lg">
                <button
                  className="w-full flex justify-between rounded-[14px] items-center px-4 py-3 text-left font-medium text-gray-800 bg-[#FAF9FE] hover:bg-gray-50 transition"
                  onClick={() => toggle(index)}
                >
                  <span className="w-[90%] text-sm sm:text-base text-[#461378]">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <div className="h-[30px] w-[30px] rounded-full bg-[#ABB0BA] text-[#FAF9FE] flex items-center justify-center">
                      <UpOutlined className="text-[14px]" />
                    </div>
                  ) : (
                    <div className="h-[30px] w-[30px] rounded-full bg-[#ABB0BA] text-[#FAF9FE] flex items-center justify-center">
                      <DownOutlined className="text-[14px]" />
                    </div>
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-4 py-3 pb-4 text-sm sm:text-base text-gray-600 transition duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="block md:grid md:grid-cols-3 gap-[50px]">
        <div className="font-[Inter] text-[20px] lg:text-[25px] mx-auto text-[#461378] mb-[30px] md:mb-[0] font-semibold">
        Getting Started
        </div>
        <div className="col-span-2">
          <div className="space-y-4 mb-[60px]">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-lg">
                <button
                  className="w-full flex justify-between rounded-[14px] items-center px-4 py-3 text-left font-medium text-gray-800 bg-[#FAF9FE] hover:bg-gray-50 transition"
                  onClick={() => toggle(index)}
                >
                  <span className="w-[90%] text-sm sm:text-base text-[#461378]">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <div className="h-[30px] w-[30px] rounded-full bg-[#ABB0BA] text-[#FAF9FE] flex items-center justify-center">
                      <UpOutlined className="text-[14px]" />
                    </div>
                  ) : (
                    <div className="h-[30px] w-[30px] rounded-full bg-[#ABB0BA] text-[#FAF9FE] flex items-center justify-center">
                      <DownOutlined className="text-[14px]" />
                    </div>
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-4 py-3 pb-4 text-sm sm:text-base text-gray-600 transition duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQlist;
