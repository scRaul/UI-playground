"use client";
import { useState } from "react";

export default function OnDrag_EndEx() {
  const [dragging, setDragging] = useState(false);
  return (
    <>
      <p> Try dragging red block,(notice cursor change)</p>

      <div
        draggable={true}
        className={`w-12 h-12 bg-red-500 ${
          dragging ? "cursor-grabbing " : "cursor-grab"
        }`}
        onDrag={() => setDragging(true)}
        onDragEnd={() => setDragging(false)}
      ></div>
    </>
  );
}
