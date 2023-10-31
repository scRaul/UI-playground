"use client";
import { AlignJustify } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import HoverBttn from "@/components/BUTTONS/HoverBttn";

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
      className={`flex gap-1 justify-between items-center left-0 top-0 w-screen p-3 h-14 ${topBarClasses} `}
    >
      <div
        id="left-section"
        className="flex w-full justify-start items-center"
      ></div>
      <div id="mid-section" className="flex w-full justify-center items-center">
        <p>topBar</p>
      </div>
      <div id="right-section" className="flex w-full justify-end items-center">
        <a>call-to-action</a>
      </div>
    </div>
  );
}
export default TopBar;
