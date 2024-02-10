"use client";

import { useState } from "react";
import { SlideBar } from "../containers/Slide";
import Header from "../containers/Header";

export function OuterSideBarControl() {
  const [leftClosed, setLeftClosed] = useState(false);
  const [rightClosed, setRightClosed] = useState(false);
  return (
    <div className="h-80 relative border rounded">
      <Header className="absolute border-b px-3 py-1">
        <div className="flex-grow"></div>
        <div
          className="w-6 h-6 border rounded flex"
          onClick={() => setLeftClosed(!leftClosed)}
        >
          <div
            className={`w-3 h-full ${leftClosed ? "border-r" : "bg-white"}`}
          ></div>
          <div className="w-full h-full bg-inherit"></div>
        </div>{" "}
        <div
          className="w-6 h-6 border rounded flex"
          onClick={() => setRightClosed(!rightClosed)}
        >
          <div className="w-full h-full bg-inherit"></div>
          <div
            className={`w-3 h-full ${rightClosed ? "border-l" : "bg-white"}`}
          ></div>
        </div>
      </Header>
      <div className="relative top-8 h-72 p-1">
        <SlideBar
          isClosed={leftClosed}
          direction="left"
          className="border-r h-full min-w-[150px]"
        >
          <header>SideBar</header>
        </SlideBar>
        <SlideBar
          isClosed={rightClosed}
          direction="right"
          className="border-l h-full min-w-[150px]"
        >
          <header>EXPLORER</header>
        </SlideBar>
      </div>
    </div>
  );
}
