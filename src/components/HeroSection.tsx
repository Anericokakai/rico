"use client";
import React, { useEffect, useState } from "react";
import burble from "../../../public/burble.png";
import Image from "next/image";
import AppLayout from "@/utils/AppLayout";
import shadeTop from "../../public/shadeTop.png";
import lightShadeTop from "../../public/lightShadeTop.png";
import Prism from "prismjs";
import { FileSymlink, FileTerminal, Phone, PhoneIncoming } from "lucide-react";
function HeroSection() {
  let fullCode = `
  import { idea } from 'dev';

  function app(){
     if(idea.isReady){
       console.log("One Line\n at a Time")}}
`;

  const [displayedCode, setDisplayedCode] = useState("");
  // console.log(displayedCode)

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullCode.length) {
        setDisplayedCode((prev: any) => prev + fullCode[index]);

        index++;
      } else {
        setDisplayedCode("");
        index = 0;
      }
    }, 100); // Adjust typing speed here

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [fullCode]);
  useEffect(() => {
    // Re-apply syntax highlighting whenever the code changes
    Prism.highlightAll();
  }, [displayedCode]);
  return (
    <AppLayout>
      <div className="  w-full    sm:min-h-[800px]    rounded-2xl  relative  bg-gradient-to-b from-black via-transparent  pt-20 sm:pt-0 to-black backdrop-blur-sm grid xs:place-items-center">
        <div className="divider absolute top-0 w-full "></div>
        <div className="absolute w-full  h-full top-0 left-0 light-up-white mx-auto px-3"></div>
        <div className=" w-full ">
          <div className=" w-full ">
            <h1 className="font-gradient  pt-7 font-effect-hero text-center text-2xl pb-5">
              Cool Tech Stuff By,
            </h1>
            <h1 className="_404-gradient  text-[4rem] xs:text-[100px] sm:text-[100px] md:text-[200px] text-center ">
              RICO.DEV
            </h1>
          </div>
          <div className="relative  w-full  pt-5 px-3 rounded-2xl  border-t border-customSlate    ">
            <Image
              src={shadeTop}
              alt="shadeTop"
              className="w-full h-full -z-10 object-cover absolute top-0 right-0 rounded-t-2xl"
              width={100}
              height={100}
            />
            <div className="absolute left-[50%] transform -translate-x-1/2 top-0   z-10 h-px w-[50%] tip-border"></div>

            <div className="grid gap-3 max-w-2xl mx-auto  sm:grid-cols-2">
              <button className="border transition-all  group flex items-center justify-center gap-2 hover:text-grayText-1b   relative border-customSlate rounded-full w-full py-3 text-grayText-1a">
                <div className="absolute w-full -z-10  h-6 left-0 bg-gradient-to-b from-grayBg-1b to-transparent top-0 rounded-t-full"></div>
                Resume
                <FileSymlink className="group-hover:hidden" />
                <FileTerminal className="hidden group-hover:block" />
              </button>
              <button className="border group flex items-center justify-center gap-2 hover:text-grayText-1b transition-all relative border-customSlate rounded-full w-full py-3 text-grayText-1a ">
                Get In Touch
                <Phone className="group-hover:hidden size-5" />
                <PhoneIncoming className="hidden group-hover:block size-5  animate-pulse" />
                <div className="absolute w-[100%] -z-10  h-6 left-0 bg-gradient-to-b  from-grayBg-1a to-transparent top-0 rounded-t-full"></div>
              </button>
            </div>
            <div className="mt-20  max-w-3xl mx-auto ">
              <hr className="gradient-hr " />
              <h1 className="text-grayText-1b text-2xl text-center pb-10 pt-3 ">
                Crafting scalable solutions
              </h1>

              <pre className="language-javascript  rounded-33xl   w-full sm:text-xl text-left   text-grayText-1a   min-h-[280px] pt-3 relative    ">
                <div
                  aria-hidden
                  className="fed_div_bottom w-[calc(100%_+_4px)] top-[50%]   h-[calc(20%_+_5px)]  absolute  -left-[.7px]   "
                ></div>
                <div className="light-up-white-conic absolute w-[calc(100%_+_1px)] text-xs border border-customSlate border-b-0  rounded-t-2xl h-full -top-[9rem] -z-10 "></div>
                <code dangerouslySetInnerHTML={{ __html: displayedCode }} />
              </pre>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default HeroSection;
