"use client";
import React from "react";
import { motion } from "framer-motion";
import { p } from "framer-motion/client";
import Image from "next/image";
import jengaHustle from "../../public/jengahustle.png";
import ams from "../../public/ams.png";
import gaif from "../../public/gaif.png";
import html from "../../public/html.png";
import reactSmall from "../../public/reactSmall.png";


function MyJourney() {
  const benefits = [
    {
      title: "Worked at AMS East Africa",
      period: "[2024-present]",
      img:ams,
      description: "Created Animal Management System for a startup company ",
    },
    {
      title: "Worked at GAiF.ai",
      period: "[2024-present]",
      img:gaif,
      description: "Created a website and a Chat application for a startup company dealing with AI ",
    },
    {
      title: "Problem Solving Skills",
      period: "[2023-end of 2023]",
      img:jengaHustle,
      description:
        "Started To build real world Application to solve day to day problems.",
    },
    {
      title: "Learn frontend & Backend frameworks",
      period: "[2023-mid 2023]",
      img:reactSmall,
      description:
        "Understood the components that build react apps and Developed several projects ",
    },
    {
      title: "Learn Coding Skills",
      img:html,
      period: "[2022-end of 2022]",
      description:
        "Started My Web Development Journey with HTML, CSS, and JavaScript.",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-16 max-w-7xl  mx-auto px-4 overflow-x-clip"
    >
      <h2 className="text-4xl sm:text-6xl  my-20 text-center">
        <span className="text-transparent font-effect-hero font-gradient">My Journey</span>
      </h2>
      <div className="relative text-grayText-1a ">
        <div className="absolute sm:left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-300"></div>
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`flex items-center flex-row-reverse sm:flex-row mb-16  ${
              index % 2 === 0 ? "sm:flex-row-reverse" : ""
            }`}
          >
            <div
              className={`sm:w-[45%] bg-black  relative w-[100%]  ${
                index % 2 === 0
                  ? "text-right pr-8  ml-[10%] sm:ml-[4.5%] border py-2 px-3 rounded-2xl border-customSlate  "
                  : "pl-8 ml-[10%] sm:ml-0 sm:mr-[4.5%] bg-gradient-to rounded-2xl border py-2 px-3 border-customSlate "
              }`}
            >
                              <div className="absolute right-1/2 transform translate-x-1/2 top-0 z-10 h-px w-[200px] tip-border"></div>
                              <div className="absolute w-full rounded-t-2xl  h-full left-0 top-0  bg-gradient-to-b from-grayBg-1b to-transparent"></div>
              <h3 className="text-xl font-semibold mb-2 text-left text-darkPink">
                {benefit.title}
              </h3>
              <p className="text-left">{benefit.period}</p>
              <p className="text-lightDark text-left">{benefit.description}</p>
            </div>
            <div className="w-10 h-10    absolute -left-5  sm:left-0   sm:relative bg-gradient-to-br from-blueShade-1a via-pinkShade-1a to-blueShade-1a  rounded-full   flex items-center justify-center z-10">
              <Image src={benefit.img} alt="nothing" className="w-8 h-8 rounded-full" />
              <hr
                className={`w-[153%] h-2    -z-20   border-none absolute ${
                  index % 2 === 0
                    ? "-right-[153%]  bg-gradient-to-r  rounded-se-full from-purple-400"
                    : " -right-[153%]  sm:-left-[153%] bg-gradient-to-r sm:bg-gradient-to-l from-blue-500"
                } `}
              />
            </div>
            <div className="sm:w-1/2"></div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default MyJourney;
