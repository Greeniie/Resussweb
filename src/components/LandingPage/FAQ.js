import React, { useState } from "react";
import faqimg from "../../assets/images/FAQ guy 1.png";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const FAQ = () => {
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
    <div className="relative bg-[#EDE8FC] min-h-[730px] mt-[40px]">
      <div className="hidden md:block">
        <img
          src={faqimg}
          alt=""
          className="h-[400px] w-auto object-center object-cover absolute left-[210px] top-[-35px]"
        />
      </div>
      <div className="max-w-3xl mx-auto px-8 py-8">
        <div className="text-[30px] md:text-[35px] text-[#461378] font-medium leading-[30px] md:leading-[40px] pt-[40px] text-left md:text-center">
          Frequently Asked Questions
        </div>
        <div className="space-y-4 mt-[50px] mb-[130px] md:mb-[0]">
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
  );
};

export default FAQ;
