"use client";

import { AlignJustify } from "lucide-react";
import SideBar from "./SideBar";
import { useState } from "react";

export default function SideLayout() {
  const [closeSideBar, setCloseSideBar] = useState(false);
  return (
    <div className="relative h-96 top-0 p-1">
      <header className=" pl-2 pr-1 flex gap-2 items-center justify-between w-fit min-w-[200px]">
        <div
          className="rounded-full hover:bg-slate-200 p-2"
          onClick={() => setCloseSideBar(false)}
        >
          <AlignJustify />
        </div>
        <div className="flex-grow">
          <img src="/next.svg"></img>
        </div>
      </header>
      <SideBar
        className="border bg-white"
        isClosed={closeSideBar}
        setIsClosed={setCloseSideBar}
      />
    </div>
  );
}
