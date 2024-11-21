import CodeBlock from "@/components/CodeBlock";
import CustomCard1 from "@/components/CustomCard1";
import HeroSection from "@/components/HeroSection";

import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import MyTechStack from "@/components/MyTechStack";
import Nav from "@/components/Nav";
import Image from "next/image";
import MySKills from "@/components/MySKills";
import MyJourney from "@/components/MyJourney";

export default function Home() {
  return (
    <main className=" bg-black font-Inter   ">
      <Nav />
      <HeroSection />
      <MySKills />
      <MyJourney />
      <CustomCard1 />
      <MyTechStack />
      <CodeBlock />
      <GetInTouch />
      <Footer />
    </main>
  );
}
