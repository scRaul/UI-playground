"use client";
import { useState } from "react";

export default function OnKeyDownEx() {
  const [blockFloat, setBlockFloat] = useState<"left" | "right">("left");
  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "a") setBlockFloat("left");
    if (event.key === "d") setBlockFloat("right");
    event.currentTarget.value = "";
  }
  return (
    <>
      <div className="w-full  px-4">
        <div
          className={"w-6 h-6 bg-red-500"}
          style={{ float: blockFloat }}
        ></div>
      </div>
      <input className="input" onKeyDown={handleKeyDown} autoFocus />
      <p className="flex flex-col items-center" onKeyDown={handleKeyDown}>
        [a]set left [d]set right
      </p>
    </>
  );
}
