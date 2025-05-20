import React, { useState } from "react";
import moment from "moment";
import { ArrowLeftOutlined, LockFilled } from "@ant-design/icons";
import adjobpage from "../assets/testimgs/adjobpage.png";
import jobs from "../assets/images/jobs.png";
import i from "../assets/images/i.png";
import links from "../assets/images/links.svg";
import notes from "../assets/images/notes.svg";
import checkk from "../assets/images/checkblue.png";
import verified from "../assets/menu-icons/verified.png";
import share from "../assets/menu-icons/shareblack.png";
import { Tooltip } from "antd";
import Modal from "react-bootstrap/Modal";

import { Link } from "react-router-dom";

const JobBody = ({ singleData, goBack }) => {
  console.log(singleData);

  const jobRoles = singleData?.job_types?.map((j) => j.name);
  const serviceCat = singleData?.job_service_categories?.map(
    (j) => j?.job_role_type
  );

  const roleColors = {
    general: "#FFC107",
    "open-call": "#EB2B93",
    "closed-call": "#60E2AC",
  };

  const remainingRoles =
    singleData?.job_types.length > 3 ? singleData?.job_types.length - 3 : 0;

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <div className=" mx-auto w-[90%] rounded-lg px-[0] md:px-[50px] py-[20px] md:py-[40px] my-[50px] md:my-[100px] md:mt-0">
      <button onClick={goBack} className="block md:hidden mb-[20px]">
        <ArrowLeftOutlined style={{ fontSize: "14px" }} />
      </button>
      <div className="flex gap-[20px] items-start ">
        <button onClick={goBack} className="hidden md:block">
          <ArrowLeftOutlined style={{ fontSize: "30px" }} />
        </button>
      </div>
      <div className="block md:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-[30px] pt-0 md:mt-[50px]">
        <div className="col-span-2 flex flex-col gap-[30px]">
          <div className="bg-[#fff] min-h-[400px] rounded-[31px] py-[20px] px-[30px]">
            <div className="flex items-center justify-between pb-[15px] border-b">
              <div className="flex gap-[10px] items-center ">
                <img
                  src={jobs}
                  alt="jobs"
                  className="h-[16px] w-auto object-cover object-center"
                />
                <div className="text-[#4FD6FA] text-[18px]">Project</div>
              </div>
              <div>
                <Tooltip placement="left" title={"share"}>
                  <button className="flex items-center justify-center">
                    <img
                      src={share}
                      alt="share"
                      className="h-[15px] md:h-[18px] w-auto object-center object-cover"
                    />
                  </button>{" "}
                </Tooltip>
              </div>
            </div>
            <div className="text-[#3A3A3A] text-[16px] uppercase leading-[20px] font-bold pt-[20px]">
              {singleData?.headline}
            </div>
            <div className="flex items-center gap-1 w-full overflow-x-auto py-2 whitespace-nowrap">
              {serviceCat?.map((role, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-[22px] text-white text-[12px] w-fit whitespace-nowrap"
                  style={{ backgroundColor: roleColors[role] }}
                >
                  {role === "general"
                    ? "General Hire"
                    : role === "open-call"
                    ? "Open Call"
                    : "Closed Call"}
                </span>
              ))}

              {serviceCat?.map(
                (role, index) =>
                  role === "closed-call" && (
                    <span key={`lock-${index}`} className="whitespace-nowrap">
                      <LockFilled style={{ color: "#000" }} />
                    </span>
                  )
              )}

              {singleData?.job_service_categories[0]?.job_role_type ===
                "general" && (
                <div className="text-[10px] bg-[#000] py-[5px] px-[10px] text-white w-fit rounded-[84px] whitespace-nowrap">
                  {singleData?.job_service_categories[0]?.name}
                </div>
              )}
            </div>

            <div className="text-[15px] font-bold text-[#696969]">
              <span className="text-[12px] font-normal">Expires:</span>
              <br />
              {singleData?.delivery_timeline}
            </div>
            <div className="text-[13px] text-[#161616] font-normal font-[Inter] pt-[10px]">
              {singleData?.description}
            </div>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-1">
                {jobRoles?.slice(0, 3).map((role, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-[22px] text-white text-[12px]"
                    style={{ backgroundColor: roleColors[role] || "#ccc" }}
                  >
                    {role}
                  </span>
                ))}
              </div>
              <div>
                {remainingRoles > 0 && (
                  <span className="text-sm text-[#3A3A3A]">
                    {remainingRoles} roles
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="bg-[#fff] min-h-[300px] rounded-[31px] py-[20px] px-[30px] ">
            <div className="flex gap-[10px] items-center pb-[15px] border-b">
              <img
                src={i}
                alt="jobs"
                className="h-[16px] w-auto object-cover object-center"
              />
              <div className="text-[#4FD6FA] text-[18px]">Resources</div>
            </div>
            <div
              onClick={handleShow}
              className="py-[15px] flex items-center justify-between border-b cursor-pointer"
            >
              <div className="flex items-center gap-[10px]">
                <div>
                  <img
                    src={links}
                    alt="jobs"
                    className="h-[30px] w-auto object-cover object-center"
                  />
                </div>
                <div className="text-[13px] font-[Inter] text-[#545454] font-semibold">
                  Links
                </div>
              </div>

              <div className="font-medium text-[#31AAEA] text-[12px]">
                {singleData?.additional_materials?.length}{" "}
                {singleData?.additional_materials?.length > 1
                  ? "links"
                  : "link"}
              </div>
            </div>
            <div className="py-[15px] flex items-center justify-between">
              <div>
                <div className="flex items-center gap-[10px]">
                  <div>
                    <img
                      src={notes}
                      alt="jobs"
                      className="h-[30px] w-auto object-cover object-center"
                    />
                  </div>
                  <div className="text-[13px] font-[Inter] text-[#545454] font-semibold">
                    Essential Notes
                  </div>
                </div>
                <div className="flex flex-col gap-[10px] pt-[10px] pl-[40px]">
                  {singleData?.resources?.map((r, i) => (
                    <div key={i} className="flex gap-[10px] items-center">
                      <div>
                        <img
                          src={checkk}
                          alt="resuss"
                          className="h-[20px] w-auto object-cover"
                        />
                      </div>
                      <div className="font-[Inter] text-[12px] md:text-[12px] text-[#161616] font-normal">
                        {r.link}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div></div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="text-[#696969] text-[12px] font-normal pb-[5px]">
              Posted by:
            </div>
            <Link
              to={`/user/${singleData?.client?.first_name}${singleData?.client?.last_name}`}
              state={{ id: singleData?.client?.id }}
              className="result-card"
            >
              <div
                className="avatar"
                style={{
                  backgroundImage: `url(${singleData?.client?.profile_photo_url})`,
                }}
              ></div>
              <div>
                <div className="font-medium text-gray-800 flex items-center gap-[10px]">
                  {singleData?.client?.first_name}{" "}
                  {singleData?.client?.last_name}
                  <span>
                    {singleData?.client?.level === "verified" && (
                      <div className="">
                        <img
                          src={verified}
                          alt="bookmark"
                          className="h-[20px] w-auto object-center object-cover"
                        />
                      </div>
                    )}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-span-3 flex flex-col gap-[30px] mt-[30px] md:mt-0">
          {singleData?.job_service_categories?.map((j, i) => (
            <div
              key={i}
              className="bg-[#fff] min-h-[250px] rounded-[31px] py-[20px] px-[30px]"
            >
              <div className="text-[#330066] text-[14px] font-medium pb-[15px]">
                {j.name}
              </div>
              <div className="flex gap-[20px] pb-[20px] border-b border-[#F8F1FF] text-[#330066] text-[10px] font-normal">
                <div>{j.gender}</div>
                <div>{j.age}</div>
              </div>
              <div className="text-[#161616] text-[13px] font-normal py-[20px]">
                {j.description || j.invitation_note} 
              </div>
              <div className="text-[#330066] font-bold text-[13px] pb-[20px]">
                ₦{Number(j.price).toLocaleString()}
              </div>
              <div className="flex gap-[20px] items-center font-[Roboto]">
                <button className="bg-[#6633FF] rounded-[36px] text-[12px] text-white px-[15px] py-[8px]">
                  Apply
                </button>
                <button className="bg-[#fff] border border-[#6633FF] rounded-[36px] text-[12px] text-[#6633FF] px-[15px] py-[8px]">
                  Save
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="block md:hidden pt-[20px]">
            <div className="text-[#696969] text-[12px] font-normal pb-[5px]">
              Posted by:
            </div>
            <Link
              to={`/user/${singleData?.client?.first_name}${singleData?.client?.last_name}`}
              state={{ id: singleData?.client?.id }}
              className="result-card"
            >
              <div
                className="avatar"
                style={{
                  backgroundImage: `url(${singleData?.client?.profile_photo_url})`,
                }}
              ></div>
              <div>
                <div className="font-medium text-gray-800 flex items-center gap-[10px]">
                  {singleData?.client?.first_name}{" "}
                  {singleData?.client?.last_name}
                  <span>
                    {singleData?.client?.level === "verified" && (
                      <div className="">
                        <img
                          src={verified}
                          alt="bookmark"
                          className="h-[20px] w-auto object-center object-cover"
                        />
                      </div>
                    )}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        <div className="md:flex md:justify-end hidden">
          <div>
            <img
              src={adjobpage}
              alt="jobpagead"
              className="w-[200px] h-auto object-center object-cover"
            />
          </div>
        </div>{" "}
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        dialogClassName="custom-modal-size"
      >
        <Modal.Header>
          <div className="flex items-center gap-[10px]">
            <div>
              <img
                src={links}
                alt="jobs"
                className="h-[30px] w-auto object-cover object-center"
              />
            </div>
            <div className="text-[13px] font-[Inter] text-[#545454] font-semibold">
              Links
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="p-3 md:p-[30px] flex flex-col">
          <div className="text-[12px] text-[#000] font-bold">Links</div>
          {singleData?.additional_materials?.map((a, i) => {
            const validLink =
              a?.link?.startsWith("http://") || a?.link?.startsWith("https://")
                ? a?.link
                : `https://${a.link}`;

            return (
              <a
                key={i}
                className="text-[#9900FF] text-[14px] font-medium pb-[5px] border-b block"
                href={validLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {a.link}
              </a>
            );
          })}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default JobBody;
