import React from "react";
import moment from "moment";
import parse from "html-react-parser";
import { ArrowLeftOutlined } from "@ant-design/icons";

const ArticleBody = ({ goBack, singleData }) => {
  console.log(singleData);

  return (
    <div className="bg-[#fff] mx-auto w-[90%] rounded-lg px-[20px] md:px-[50px] py-[20px] md:py-[40px] my-[100px] md:mt-0">
      <div className="block md:grid md:grid-cols-3 gap-[50px] md:gap-[100px] pt-0 md:pt-[20px]">
        <div className="col-span-2">
        <button onClick={goBack} className="block md:hidden mb-[20px]">
              <ArrowLeftOutlined style={{ fontSize: "20px" }} />
            </button>
          <div className="flex gap-[20px] items-start ">
            <button onClick={goBack} className="hidden md:block">
              <ArrowLeftOutlined style={{ fontSize: "50px" }} />
            </button>
           
            <div className="header text-[20px] md:text-[50px] font-bold leading-6 tracking-tight font-inter md:font-semibold md:leading-[63px] md:tracking-tighter text-left">
              {singleData.title}
            </div>
          </div>

          <div className="ml-0 md:ml-[80px] flex justify-between items-center pt-[5px] py-[30px]">
            <div className="">
             
              <div className="text-[10px] md:text-[16px] text-[#ABB0BA]">
                Updated{" "}
                {moment(singleData.created_at).format(
                  "h:mm A [GMT+1], ddd MMMM D, YYYY"
                ) || ""}
              </div>
            </div>
            {/* <div className="flex gap-[10px] md:gap-[20px]">
              <div className="flex items-center gap-[5px] md:gap-[10px]">
                <div>
                  <img src={chat} alt="chat" className="h-[10px] md:h-[30px]" />
                </div>
                <div className="text-[11px] md:text-[16px]">200</div>
              </div>
              <div className="flex items-center gap-[5px] md:gap-[10px]">
                <div>
                  <img src={like} alt="chat" className="h-[10px] md:h-[30px]" />
                </div>
                <div className="text-[11px] md:text-[16px]">14k</div>
              </div>
            </div> */}
          </div>
          <div className="ml-0 md:ml-[80px]">
            <div>
              <img
                src={singleData?.image_path}
                alt="pic2"
                className="rounded-lg"
              />
            </div>

            {singleData?.content ? (
              <div className="py-[20px] body text-[14px]  font-inter text-base font-normal leading-3 text-left md:text-[18px] md:font-normal md:leading-[35px] md:tracking-tight">
                {singleData?.content}
              </div>
            ) : (
              <div>
                {singleData?.article_content?.map((article) => (
                  <div>
                    <div className="py-[20px] body text-[14px]  font-inter text-base font-normal leading-3 text-left md:text-[18px] md:font-normal leading-[25px] md:leading-[35px] md:tracking-tight">
                      {parse(article?.content_body, {
                        replace: (domNode) => {
                          if (
                            domNode.name === "a" &&
                            domNode.attribs &&
                            domNode.attribs.href
                          ) {
                            // Ensure that external links are properly formatted
                            if (!domNode.attribs.href.startsWith("http")) {
                              domNode.attribs.href = `http://${domNode.attribs.href}`;
                            }
                          }
                          return domNode;
                        },
                      })}
                    </div>
                    <div className="flex justify-start">
                      {article?.content_image_url && (
                        <img
                          className=" h-[400px] w-[400px] object-contain mb-3"
                          src={article?.content_image_url}
                          alt="article image"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div>
              {singleData?.video_link && (
                <div style={{ marginTop: "50px" }}>
                  <iframe
                    width="560"
                    height="315"
                    src={singleData?.video_link?.replace("watch?v=", "embed/")}
                    // frameBorder="0"
                    allowFullScreen
                    title={`YouTube Video ${singleData?.id}`}
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="hidden md:block mt-[120px]">
            <div className="text-[#330066] text-[18px] font-bold">Recent Jobs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleBody;
