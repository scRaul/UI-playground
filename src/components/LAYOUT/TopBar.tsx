"use client";
import { AlignJustify, Search, UserCircle } from "lucide-react";
interface TopBarProps {
  className?: string;
}
export default function TopBar(props: TopBarProps) {
  return (
    <header
      className={` flex p-2 gap-1 w-full min-h-fit items-center ${props.className}`}
    >
      <div className="pr-1 flex gap-2 items-center justify-between w-fit min-w-[150px]">
        <div
          className="rounded-full hover:bg-slate-200 p-2 cursor-pointer"
          onClick={() => alert("open side bar / drop down pannel ")}
        >
          <AlignJustify />
        </div>
        <div
          className="flex-grow cursor-pointer"
          onClick={() => alert("back to home page")}
        >
          <img src="/next.svg"></img>
        </div>
      </div>
      <div className="flex-grow"></div>
      <div className="flex items-center justify-between px-1 gap-2 ">
        <div
          className="cursor-pointer"
          onClick={() => alert("swap to search bar ")}
        >
          <Search />
        </div>
        <div
          className="flex items-center justify-center border rounded-full p-1 px-2 hover:bg-slate-200 cursor-pointer"
          onClick={() => alert("invoke login")}
        >
          <UserCircle />
          <p>Sign In</p>
        </div>
      </div>
    </header>
  );
}
