"use client";

import { useState } from "react";

export default function OnDoubleClickEx() {
  const [color, setColor] = useState("#0000ff");

  function swapColor() {
    setColor(color === "#0000ff" ? "#aa9900" : "#0000ff");
  }

  return (
    <div
      className="p-4 mx-auto w-fit cursor-pointer"
      style={{ backgroundColor: color }}
      onDoubleClick={swapColor}
    >
      Click Twice
    </div>
  );
}
