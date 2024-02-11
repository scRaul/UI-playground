"use client";

import { useState } from "react";

export default function OnMouseOverEx() {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <>
      <p>Pass mouse over div</p>
      <div
        className={`h-32 border-2 ${mouseOver ? "bg-red-600" : "bg-blue-600"}`}
        onMouseOver={() => setMouseOver(true)}
        onMouseOut={() => setMouseOver(false)}
      ></div>
    </>
  );
}
