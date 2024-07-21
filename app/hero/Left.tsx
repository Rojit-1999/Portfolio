"use client";
import React from "react";
import Typewriter from "typewriter-effect";
// import { findMewith } from "../Component/Data";
import { FiFacebook, FiInstagram, FiFigma, FiLinkedin } from "react-icons/fi";
import { DiPhotoshop } from "react-icons/di";
import { FaReact, FaGithub } from "react-icons/fa";
import Link from "next/link";

const Left = () => {
  return (
    <div className="flex flex-col gap-[10px] mt-[1.5rem] md:w-[44%]">
      <p className="uppercase text-[0.8rem] tracking-widest text-[#8d939e] font-[500]">
        welcome to my website
      </p>
      <h1 className="text-[2rem] font-[600] tracking-wider">
        Hi, I&apos;m <span className="text-[#FB024F]">Rojit Dhakal</span>
      </h1>
      <div>
        <span className="flex items-center gap-[10px] text-[2rem] font-[600] tracking-wider">
          <p>a</p>
          <Typewriter
            options={{
              strings: [
                "Front-End Developer",
                "UI/UX Designer",
                "Product Designer",
                "Graphic Designer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </div>
      <div>
        <p className="text-text">
          I really enjoy using animation to make things smoother and more
          enjoyable. It's great because it provides clear guidance and adds
          extra functionality in a really meaningful way.
        </p>
      </div>
      <div>
        <div>
          <h1 className="font-[500] text-[#c4cfde] mt-[20px] text-[16px]">
            FIND ME WITH
          </h1>
          <div className=" flex gap-[25px] mt-[20px]">
            <Link href="https://www.facebook.com/profile.php?id=100009293393739">
              <div
                className="p-5 rounded-[8px] bg-primary shadow-md shadow-white/5 flex items-center 
            justify-center hover:shadow-black/20 hover:bg-[#16191c] hover:text-white hover:cursor-pointer"
              >
                <FiFacebook className="text-text text-[20px]" />
              </div>
            </Link>
            <Link href="https://www.instagram.com/rojitdhakal/">
              <div
                className="p-5 rounded-[8px] bg-primary shadow-md shadow-white/5 flex items-center 
            justify-center hover:shadow-black/20 hover:bg-[#16191c] hover:text-white hover:cursor-pointer"
              >
                <FiInstagram className="text-text text-[20px]" />
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/rojit-dhakal-4766961b9/">
              <div
                className="p-5 rounded-[8px] bg-primary shadow-md shadow-white/5 flex items-center 
            justify-center hover:shadow-black/20 hover:bg-[#16191c] hover:text-white hover:cursor-pointer"
              >
                <FiLinkedin className="text-text text-[20px]" />
              </div>
            </Link>{" "}
            <Link href="https://github.com/Rojit-1999/">
              <div
                className="p-5 rounded-[8px] bg-primary shadow-md shadow-white/5 flex items-center 
            justify-center hover:shadow-black/20 hover:bg-[#16191c] hover:text-white hover:cursor-pointer"
              >
                <FaGithub className="text-text text-[20px]" />
              </div>
            </Link>
          </div>
        </div>

        <div>
          <h1 className="font-[500] mt-[3rem]  text-[#c4cfde] text-[16px]">
            Best Skill On
          </h1>
          <div className=" flex gap-[25px] mt-[20px]">
            <Link href="https://github.com/Rojit-1999/">
              <div
                className="p-5 rounded-[8px] text-text bg-primary shadow-md shadow-white/5 flex items-center 
            justify-center hover:shadow-secondary/20 hover:bg-secondary hover:text-white hover:cursor-pointer"
              >
                <FaReact className="text-[20px]" />
              </div>
            </Link>
            <Link href="https://www.behance.net/rojitdhakal?isa0=1">
              <div
                className="p-5 rounded-[8px] text-text bg-primary shadow-md shadow-white/5 flex items-center 
            justify-center hover:shadow-secondary/20 hover:bg-secondary hover:text-white hover:cursor-pointer"
              >
                <FiFigma className=" text-[20px]" />
              </div>
            </Link>
            <Link href="https://www.behance.net/rojitdhakal1">
              <div
                className="p-5 rounded-[8px] text-text bg-primary shadow-md shadow-white/5 flex items-center 
            justify-center hover:shadow-secondary/20 hover:bg-secondary hover:text-white hover:cursor-pointer"
              >
                <DiPhotoshop className=" text-[20px]" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Left;
