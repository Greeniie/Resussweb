import React from "react";
import { MailOutlined, WhatsAppOutlined } from "@ant-design/icons";

const Question = () => {
  return (
    <div className="bg-[#EDE8FC] min-h-[500px] text-center">
      <div className="pt-[50px] md:pt-[100px] text-[22px] lg:text-[40px] text-[#461378] leading-[40px]">
        You still have a question
      </div>
      <div className="font-[Roboto] text-[11px] lg:text-[13px]  text-[#545454] w-full font-normal py-[30px] w-[80%] mx-auto">
        If you cannot find answers to your questions in our FAQs, you can always
        contact us, we will respond to you shortly
      </div>
      <div className=" flex flex-col md:flex-row gap-[30px] items-center justify-center">
        <button className="bg-[white] flex flex-col rounded-[21px] px-[20px] md:px-[30px] py-[10px] md:py-[20px] h-[90px] md:h-[120px] flex items-center justify-center w-[60%] md:w-[20%]">
          <MailOutlined style={{ color: "#000", fontSize: "20px" }} />
          <div className="font-[Roboto] text-[11px] lg:text-[13px]  text-[#545454] w-full font-normal pt-[10px]">
            Send us an email
          </div>
        </button>
        <button className="bg-[white] flex flex-col rounded-[21px] flex items-center h-[90px] md:h-[120px] px-[20px] md:px-[30px] py-[10px] md:py-[20px]  justify-center w-[60%] md:w-[20%]">
          <WhatsAppOutlined style={{ color: "#000", fontSize: "20px" }} />
          <div className="font-[Roboto] text-[11px] lg:text-[13px]  text-[#545454] w-full font-normal pt-[10px]">
            Send a message via whatsapp and we'll respond
          </div>
        </button>
      </div>
    </div>
  );
};

export default Question;
