import React from "react";
import SquareContainer from "../Component/SquareContainer";
import { AiFillWeiboCircle } from "react-icons/ai";
import { MdMobileFriendly, MdOutlineDesignServices } from "react-icons/md";

const Features = () => {
  return (
    <div className="py-[3rem] border-b-[1px] border-black">
      <div>
        <div className="text-center">
          <h1 className="text-secondary">FEATURES</h1>
          <h1 className="font-[600] text-[34px]  tracking-wider mt-[10px]">
            What I Do
          </h1>
        </div>
        <div className="flex flex-col gap-[20px] mt-[30px] sm:flex md:grid md:grid-cols-3">
          <SquareContainer
            icon={<AiFillWeiboCircle />}
            heading="Web Developement"
            paragraph="I have more then three years of experienc in the fied of web development and I have created a visually appeling websites and designs for many clients and completed in the given deadlines."
          />
              <SquareContainer
            icon={<MdMobileFriendly />}
            heading="App Developement"
            paragraph="I have more then three years of experienc in the fied of web development and I have created a visually appeling websites and designs for many clients and completed in the given deadlines."
          />
              <SquareContainer
            icon={<MdOutlineDesignServices />}
            heading="UI/UX Design"
            paragraph="I have more then three years of experienc in the fied of web development and I have created a visually appeling websites and designs for many clients and completed in the given deadlines."
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
