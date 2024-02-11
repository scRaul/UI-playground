"use client";

import { useState } from "react";

export default function OnInputEx() {
  const [input, setInput] = useState("");
  function handleInputEvent(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.currentTarget.value);
  }
  return (
    <>
      Enter anything then unfocus from element:
      <input type="text" className="input" onInput={handleInputEvent} />
      <p>
        After unfocused value was :{" "}
        <span className="text-blue-500">{input}</span>
      </p>
    </>
  );
}
