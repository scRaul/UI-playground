"use client";

import { useState } from "react";
import { SlidingSidePanel } from "../panels/SlidingPanel";
import { AlignJustify } from "lucide-react";
import SidePanel from "../panels/SidePanel";
import Logo from "../navigation/Logo";

export function SideEx() {
  const [isClosed, setIsClosed] = useState(false);

  return (
    <div className="relative h-60 w-full p-4">
      <div className="flex items-center w-full h-full">
        <div className="flex-grow"></div>
        <button
          className="rounded p-3 hover:bg-green-500 bg-green-600"
          onClick={() => setIsClosed(!isClosed)}
        >
          {isClosed ? " Open " : "Close "}
          Side Bar
        </button>
        <div className="flex-grow"></div>
      </div>
      <SlidingSidePanel
        className="border-r h-full px-5 py-3"
        isClosed={isClosed}
        direction="left"
      >
        <span>Side Bar</span>
      </SlidingSidePanel>
    </div>
  );
}

export function SideLayoutEx() {
  const [isClosed, setIsClosed] = useState(false);
  return (
    <div className="relative h-60 w-full  border">
      <div className="absolute top-0 py-4 px-2">
        <div
          className="rounded-full hover:bg-slate-200 p-2"
          onClick={() => setIsClosed(!isClosed)}
        >
          <AlignJustify />
        </div>
      </div>
      <SlidingSidePanel
        className="border-r h-full px-1 py-3"
        isClosed={isClosed}
        direction="left"
      >
        <header className="flex gap-2 items-center justify-around p-1">
          <div
            className="rounded-full hover:bg-slate-200 p-2"
            onClick={() => setIsClosed(!isClosed)}
          >
            <AlignJustify />
          </div>
          <Logo href="" />
        </header>
        <div className="py-4">
          <div className="w-full hover:bg-slate-50 pl-4">
            <span className="font-mono text-lg hover:text-black">Home</span>
          </div>
          <div className="w-full hover:bg-slate-50 pl-4">
            <span className="font-mono text-lg hover:text-black">Music</span>
          </div>
          <div className="w-full hover:bg-slate-50 pl-4">
            <span className="font-mono text-lg hover:text-black">Movies</span>
          </div>
          <div className="w-full hover:bg-slate-50 pl-4">
            <span className="font-mono text-lg hover:text-black">TV</span>
          </div>
          <div className="w-full hover:bg-slate-50 pl-4">
            <span className="font-mono text-lg hover:text-black">Games</span>
          </div>
        </div>
      </SlidingSidePanel>
    </div>
  );
}

export function Test() {
  const [isClosed, setIsClosed] = useState(false);
  return (
    <div className="h-80 top-0 p-1 relative">
      <TestBar className="border" isClosed={isClosed}>
        <header className="flex gap-2 items-center justify-around p-1">
          <div
            className="rounded-full hover:bg-slate-200 p-2"
            onClick={() => setIsClosed(!isClosed)}
          >
            <AlignJustify />
          </div>
          <Logo href="" />
        </header>
      </TestBar>
    </div>
  );
}

interface TestBarProps {
  children: React.ReactNode;
  className?: string;
  isClosed: boolean;
  onRight?: boolean;
}

export function TestBar(props: TestBarProps) {
  if (props.onRight)
    return (
      <RightBar
        className={props.className}
        isClosed={props.isClosed}
        onRight={props.onRight}
      >
        {props.children}
      </RightBar>
    );
  return (
    <LeftBar
      className={props.className}
      isClosed={props.isClosed}
      onRight={props.onRight}
    >
      {props.children}
    </LeftBar>
  );
}

function LeftBar(props: TestBarProps) {
  return (
    <SidePanel
      className={`h-screen min-w-[200px] transform
       ${
         props.isClosed
           ? "-translate-x-full opacity-0 invisible"
           : "translate-x-0 opacity-100 visible"
       }
       transition-all duration-300 ease-in-out
       onTransition
        ${props.className}
       `}
    >
      {props.children}
    </SidePanel>
  );
}
function RightBar(props: TestBarProps) {
  return (
    <SidePanel
      className={`h-screen min-w-[200px] transform right-0
       ${
         props.isClosed
           ? "translate-x-full opacity-0 invisible"
           : "translate-x-0 opacity-100 visible"
       }
       transition-all duration-300 ease-in-out
       onTransition
        ${props.className}
       `}
    >
      {props.children}
    </SidePanel>
  );
}
