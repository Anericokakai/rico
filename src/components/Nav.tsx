'use client';
import { useEffect, useState } from "react";


function Nav() {
  const [showNav, setShowNav] = useState<boolean>(false);
  const handleNavShow = () => {
    if (window.scrollY > 20) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", handleNavShow);
    return () => document.addEventListener("scroll", handleNavShow);
  }, []);
  return (
    <nav
      className={` text-grayText-1a w-full px-2 py-4 ${
        showNav ? " bg-black/60 backdrop-blur-sm sticky top-0 z-50   transition ease-in-out duration-200 slide-bottom-animate" : " bg-transparent"
      }`}
    >
      <div className='divider absolute bottom-0 w-full '></div>
      <div className="  flex items-center justify-between w-full">
        <h1 className="font-gradient text-3xl font-effect-hero ">
          Anerico.Dev
        </h1>
        <ul className=" hidden sm:inline-flex gap-10 font-medium text-base">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
