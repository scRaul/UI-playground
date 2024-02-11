"use client";

import { useState } from "react";

export default function OnChangeEx() {
  const [input, setInput] = useState("");
  function handleChangeEvent(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.currentTarget.value);
  }
  return (
    <>
      Type anything
      <input type="text" className="input" onChange={handleChangeEvent} />
      <p>
        After unfocused value was :{" "}
        <span className="text-blue-500">{input}</span>
      </p>
    </>
  );
}
