import React from "react";
import { motion } from "framer-motion";
import story from "../../assets/testimgs/story.png";

const Whoweare = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <div className="w-[95%] lg:w-[80%] mx-auto">
      <div className="block md:flex items-center py-[30px] md:py-[70px]">
        <div className="font-[Inter] text-[25px] lg:text-[32px] pt-[10px] md:pt-[0] w-[95%] md:w-[55%] mx-auto text-[#461378] font-semibold">
          Who we are
        </div>
        <div className="font-[Roboto] text-[14px] lg:text-[16px] w-[95%] mx-auto text-[#545454] font-normal">
          Resuss is a pioneering platform fostering a dynamic ecosystem for
          African creators in media and performing arts. Our mission is to
          empower, connect, and innovate. We offer seamless access, creating a
          transformative space for artists, skilled professionals,
          collaborators, and enthusiasts to shape the future of media and
          performing arts in Africa.
        </div>
      </div>
      <div className="w-[90%] mx-auto font-[Inter] bg-[#6633FF] text-white py-[50px] px-[20px] md:px-[100px] text-center rounded-[25px] text-[25px] font-semibold leading-[30px] mb-[70px]">
        We’re building Resuss to be the creative industry’s most valuable
        tool—connecting visionaries, talent, and opportunity.
      </div>
      <div className="flex gap-[50px]">
        {/* Desktop + Tablet Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden md:block"
        >
          <img
            src={story}
            alt="hero"
            className="w-auto h-[300px] lg:h-[300px] object-center object-cover"
          />
        </motion.div>
        <div className="font-[Roboto] text-[14px] w-[90%] md:w-[50%] mx-auto lg:text-[16px] mx-auto text-[#545454] font-normal pb-[60px]">
          <div className="flex flex-col gap-[20px] md:gap-[30px]">
            <div className="font-[Inter] text-[25px] lg:text-[32px] text-[#461378] font-semibold">
              Our story
            </div>
            {/* mobile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="overflow-x-hidden block md:hidden relative"
            >
              <img
                src={story}
                alt="story"
                className="w-auto h-[250px] sm:h-[250px] object-center object-cover"
              />
            </motion.div>
            <div>
              Nearly a decade ago, shortly after founding Suss Productions,
              Abiola Sobo shared an idea with Folashayo Oke—a concept called
              Nollypro, which he had originally developed a few years earlier
              but had struggled to bring to life. After several attempts at
              building partnerships and launching the platform, the idea was
              shelved. Years later, in a casual conversation during a hangout,
              the spark returned. By then, we had spent over a decade building a
              business in the creative industry and had developed a deep
              understanding of the challenges creatives face, especially in
              connecting, collaborating, and growing.
            </div>{" "}
            <div>This time, we decided to go all in.</div>{" "}
            <div>
              {" "}
              We brought on Eniola Sobo, a tech innovator, to help us shape the
              idea into something tangible. That idea became Resuss—a platform
              designed to connect creatives, bring opportunities closer, and
              help creators find the right talent and crew to bring their
              visions to life.
            </div>{" "}
            <div>
              As our vision expanded, so did our team. We welcomed Ronke Alice,
              who brought with her a wealth of experience from leading
              successful tech brands. With her expertise, we’re building Resuss
              into what we believe will be an essential tool for the creative
              industry in Africa.
            </div>{" "}
            <div>
              {" "}
              Our journey is only beginning, but our mission is clear: to create
              a platform that supports, celebrates, and strengthens the creative
              ecosystem—one connection at a time.
            </div>
          </div>
          <div>
            <div className="font-[Inter] text-[18px] lg:text-[20px] text-[#4FD6FA] pt-[50px]">
              Our approach
            </div>
            <div className="font-[Inter] text-[25px] lg:text-[32px] text-[#461378] font-semibold pb-[10px] md:pb-[30px]">
              Innovate. Connect. Empower.
            </div>
            <div>
              Our approach centers on creating convenient access and offering
              intelligent solutions, thereby reshaping the media and performing
              arts scene. We believe in using innovative ideas to solve
              problems, building connections, and celebrating diversity for an
              enriching experience for every artist on Resuss.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whoweare;
