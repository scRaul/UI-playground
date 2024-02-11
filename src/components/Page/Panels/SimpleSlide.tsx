"use client";
import Logo from "@/components/navigation/Logo";
import SlidingPanel from "@/components/panels/SlidingPanel";
import { useState } from "react";

export default function SimpleSlideEx() {
  const [closed, setClosed] = useState(false);
  return (
    <div className="border relative h-80 w-full overflow-hidden">
      <SlidingPanel
        isClosed={closed}
        panelType={"Side"}
        direction={"left"}
        position={"absolute"}
        className="border-r"
      >
        <Logo href="" />
        <div className="flex-grow"></div>
        <div className="font-bold text-xl hover:underline">Home</div>
        <div className="font-bold text-xl hover:underline">Projects</div>
        <div className="font-bold text-xl hover:underline">About</div>
      </SlidingPanel>
      <button
        className="rounded w-fit mx-auto block mt-20 p-4 bg-green-800 hover:bg-green-500 "
        onClick={() => setClosed(!closed)}
      >
        Toggle Slide Panel
      </button>
    </div>
  );
}
