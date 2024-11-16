import AppLayout from "@/utils/AppLayout";
import Image from "next/image";
import React from "react";
import laptop from "../../public/laptop.jpg";
import eco from "../../public/eco.jpg";
import cloud from "../../public/cloud.jpg";

function MySKills() {
  const recentProject = [
    {
      title: "Read My Blogs",
      
      link: "",
      description: `My blogs cover topics such as React, Java, Spring Boot, and
              Node.js, providing insights and tutorials to help you enhance your
              development skills.`,
      button_name: "Read Blogs",
      image: laptop,
    },
    {
      title: "DevLink API Hub ",
      
      link: "",
      description: `DevLink API Hub offers seamless, easy-to-integrate APIs for front-end
       developers to connect their projects to a robust backend.`,
      button_name: "join DevLink",
      image: cloud,
    },
    {
      title: "WasteWise",
      link: "",
     
      description: `WasteWise helps households efficiently manage waste by linking 
      them with nearby collectors, aiming to minimize pollution.`,
      button_name: "join WasteWise",
      image: eco,
    },
  ];
  return (
    <AppLayout>
      <div className="  text-center tracking-tight leading-[120%] text-4xl sm:text-6xl font-gradient  pb-10">
        My SKills &{" "}
        <span className="inline leading-[0] bg-gradient-to-br bg-clip-text text-transparent from-pinkShade-1a via-blueShade-1a to-greenShade-1a">
          Open Source
        </span>
      </div>
      <p>
        Get to use Free Open Sourced Api's to integrate with your front end
        Applications{" "}
      </p>
      <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3">
        {recentProject.map((project, i) => (
          <div
            key={i}
            className="min-h-[300px]  sm:max-h-[450px]  grid  grid-rows-2  border border-customSlate rounded-2xl border-b-0 relative"
          >
            <div className="absolute light-up-white w-full h-full"></div>
            <div className="absolute w-[200px] tip-border-1b  top-0 left-[50%] h-px transform -translate-x-1/2"></div>
            <div
              aria-hidden
              className="fed_div_bottom   w-[calc(100%_+_4px)] border-b rounded-b-2xl border-customSlate   h-[calc(100%_+_5px)]  absolute  -left-[.7px] z-10 "
            ></div>
            <div className="border border-customSlate col-span-2  rounded-2xl  w-full h-full  ">
              <Image
                src={project.image}
                alt="codefree"
                className="rounded-t-2xl  max-h-[300px] w-full object-cover"
              />
            </div>
            <div className="relative px-2   col-span-2   pb-2 w-full h-full   text-grayText-1a z-10 ">
              <h1 className="text-xl font-semibold ">{project.title} </h1>
              <p className="py-6 px-2">{project.description}</p>
              <button className=" relative  bg-blend-color-dodge border border-customSlate px-4 py-2 rounded-full">
                {project.button_name}
                <div className="absolute right-1/2 transform translate-x-1/2 top-0 z-10 h-px w-[50px] tip-border"></div>
                <div className="absolute w-full rounded-full  h-8 left-0 top-0  bg-gradient-to-b from-grayBg-1b to-transparent"></div>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </AppLayout>
  );
}

export default MySKills;
