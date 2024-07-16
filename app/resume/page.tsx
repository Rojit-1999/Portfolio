import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { categories } from "../Component/Data";

const Resume = () => {
  return (
    <div className="border-b-[1px] border-black py-[3rem]">
      <div className="text-center">
        <p className=" text-[14px] uppercase text-secondary">
          3+ Years of Experience
        </p>
        <h1 className="font-[600] text-[34px]  tracking-wider mt-[10px]">
          My Resume
        </h1>
      </div>

      <div className="flex h-screen w-full justify-center pt-24">
        <div className="w-full ">
          <TabGroup>
            <TabList className="flex gap-[40px] border border-white/5 py-[10px] rounded-[12px] bg-primary shadow-white/5  items-center justify-center shadow-lg 
            ">
              {categories.map(({ name }) => (
                <Tab
                  key={name}
                  className="w-[324px] text-text font-[400] py-2 px-4 text-sm/6 focus:outline-none 
                  data-[selected]:bg-primary data-[selected]:text-secondary data-[selected]:shadow-white/5 shadow-sm  data-[hover]:bg-white/5
                data-[hover]:text-secondary border-none  rounded-[8px] data-[focus]:outline-1 data-[focus]:outline-white"
                >
                  {name}
                </Tab>
              ))}
            </TabList>

            <TabPanels className="mt-5">
              {categories.map(({ name, posts }) => (
                <TabPanel
                  key={name}
                  className="rounded-xl bg-white/5 p-3 hover:bg-primary hover:shadow hover:shadow-white/5 "
                >
                  <ul className=" flex flex-col items-start  gap-[20px]">
                    {posts.map((post) => (
                      <li
                        key={post.id}
                        className="relative rounded-md p-3 text-sm/6 "
                      >
                        <span className="font-semibold text-white">
                          <span className="absolute inset-0" />
                          {post.title}
                        </span>
                        <ul
                          className="flex gap-[50px] sm:gap-[200px] mt-[6px] text-text"
                          aria-hidden="true"
                        >
                          <li>{post.date}</li>
                          <li> {post.commentCount}</li>
                          {/* <li aria-hidden="true">&middot;</li>
                          <li>{post.shareCount} shares</li> */}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
      </div>

      {/* <TabComponent /> */}
    </div>
  );
};

export default Resume;
