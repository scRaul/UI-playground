"use client";

import { useState } from "react";

export default function OnFocusEx() {
  const [input, setInput] = useState(0);
  function handleFocusEvent(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(input + 1);
  }
  return (
    <>
      Repeaditly focus / unfocus from input
      <input className="input" type="text" onFocus={handleFocusEvent} />
      <p>
        # of times focused on: <span className="text-blue-500">{input}</span>
      </p>
    </>
  );
}
