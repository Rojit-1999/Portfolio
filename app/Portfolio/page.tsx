"use client";
import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";
import { portfolioData } from "../Component/Data";

interface props{
  [key:number]: number
}

const Portfolio = () => {
  const [count, setCount] = useState<props>({
    0: 2,
    1: 22,
    2: 44,
    3: 99,
    4: 4,
    5: 5,
  });

  function onClickHandeller(key: number) {
    setCount({
      ...count,
      [key]: count[key] + 1,
    });
  }

  const openModal = () => {
    const modal = document.getElementById("my_modal_4") as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div className="py-[3rem] border-b-[1px] border-black">
      <div className="text-center">
        <p className=" text-[14px] uppercase text-secondary">
          Visit my portfolio and keep your feedback
        </p>
        <h1 className="font-[600] text-[34px]  tracking-wider mt-[10px]">
          My Portfolio
        </h1>
      </div>
      <div
        className="mt-[1.5rem] flex flex-col items-center justify-center gap-[1.5rem]
      sm:grid sm:grid-cols-2 md:grid md:grid-cols-3"
      >
        {portfolioData.map((projects, index) => (
          <div
            className="p-3 rounded-[8px] bg-primary shadow-md border border-white/5 shadow-white/5 flex items-center 
          justify-center hover:shadow-none hover:bg-[#16191c] hover:text-white hover:cursor-pointer group"
          >
            <div>
              <div className=" text-secondary overflow-hidden">
                {projects.img}
              </div>

              <div className="flex items-center justify-between mt-[10px]">
                <div className="text-secondary">{projects.SubHeading}</div>
                <div>
                  <div
                    className="flex gap-[6px] items-center justify-center"
                    onClick={() => {
                      onClickHandeller(index);
                    }}
                  >
                    <IoMdHeartEmpty className="hover:text-red-600" />
                    {count[index]}
                  </div>
                </div>
              </div>

              <h1 className="font-[500] text-[26px] mt-[14px] flex items-center gap-[10px]" onClick={openModal}>
                {projects.Heading}
                <FaLocationArrow className="text-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:text-secondary" />
              </h1>

              <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">Click the button below to close</p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>


            </div>
          </div>
        ))}
      </div>
      <button
        className="px-[2rem] py-[1rem] border border-white/5 mt-[50px] m-auto rounded-full text-text bg-primary shadow-md shadow-white/5 flex items-center 
            justify-center hover:shadow-none hover:bg-secondary hover:text-white hover:cursor-pointer "
      >
        View More
      </button>
    </div>
  );
};

export default Portfolio;