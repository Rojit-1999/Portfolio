"use client";
import React, { useEffect } from "react";
import {preLoaderAnim} from "./animations"
import Image from "next/image";
// import { motion } from "framer-motion";
const LoadingPage = () => {

    useEffect(()=>{
      preLoaderAnim()
    },[])

  return (
    // <div className="h-[100%] w-[100%] bg-primary ">
    //   <div className="flex justify-center items-center mt-[20%]">
    //     <motion.div
    //       initial="hidden"
    //       animate="visible"
    //       variants={{
    //         hidden: { opacity: 0, x: -200 },
    //         visible: { opacity: 1, x: 0 },
    //       }}
    //       transition={{ duration: 0.5, delay: 0.3 }}
    //     >
    //       <picture className="">
    //         <img src="/images/R.png" alt="" />
    //       </picture>
    //     </motion.div>

    //     <div className=" font-[800] text-[36px]">
    //       <motion.div
    //         initial="hidden"
    //         animate="visible"
    //         variants={{
    //           hidden: { opacity: 0, x: 300 },
    //           visible: { opacity: 1, x: 0 },
    //         }}
    //         transition={{ duration: 0.5, delay: 0.3 }}
    //       >
    //         <p>ojit </p>
    //       </motion.div>
    //     </div>
    //   </div>
    // </div>

    <div className="preloader">
      <div className="texts-container">
        {/* <span><Image 
        src="/images/Mor.gif"
        alt="loading"
        height={1000}
        width={1000}
        loading="lazy"
        className="h-[20rem] w-auto"
/> </span> */}
        <span>Developer,</span>
        <span>Designer,</span>
        <span>Vibe</span>
      </div>
    </div>
  );
};

export default LoadingPage;
