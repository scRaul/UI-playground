"use client";

import { useState } from "react";

export default function OnMouseDownEx() {
  const [padY, setPadY] = useState("10px");

  return (
    <div
      className="w-fit px-2  mx-auto cursor-pointer bg-black"
      style={{ paddingTop: padY, paddingBottom: padY }}
      onMouseDown={() => setPadY("20px")}
      onMouseUp={() => setPadY("10px")}
    >
      Click and Hold
    </div>
  );
}
