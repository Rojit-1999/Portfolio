"use client";
import React, { ReactNode } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

interface props{
  completed: string;
}

const Progress = ({completed}:props) => {
  return (
    <div>
      <ProgressBar
        completed={completed}
        className="wrapper w-[300px] sm:w-[95vh] rounded-[25px]"
        barContainerClassName="container inner-shadow"
        labelClassName="label"
        animateOnRender={true}
        bgColor="#FB024F"
        height="10px"
        baseBgColor="#000000"
      />
    </div>
  );
};

export default Progress;
