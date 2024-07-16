'use client';
import React, { ReactNode, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

interface Props {
  icon: ReactNode;
  heading: string;
  paragraph: string;
}

const SquareContainer = ({ icon, heading, paragraph }: Props) => {
  return (
    <div>
      <div 
        className="p-5 rounded-[8px] bg-primary shadow-md border border-white/5 shadow-white/5 flex items-center 
            justify-center hover:shadow-none hover:bg-[#16191c] hover:text-white hover:cursor-pointer group"
      >
        <div className="px-[1rem] flex flex-col gap-[20px]">
          <div className="text-secondary text-[36px]">{icon}</div>
          <div className="font-[600] text-[2rem]">{heading}</div>
          <div className="font-[400] text-[0.9rem] text-text">{paragraph}</div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <FiArrowRight className="text-[28px] text-secondary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquareContainer;
