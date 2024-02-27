"use client";
import SlidingPanel from "@/components/panels/SlidingPanel";
import { useState } from "react";
import { GridBg, GridBgWrapped } from "../Util";
import { AlignJustify } from "lucide-react";

export function FixedSlideEx() {
  const [closed, setClosed] = useState(false);

  return (
    <div className="relative w-full border overflow-hidden">
      <GridBgWrapped />
      <SlidingPanel
        panelType="Side"
        closeTowards={"left"}
        className="w-20 bg-[#0000ff99] border "
        position="absolute"
        zIndex={1}
        isClosed={closed}
      >
        <div className="py-3 ">Sliding Panel</div>
      </SlidingPanel>

      <AlignJustify
        className={`absolute top-4 ${
          closed ? "left-5" : "left-20"
        } hover:bg-[#ffffff33]`}
        onClick={() => setClosed(!closed)}
      />
    </div>
  );
}

export function AbsSlideEx() {
  const [closed, setClosed] = useState(false);

  return (
    <div className="relative w-full border h-80 overflow-auto scrolly">
      <GridBg />
      <SlidingPanel
        panelType="Side"
        closeTowards={"left"}
        className="w-20 bg-[#0000ff99] border "
        position="absolute"
        zIndex={1}
        isClosed={closed}
      >
        <div className="py-3 ">Sliding Panel</div>
      </SlidingPanel>

      <AlignJustify
        className={`absolute top-4 ${
          closed ? "left-5" : "left-20"
        } hover:bg-[#ffffff33]`}
        onClick={() => setClosed(!closed)}
      />
    </div>
  );
}
