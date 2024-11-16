import AppLayout from "@/utils/AppLayout";
import React from "react";
import "../app/globals.css";
import JavaImg from "@/icons/JavaImg";
import ReactImg from "@/icons/ReactImg";
import MongodbImg from "@/icons/MongodbImg";
import DockerImg from "@/icons/DockerImg";
import MysqlImg from "@/icons/MysqlImg";
import NodejsImg from "@/icons/NodejsImg";
import GitImage from "@/icons/GitImage";
function MyTechStack() {
  const Technologies = [
    {
      name: "Java",
      icon: <JavaImg />,
    },
    {
      name: "React",
      icon: <ReactImg />,
    },
    {
      name: "Mongo Db",
      icon: <MongodbImg />,
    },
    {
      name: "Docker ",
      icon: <DockerImg />,
    },
    {
      name: "Mysql",
      icon: <MysqlImg />,
    },
    {
      name: "Node js",
      icon: <NodejsImg />,
    },
    {
      name: "Git & Git Hub",
      icon: <GitImage />,
    },
  ];
  return (
    <AppLayout>
      <div className="  max-w-5xl pb-8 pt-10  md:max-w-7xl">
      <h3 className="    mb-2 text-center text-[3rem] md:text-[3.5rem] tracking-tight leading-[120%] font-gradient">
        Tech
        <span className="inline pl-2 leading-[0] bg-gradient-to-br bg-clip-text tracking-tight text-transparent from-[#FFFF92] to-[#EE8912]">Stack</span>
      </h3>
        <div className="relative w-full -mx-5 py-16 flex flex-col lg:flex-row gap-4 lg:overflow-hidden shrink-0 lg:h-[400px] [--item-count:6]">
          <div className="absolute  w-screen lg:max-w-7xl h-full bg-gradient-to-tr from-transparent to-black   left-0   z-10 inset-0 integrations-gradient pointer-events-none"></div>
          <div className="flex-1 flex  text-grayText-1a gap-4 scroll transition-all relative">
            <div className="flex   gap-4 space-around">
              {Technologies.map((item, i) => (
                <a
                key={i}
                  href=""
                  className="p-4 relative  rounded-xl border bg-[#727DA1]/10 hover:bg-[#727DA1]/15 border-customSlate w-[258px] h-[119px]"
                >
                            <div className="absolute right-0 top-0 z-10 h-px w-[100px] tip-border"></div>
                            <div className="absolute bottom-0 left-0 z-10 h-px w-[100px] tip-border"></div>
                  <div className="">{item.icon}</div>
                  <p>{item.name}</p>
                </a>
              ))}
            </div>
            <div aria-hidden className="flex  gap-4 space-around">
            {Technologies.map((item, i) => (
                <a
                  href=""
                  className="p-4 relative rounded-xl border bg-[#727DA1]/10 hover:bg-[#727DA1]/15 border-customSlate w-[258px] h-[119px]"
                >
                            <div className="absolute right-0 top-0 z-10 h-px w-[100px] tip-border"></div>
                            <div className="absolute bottom-0 left-0 z-10 h-px w-[100px] tip-border"></div>
                  <div className="">{item.icon}</div>
                  <p>Security company</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default MyTechStack;
