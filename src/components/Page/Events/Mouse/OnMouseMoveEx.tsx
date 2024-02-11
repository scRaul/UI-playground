"use client";

import { useState } from "react";

export default function OnMouseMoveEx() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const { x, y } = event.currentTarget.getBoundingClientRect();
    setMousePos({ x: event.clientX - x, y: event.clientY - y });
  }

  return (
    <>
      <p>
        Move Mouse inside of div, current pos
        <span className="text-blue-500">
          {mousePos.x},{mousePos.y}
        </span>
      </p>
      <div
        className="h-32 border-2 bg-blue-500"
        onMouseMove={handleMouseMove}
      ></div>
    </>
  );
}
