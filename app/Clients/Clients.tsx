"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

interface CarouselProps {
  deviceType?: string;
}

const CustomCarousel: React.FC<CarouselProps> = ({ deviceType }) => {
  return (
    <div className="text-center py-[3rem]">
      <p className="text-secondary">POPULAR CLIENTS</p>
      <h1 className="font-[600] text-[34px]  tracking-wider mt-[10px]">
        {" "}
        Awesome Clients
      </h1>
      <Carousel
        // swipeable={false}
        // draggable={false}
        // showDots={true}
        responsive={responsive}
        // ssr={true} // means to render carousel on server-side.
        // infinite={true}
        // autoPlay={deviceType !== "mobile" ? true : false}
        // autoPlaySpeed={1000}
        // keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={500}
        // containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={deviceType}
        // dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"
      >
        <div className="flex items-center justify-center animate-loop-scroll pt-[1.5rem]">
          <div className="flex items-center gap-[100px] w-screenoverflow-hidden">
            <img
              src="images/intelzy_logo.png"
              alt=""
              className="grayscale w-[50%] hover:grayscale-0"
            />
            <img
              src="images/sipalaya.png"
              alt=""
              className="grayscale w-[50%] hover:grayscale-0"
            />
            <img
              src="images/enterleaf.svg"
              alt=""
              className="grayscale w-[50%] hover:grayscale-0"
            />
            <img
              src="images/Dream_crew_logo.png"
              alt=""
              className="grayscale w-[50%] hover:grayscale-0"
            />
            <img
              src="images/maximax.png"
              alt=""
              className="grayscale w-[50%] hover:grayscale-0"
            />
            <img
              src="images/Virtuoso.png"
              alt=""
              className="grayscale w-[50%] hover:grayscale-0"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
