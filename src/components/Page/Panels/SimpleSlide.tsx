"use client";
import Logo from "@/components/navigation/Logo";
import SidePanel from "@/components/panels/SidePanel";
import SlidingPanel from "@/components/panels/SlidingPanel";
import { useEffect, useState } from "react";

export default function SimpleSlideEx() {
  const [closed, setClosed] = useState(true);

  return (
    <div className="border relative left-0 top-0 h-80 w-full overflow-hidden">
      <SlidingPanel
        panelType="Side"
        position="absolute"
        isClosed={closed}
        closeTowards="top"
        className="border right-0"
      >
        <Logo href="" />
        <div className="flex-grow"></div>
        <div className="font-bold text-xl hover:underline">Home</div>
        <div className="font-bold text-xl hover:underline">Projects</div>
        <div className="font-bold text-xl hover:underline">About</div>
      </SlidingPanel>
      <button
        className="rounded w-fit mx-auto block p-4 mt-10  bg-green-800 hover:bg-green-500 "
        onClick={() => setClosed(!closed)}
      >
        Toggle Slide Panel
      </button>
    </div>
  );
}
