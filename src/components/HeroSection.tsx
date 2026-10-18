"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AppLayout from "@/utils/AppLayout";
import shadeTop from "../../public/shadeTop.png";
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
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayedCode(fullCode);
      return;
    }
    let index = 0;
    const interval = setInterval(() => {
      index = index < fullCode.length + 20 ? index + 1 : 0;
      setDisplayedCode(fullCode.slice(0, index));
    }, 100);
    return () => clearInterval(interval);
  }, [fullCode]);
  return (
    <AppLayout>
      <div className="hero-shell w-full sm:min-h-[800px] rounded-2xl relative pt-12 sm:pt-8 grid xs:place-items-center">
        <div className="divider absolute top-0 w-full "></div>
        <div className="pointer-events-none absolute w-full h-full top-0 left-0 light-up-white mx-auto px-3"></div>
        <div className=" w-full ">
          <div className=" w-full ">
            <h1 className="hero-reveal hero-intro font-gradient pt-7 font-effect-hero text-center text-2xl pb-5">
              Cool Tech Stuff By,
            </h1>
            <h1 className="hero-reveal hero-title _404-gradient text-[clamp(3rem,14vw,11rem)] text-center ">
              RICO.DEV
            </h1>
          </div>
          <div className="relative  w-full  pt-5 px-3 rounded-2xl  border-t border-customSlate    ">
            <Image
              src={shadeTop}
              alt=""
              className="hero-shade pointer-events-none grayscale w-full h-full -z-10 object-cover absolute top-0 right-0 rounded-t-2xl"
              width={100}
              height={100}
            />
            <div className="absolute left-[50%] transform -translate-x-1/2 top-0   z-10 h-px w-[50%] tip-border"></div>

            <div className="hero-reveal hero-buttons grid gap-3 max-w-2xl mx-auto  sm:grid-cols-2">
              <button type="button" className="hero-button border transition-all  group flex items-center justify-center gap-2 hover:text-grayText-1b   relative border-customSlate rounded-full w-full py-3 text-grayText-1a">
                <div className="absolute w-full -z-10  h-6 left-0 bg-gradient-to-b from-grayBg-1b to-transparent top-0 rounded-t-full"></div>
                <span className="button-label"><span>Resume</span><span aria-hidden="true">View resume</span></span>
                <FileSymlink className="group-hover:hidden" />
                <FileTerminal className="hidden group-hover:block" />
              </button>
              <button type="button" className="hero-button border group flex items-center justify-center gap-2 hover:text-grayText-1b transition-all relative border-customSlate rounded-full w-full py-3 text-grayText-1a ">
                <span className="button-label"><span>Get In Touch</span><span aria-hidden="true">Let’s talk</span></span>
                <Phone className="group-hover:hidden size-5" />
                <PhoneIncoming className="hidden group-hover:block size-5  animate-pulse" />
                <div className="absolute w-[100%] -z-10  h-6 left-0 bg-gradient-to-b  from-grayBg-1a to-transparent top-0 rounded-t-full"></div>
              </button>
            </div>
            <div className="hero-reveal hero-editor-wrap mt-16 max-w-3xl mx-auto ">
              <hr className="gradient-hr " />
              <h1 className="text-grayText-1b text-2xl text-center pb-10 pt-3 ">
                Crafting scalable solutions
              </h1>

              <div className="hero-editor">
                <div className="editor-toolbar" aria-hidden="true"><span /><span /><span /><small>idea.js</small></div>
                <pre className="language-javascript text-sm sm:text-xl min-h-[240px] p-4 sm:p-6">
                  <code dangerouslySetInnerHTML={{ __html: Prism.highlight(displayedCode, Prism.languages.javascript, "javascript") }} />
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default HeroSection;
