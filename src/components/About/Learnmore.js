import React from "react";
import l1 from "../../assets/testimgs/l1.png";
import l2 from "../../assets/testimgs/l2.png";
import l3 from "../../assets/testimgs/l3.png";
import { motion } from "framer-motion";


const Learnmore = () => {
  const learnmore = [
    {
      img: l1,
      title: "Warner Bros Lands a picture deal with Resuss tool",
      info: "Championing unity and recognizing the strength it brings to a diverse community.",
    },
    {
      img: l2,
      title: "It’s looking up",
      info: "Google among investors putting $110 million into Nigeria's Resuss.",
    },
    {
      img: l3,
      title: "What’s new in Resuss",
      info: "New features for Resuss Users: AI growth assistant, enhanced SMS, e-commerce integrations, and more.",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="font-[Inter] text-[25px] lg:text-[32px] mx-auto text-[#461378] font-semibold pt-[50px] pl-[30px] md:pl-[140px]"
      >
        Learn more about Resuss
      </motion.div>

      <div className="block md:grid md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] md:w-[80%] mx-auto pb-[60px]">
        {learnmore.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between pt-[20px]"
          >
            <div className="flex justify-start mb-2">
              <img
                src={item.img}
                alt={`about-img-${index}`}
                className="h-[200px] w-auto object-contain object-center"
              />
            </div>

            <div className="flex flex-col gap-2 flex-grow text-[#461378]">
              <div className="font-[Inter] font-semibold text-[23px] lg:text-[25px] leading-[25px] pt-[10px]">{item.title}</div>
              <p className="font-[Roboto] font-normal text-[#545454] text-sm sm:text-base ">
                {item.info}
              </p>
            </div>


          </div>
        ))}
      </div>
    </div>
  );
};

export default Learnmore;
