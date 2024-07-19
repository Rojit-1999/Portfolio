"use client";
import React, { useEffect } from "react";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { fomrData } from "../Component/Data";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

const ContactPage = () => {
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
    <div className="py-[3rem] border-b-[1px] border-black">
      <div className="text-center " ref={ref}>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-secondary">CONTACT US</p>
          <h1 className="font-[600] text-[34px]  tracking-wider mt-[10px]">
            Contact With Me
          </h1>
        </motion.div>
      </div>
      <div className="mt-[40px]  md:flex md:gap-[50px] ">
        <div className="" ref={ref}>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -110 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="mt-[20px] pt-[2rem] p-6 rounded-[10px] bg-[#16191c] shadow-md border border-white/5 shadow-white/5">
            <div>
              <picture><img src="images/contact.png" className="h-[196px] grayscale hover:grayscale-0" alt="" /></picture>
            </div> 
              <div className="text-text flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[6px]">
                  <h1 className="font-[600] text-[30px] text-secondary">
                    Rojit Dhakal
                  </h1>
                  <p>
                    Front-End Developer <br />
                    Senior UI/UX Designer
                  </p>
                </div>
                <p>
                  I am available for freelance work. Connect with me via and
                  call in to my account.
                </p>
                <div className="flex flex-col gap-[6px]">
                  <h1>
                    Phone:
                    <a href="tel:+977-9840040828">
                      <span className="text-white hover:text-secondary hover:underline hover:cursor-pointer">
                        +977-9840040828
                      </span>
                    </a>
                  </h1>
                  <h1>
                    Email:
                    <a href="mailto:rojitdhakal40@gmail.com">
                      <span className="text-white hover:text-secondary hover:underline hover:cursor-pointer">
                        rojitdhakal40@gmail.com
                      </span>
                    </a>
                  </h1>
                </div>

                <div>
                  <h1 className="font-[500] text-[#c4cfde] mt-[20px] text-[16px]">
                    FIND ME WITH
                  </h1>
                  <div className=" flex gap-[25px] mt-[20px]">
                    <Link href="https://www.facebook.com/profile.php?id=100009293393739">
                      <div
                        className="p-5 rounded-[8px] bg-primary shadow-md shadow-white/5 flex items-center 
                        justify-center hover:shadow-black/20 hover:bg-secondary hover:text-white hover:cursor-pointer"
                      >
                        <FiFacebook className="text-text text-[20px]" />
                      </div>
                    </Link>
                    <Link href="https://www.instagram.com/rojitdhakal/">
                      <div
                        className="p-5 rounded-[8px] bg-primary shadow-md shadow-white/5 flex items-center 
                        justify-center hover:shadow-black/20 hover:bg-secondary hover:text-white hover:cursor-pointer"
                      >
                        <FiInstagram className="text-text text-[20px]" />
                      </div>
                    </Link>
                    <Link href="https://www.linkedin.com/in/rojit-dhakal-4766961b9/">
                      <div
                        className="p-5 rounded-[8px] bg-primary shadow-md shadow-white/5 flex items-center 
                          justify-center hover:shadow-black/20 hover:bg-secondary hover:text-white hover:cursor-pointer"
                      >
                        <FiLinkedin className="text-text text-[20px]" />
                      </div>
                    </Link>{" "}
                    <Link href="https://github.com/Rojit-1999/">
                      <div
                        className="p-5 rounded-[8px] bg-primary shadow-md shadow-white/5 flex items-center 
                        justify-center hover:shadow-[2e3033]/20 hover:bg-secondary hover:text-white hover:cursor-pointer"
                      >
                        <FaGithub className="text-text text-[20px]" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="w-screen" ref={ref}>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: 110 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className=" mt-[20px] pt-[2rem] p-6 rounded-[10px] bg-[#16191c] shadow-md border border-white/5 shadow-white/5 w-full">
              <form action="" method="post">
                {fomrData.map((data, index) => (
                  <div key={index}>
                    <div className="flex flex-col gap-[8px]">
                      <label htmlFor="" className="mt-[16px] text-text">
                        {data.lable}
                      </label>
                      {data.input}
                    </div>
                  </div>
                ))}

                <button
                  type="submit"
                  className="bg-primary text-white w-full mt-[40px] py-[14px] rounded-[12px] hover:bg-secondary hover:shadow-md
                  hover:shadow-white/5 flex items-center justify-center gap-[8px] "
                >
                  Send Message
                  <span className="arrow-icon opacity-0 transition-opacity">
                    <FaArrowRight />
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
