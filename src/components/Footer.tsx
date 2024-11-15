import React from "react";
import x from "../icons/x.svg"
import XTwitter from "@/icons/XTwitter";
import GitHub from "@/icons/GitHub";
import Discord from "@/icons/Discord";
import Link from "next/link";
import Linkedin from "@/icons/Linkedin";

function Footer() {
  return (
    <footer>
        <div className="flex gap-4">
      <Link
        href=""
        className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7   rounded-full"
      > 
      <XTwitter/>
      </Link>
      <Link
        href={""}
        className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-full"
      > 
      <Discord/>
      </Link>
      <Link
        href=""
        className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-full"
      > 
      <GitHub/>
      </Link>
      <Link
        href=""
        className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-full"
      > 
      <Linkedin/>
      </Link>
    </div>
    </footer>
  );
}

export default Footer;
