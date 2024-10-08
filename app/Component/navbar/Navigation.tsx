"use client";
import React, { useState, useEffect } from "react";
import { LuMenu } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";
import { navItems } from "../Data";
import Spline from "@splinetool/react-spline";
import Link from "next/link";

interface props {
  link: string;
}

const NavBar = () => {
  const [change, setChange] = useState(false);

  function clickHandller() {
    setChange(!change);
  }

  useEffect(() => {
    if (change) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [change]);

  return (
    <div>
      <div
        className="hidden sm:flex gap-[40px] justify-center items-center bg-[#2d2d2d]/5 h-[60px] w-screen nav
        "
      >
        {navItems.map((item, index) => (
          <Link href={item.link ?? "#"} key={index}>
            <div className="hover:cursor-pointer hover:text-secondary">
              {item.text}
            </div>
          </Link>
        ))}
      </div>

      <div>
        <div className="flex justify-end">
          <LuMenu
            className="text-[1.2rem] text-[#c0c3c7] mt-[20px] sm:hidden block hover:cursor-pointer"
            onClick={clickHandller}
          />
        </div>

        {change && (
          <div>
            <div className="bg-[#1F2024]/50 w-screen  just' h-screen fixed backdrop-blur z-20 top-0 px-[2rem] left-0">
              <div>
                <IoCloseOutline
                  className="text-[24px] float-right mt-[20px] hover:cursor-pointer"
                  onClick={clickHandller}
                />

                <div className="flex flex-col h-screen w-screen items-start  justify-center gap-[1.3rem] font-[500] text-white ">
                  {navItems.map((navData, index) => (
                    <Link href={navData.link || "#"} key={index}>
                      <div className="flex  items-center gap-[10px]">
                        <div className=" hover:animate-spin transition-none text-secondary">
                          {navData.icon}
                        </div>
                        <div className="text-text">{navData.text}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute top-0 h-screen z-10">
              <Spline scene="https://prod.spline.design/0oFBvhIkl83dZXBI/scene.splinecode" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
