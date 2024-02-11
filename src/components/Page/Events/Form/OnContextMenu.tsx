"use client";

import { useState } from "react";

export default function OnContextMenuEx() {
  const [input, setInput] = useState("");
  function handleContextMenuEvent(event: React.MouseEvent<HTMLInputElement>) {
    event.preventDefault();
    setInput("Detected a right click");
  }
  return (
    <>
      Right click on Input
      <input
        type="text"
        className="input"
        onContextMenu={handleContextMenuEvent}
      />
      <p className="text-blue-500">{input}</p>
    </>
  );
}
