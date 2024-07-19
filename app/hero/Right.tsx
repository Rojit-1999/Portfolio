import React from "react";

const Right = () => {
  return (
    <div className="flex items-center justify-center">
      {/* <div className=" h-[15rem] w-[20rem]  sm:h-[29rem] sm:w-[30rem] bg-[#1F2024] relative shadow flex items-center justify-center rounded-[50px]">
      <img src="/images/mainImage.png" className=" absolute  top-0 w-[180px]" alt="" />
      </div> */}

      <div className=" bg-[#1F2024] w-fit  rounded-full p-[14px] m-auto">
        <picture>
        <img
          src="/images/mainImage.png"
          alt=""
          className=" object-cover border-[10px] rounded-full border-[#242528] w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] grayscale "
        />
        </picture>
      </div>
    </div>
  );
};

export default Right;
