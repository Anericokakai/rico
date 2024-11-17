import Java from "@/icons/Java";
import Nodejs from "@/icons/Nodejs";
import AppLayout from "@/utils/AppLayout";
import { ArrowRight, ChevronRight } from "lucide-react";
import React from "react";

function CustomCard1() {
  return (
    <AppLayout>
      <div className="p-2 my-20 mx-auto flex flex-col md:flex-row border rounded-xl max-w-[1008px] border-[#727DA1]/20 bg-[#171824] ">
        <div className="rounded px-8 py-5 flex flex-col max-w-[488px]">
          <div className="mb-10 grow flex flex-col justify-center">
            <h3 className=" font-medium text-[28px] md:text-[36px] leading-[120%] tracking-[0.01]">
              <div className=" text-transparent purple-gradient-text">
                Streamline Development
              </div>
              <div className="text-transparent white-gradient-text">
                Optimize Software Solution
              </div>
            </h3>
            <p className="mt-5 text-grayText-1a">
              Build smarter software with efficient, scalable, and maintainable
              solutions. Focus on quality and performance to drive real value
              and future-proof applications.
            </p>
            
          </div>
        </div>
        <div className="pt-6 md:py-6 px-8 sm:min-w-[383px]">
          <div className=" py-5 grid">
            <div className="  text-greenText-3c  items-center gap-2 flex shrink-0 ">
              <Nodejs />
              <span className="font-semibold">Node.js</span>
            </div>
            <div className="mt-3 rounded-full bg-[#0B0C14] p-[1px]">
              <div className="h-2 rounded-full costs-progress-gradient w-[98%]"></div>
            </div>
          </div>
          <hr className=" gradient-hr" />

          <div className=" py-5 grid">
            <div className="  text-amber-1a hover:text-amber-1c  cursor-pointer  transition-all items-center gap-2 flex shrink-0 ">
              <Java />
              <span className="font-semibold">Java</span>
            </div>
            <div className="mt-3 rounded-full bg-[#0B0C14] p-[1px]">
              <div className="h-2 rounded-full costs-progress-gradient w-[50%]"></div>
            </div>
            <p className="pl-3  pt-1 text-grayText-1b text-[12px] font-semibold">
              50% Learn
            </p>
          </div>
          <hr className=" gradient-hr" />
          <div className=" py-5 grid">
            <div className="  text-amber-1a hover:text-amber-1c  cursor-pointer  transition-all items-center gap-2 flex shrink-0 ">
              <span className="font-semibold">React & Next.js</span>
            </div>
            <div className="mt-3 rounded-full bg-[#0B0C14] p-[1px]">
              <div className="h-2 rounded-full costs-progress-gradient w-[80%]"></div>
            </div>
            <p className="pl-3  pt-1 text-grayText-1b text-[12px] font-semibold">
              80% Learn
            </p>
          </div>
          <hr className=" gradient-hr" />
          <div className="custom-bg-purple-gradient mt-5 py-3 rounded-2xl px-2">
            <button className="bg-black relative flex grow  items-center gap-3 shrink-0 py-2 group text-grayText-1a text-sm px-5 justify-center rounded-3xl">
              visit blogs
              <ChevronRight className=" size-4 group-hover:hidden group-hover:transition-all" />
              <ArrowRight className=" size-4 hidden group-hover:block group-hover:transition-all" />
              <div className="absolute w-full rounded-lg h-8 left-0 bg-gradient-to-b from-grayBg-1b to-transparent"></div>
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default CustomCard1;
