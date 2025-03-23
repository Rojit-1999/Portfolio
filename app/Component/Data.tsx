import { RiSettingsFill } from "react-icons/ri";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import SquareContainer from "../Component/SquareContainer";
import Progress from "./ProgressBar";
import { Button } from "@headlessui/react";

export const findMewith = [
  {
    icon: <FiFacebook />,
  },
  {
    icon: <FiInstagram />,
  },
  {
    icon: <FiLinkedin />,
  },
];

export const navItems = [
  {
    icon: <RiSettingsFill />,
    text: "Home",
    link: "/",
  },
  {
    icon: <RiSettingsFill />,
    text: "About",
    link: "#services",
  },
  // {
  //   icon: <RiSettingsFill />,
  //   text: "Features",
  // },
  {
    icon: <RiSettingsFill />,
    text: "Skills",
    link: "#resume",
  },
  {
    icon: <RiSettingsFill />,
    text: "Portfolio",
    link: "#Portfolio",
  },
  {
    icon: <RiSettingsFill />,
    text: "Resume",
  },
  {
    icon: <RiSettingsFill />,
    link: "#contact",
    text: "Contact",
  },
  {
    icon: <RiSettingsFill />,
    link: "/login",
    text: "Login",
  },
];

export const portfolioData = [
  {
    img: (
      <picture>
        <img
          src="/images/Betting Mockup.jpg"
          alt=""
          className="rounded-[12px] block transition-transform duration-400 ease-in hover:scale-110 max-h-[14rem] w-screen object-cover"
        />
      </picture>
    ),
    SubHeading: "Mobile Application Design",
    Heading: "Mobile App UI Design",
  },
  {
    img: (
      <picture>
        {" "}
        <img
          src="/images/Company website.jpg"
          alt=""
          className="rounded-[12px] block transition-transform duration-400 ease-in hover:scale-110 max-h-[14rem] w-screen object-cover"
        />
      </picture>
    ),
    SubHeading: "Website Development",
    Heading: "Website For IT Company",
  },
  {
    img: (
      <picture>
        {" "}
        <img
          src="/images/Dahboard.png"
          alt=""
          className="rounded-[12px] block transition-transform duration-400 ease-in hover:scale-110 max-h-[14rem] w-screen object-cover"
        />
      </picture>
    ),
    SubHeading: "Dashboard",
    Heading: "Dashboard Design",
  },
  {
    img: (
      <picture>
        {" "}
        <img
          src="/images/Ecom website.png"
          alt=""
          className="rounded-[12px] block transition-transform duration-400 ease-in hover:scale-110 max-h-[14rem] w-screen object-cover"
        />
      </picture>
    ),
    SubHeading: "E-commerce",
    Heading: "E-Commerce Website",
  },
  {
    img: (
      <picture>
        <img
          src="/images/Techmind Mockups.jpg"
          alt=""
          className="rounded-[12px] block transition-transform duration-400 ease-in hover:scale-110 max-h-[14rem] w-screen object-cover"
        />
      </picture>
    ),
    SubHeading: "Website Development",
    Heading: "Website For ISP",
  },
  {
    img: (
      <picture>
        {" "}
        <img
          src="/images/Logo Mockup.jpg"
          alt=""
          className="rounded-[12px] block transition-transform duration-400 ease-in hover:scale-110 max-h-[14rem] w-screen object-cover "
        />
      </picture>
    ),
    SubHeading: "Logo Design",
    Heading: "Logo For Beauty Salon",
  },
];

export const categories = [
  {
    name: "My Education",
    posts: [
      {
        id: 1,
        title:
          "Bachelor of Science in Computer Science and Information Technology (BSc. CSIT)",
        date: "Chitwan College of Technology",
        commentCount: "Jun, 2018 - Aug, 2023",
      },
      {
        id: 2,
        title: "+2",
        date: "Aroma College",
        commentCount: "Feb, 2016 - Jan, 2018",
      },
    ],
  },
  {
    name: "My Experience",
    posts: [
      {
        id: 1,
        title: "UI/UX Designer",
        date: "Devsign Technologies",
        commentCount: "Apr, 2021 - Dec, 2023",
      },
      {
        id: 2,
        title: "Graphic Designer",
        date: "Devsign Technologies",
        commentCount: "Apr, 2021 - Dec, 2023",
      },
      {
        id: 2,
        title: "Front-End Developer",
        date: "Intelzy",
        commentCount: "Jan, 2024 - Jul, 2024",
      },
    ],
  },
  {
    name: "Skills",
    posts: [
      {
        id: 1,
        title: "React",
        date: <Progress completed="60" />,
        commentCount: "",
      },
      {
        id: 2,
        title: "Tailwind Css",
        date: <Progress completed="70" />,
        commentCount: "",
      },
      {
        id: 3,
        title: "UI/UX Design",
        date: <Progress completed="90" />,
        commentCount: "",
      },
      {
        id: 4,
        title: "Graphic Design",
        date: <Progress completed="60" />,
        commentCount: "",
      },
      {
        id: 5,
        title: "Wordpress",
        date: <Progress completed="40" />,
        commentCount: "",
      },
    ],
  },
];

export const fomrData = [
  {
    lable: "Your Name",
    input: (
      <input
        type="text"
        className="input inner-shadow rounded-[8px] h-[50px] w-full bg-primary focus:outline-none  focus:outline-secondary px-[1rem]"
      />
    ),
  },
  {
    lable: "Phone Number",
    input: (
      <input
        type="text"
        className="input inner-shadow rounded-[8px] h-[50px] w-full bg-primary focus:outline-none  focus:outline-secondary px-[1rem]"
      />
    ),
  },
  {
    lable: "Email",
    input: (
      <input
        type="text"
        className="input inner-shadow rounded-[8px] h-[50px] w-full bg-primary focus:outline-none  focus:outline-secondary px-[1rem]"
      />
    ),
  },
  {
    lable: "Message",
    input: (
      <textarea
        name=""
        id=""
        className="h-[150px] input inner-shadow rounded-[8px]  w-full bg-primary focus:outline-none  focus:outline-secondary px-[1rem]"
      ></textarea>
    ),
  },
];
