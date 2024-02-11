"use client";

import { useState } from "react";

export default function OnBlurEx() {
  const [input, setInput] = useState("");
  function handleBlurEvent(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.currentTarget.value);
  }
  return (
    <>
      Enter anything then unfocus from element:
      <input type="text" className="input" onBlur={handleBlurEvent} />
      <p>
        After unfocused value was :{" "}
        <span className="text-blue-500">{input}</span>
      </p>
    </>
  );
}
