"use client";
import React, { useEffect } from "react";
import SquareContainer from "../Component/SquareContainer";
import { AiFillWeiboCircle } from "react-icons/ai";
import { MdMobileFriendly, MdOutlineDesignServices } from "react-icons/md";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Features = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Set to false to re-trigger the animation
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="py-[4rem] border-b-[1px] border-black" id="services">
      <div>
        <div className="text-center" ref={ref}>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h1 className="text-secondary">FEATURES</h1>
            <h1 className="font-[600] text-[34px] tracking-wider mt-[10px]">
              What I Do
            </h1>
          </motion.div>
        </div>

        <div ref={ref}>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="flex flex-col gap-[20px] mt-[30px] sm:flex md:grid md:grid-cols-3">
              <SquareContainer
                icon={<AiFillWeiboCircle />}
                heading="Web Developement"
                paragraph="I have more than three years of experience in the fied of web development and web design  I have created a visually appeling websites and designs for many clients and completed in the given deadlines which you can see further."
              />
              <SquareContainer
                icon={<MdMobileFriendly />}
                heading="App Developement"
                paragraph="I showcase innovative, user-friendly applications designed and developed using modern technologies. Explore my projects to see how I bring ideas to life through clean code, responsive design, and robust architecture."
              />
              <SquareContainer
                icon={<MdOutlineDesignServices />}
                heading="UI/UX Design"
                paragraph="Explore my work where I blend creativity and functionality to craft intuitive, visually appealing interfaces. Each project highlights my commitment to enhancing user experiences through thoughtful design and user-centered solutions."
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Features;
