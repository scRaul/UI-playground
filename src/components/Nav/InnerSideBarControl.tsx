"use client";

import { AlignJustify } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import Header from "./Header";
import SideBar from "./SideBar";

interface InnerSideBarControlProps {
  children: React.ReactNode;
}

export default function InnerSideBarControl(props: InnerSideBarControlProps) {
  const [closeSideBar, setCloseSideBar] = useState(true);
  return (
    <Header className="bg-inherit p-1 fixed">
      <header className="flex gap-2 items-center justify-around w-fit min-w-[200px]">
        <div
          className="rounded-full hover:bg-slate-200 p-2"
          onClick={() => setCloseSideBar(false)}
        >
          <AlignJustify />
        </div>
        <Logo href="/" />
      </header>
      <SideBar
        className="bg-inherit shadow-2xl h-screen min-w-[200px]"
        isClosed={closeSideBar}
      >
        <header className="flex gap-2 items-center justify-around p-1">
          <div
            className="rounded-full hover:bg-slate-200 p-2"
            onClick={() => setCloseSideBar(!closeSideBar)}
          >
            <AlignJustify />
          </div>
          <Logo href="" />
        </header>
        {props.children}
      </SideBar>
    </Header>
  );
}
