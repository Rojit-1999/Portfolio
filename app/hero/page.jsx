"use client";
import React from "react";
import Left from "./Left";
import Right from "./Right";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, scale:0.3 },
  visible: { opacity: 1, scale:1},
};

const HeroSection = () => {
  return (
    <div className="py-[4rem] border-b-[1px] border-black">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.7 ,delay:0.3 }}
        className=" md:flex md:flex-row-reverse items-center justify-between"
      >
        <Right />
        <Left />
      </motion.div>
    </div>
  );
};

export default HeroSection;

// "use client";

// import { useEffect, useRef } from "react";
// import Spline from "@splinetool/react-spline/next";

// export default function Home() {
//   const splineRef = useRef(null);

//   return (
//     <main>
//       <div ref={splineRef} className="w-[100%]">
//         <Spline className="cursor-zoom-out"
//           // scene="https://prod.spline.design/Ut7kIt2iEuITj3eF/scene.splinecode"
//           scene="https://prod.spline.design/bBoqknf44EXZUTQy/scene.splinecode"
//           width={1920}
//           height={1080}
//           onMouseDown={()=>{
//             console.log("mouse scrolled down")
//           }}
//           onSplineScroll={()=>{
//             console.log("Scroll spline")
//           }}
//         />
//       </div>
//     </main>
//   );
// }
