"use client";

import { useState } from "react";

export default function OnSelectEx() {
  const [selected, setSelected] = useState("");
  function handleSelectEvent(event: React.ChangeEvent<HTMLInputElement>) {
    const current = event.currentTarget;
    const start = current.selectionStart ? current.selectionStart : 0;
    const end = current.selectionEnd ? current.selectionEnd : 0;
    const selection = current.value.substring(start, end);
    setSelected(selection);
  }
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {}
  return (
    <>
      Highlight text within the input
      <input
        className="input"
        type="text"
        onSelect={handleSelectEvent}
        onChange={handleChange}
        value={"the red fox jumped over the lazy dog."}
      />
      <p>
        <span className="text-blue-500">{selected}</span>
      </p>
    </>
  );
}
