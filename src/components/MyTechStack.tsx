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
      <div className="   overflow-x-clip max-w-5xl pb-8 sm:pb-0 pt-10  md:max-w-7xl">
      <h3 className="    mb-2 text-center text-[3rem] md:text-[3.5rem] tracking-tight leading-[120%] font-gradient">
        Tech
        <span className="inline pl-2 leading-[0] bg-gradient-to-br bg-clip-text tracking-tight text-transparent from-blueShade-1a to-pinkShade-1a">Stack</span>
      </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 py-8">
          {Technologies.map((item) => (
            <div key={item.name} className="min-w-0 rounded-xl border border-customSlate bg-neutral-900 p-4 text-grayText-1a">
              <div className="grayscale mb-3">{item.icon}</div>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}

export default MyTechStack;
