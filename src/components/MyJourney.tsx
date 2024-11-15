"use client";
import React from "react";
import { motion } from "framer-motion";

function MyJourney() {
  const benefits = [
    {
      title: "Career Advancement",
      description:
        "Enhance your skills and resume through continuous learning and networking.",
    },
    {
      title: "Community Support",
      description:
        "Benefit from a supportive network of like-minded individuals.",
    },
    {
      title: "Global Exposure",
      description:
        "Get recognized in the global AI community through collaborations and showcases.",
    },
    {
      title: "Innovation Opportunities",
      description:
        "Be at the forefront of AI innovation and contribute to groundbreaking projects.",
    },
    {
      title: "Personal Growth",
      description:
        "Develop leadership and collaborative skills through active participation.",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-16 max-w-7xl mx-auto px-4"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">
        <span className="text-darkPurple">Benefits</span>
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
              className={`sm:w-[45%]  w-[100%]  ${
                index % 2 === 0
                  ? "text-right pr-8  ml-[10%] sm:ml-[4.5%] border py-2 px-3 rounded-2xl border-customSlate bg-gradient-to-l from-blue-500 to-transparent "
                  : "pl-8 ml-[10%] sm:ml-0 sm:mr-[4.5%] bg-gradient-to-l from-purple-500 to-transparent rounded-2xl border py-2 px-3 border-customSlate "
              }`}
            >
              <h3 className="text-2xl font-semibold mb-2 text-left text-darkPink">
                {benefit.title}
              </h3>
              <p className="text-lightDark">{benefit.description}</p>
            </div>
            <div className="w-10 h-10   absolute -left-5  sm:left-0   sm:relative bg-black  rounded-full border-4  flex items-center justify-center z-10">
              <hr
                className={`w-[153%] h-2     border-none absolute ${
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
