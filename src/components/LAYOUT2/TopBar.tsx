/*
Use as a singleton instance ( edit this file to make changes )
bar is split into three sections 
left, mid , and right
*/
"use client";
import { Shapes } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

function TopBar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const topBarClasses = `${
    scrolling ? "bg-gray-500 fixed" : "bg-transparent"
  } transition-all duration-300 ease-in-out`;

  return (
    <div
      className={`flex gap-1 justify-between items-center left-0 top-0 w-full p-3 pl-14 pr-10  h-14 ${topBarClasses} `}
    >
      <div id="left-section" className="flex w-full justify-start items-center">
        <Link href="" className="cursor-pointer  flex ">
          <Shapes />
          UI Library
        </Link>
      </div>
      <div id="mid-section" className="flex w-full justify-center items-center">
        <p>topBar</p>
      </div>
      <div id="right-section" className="flex w-full justify-end items-center">
        <a className="text-blue-700 cursor-pointer">call-to-action</a>
      </div>
    </div>
  );
}
export default TopBar;
