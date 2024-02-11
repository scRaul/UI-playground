"use client";

import { useState } from "react";

export default function OnInvalidEx() {
  const [invalidMsg, setInvalid] = useState("");
  function handleInvalidEvent(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setInvalid(event.currentTarget.value + " is an invalid email");
  }
  return (
    <form>
      <p>Enter & submit invalid email</p>
      <input
        type="email"
        className="input"
        onInvalid={handleInvalidEvent}
        required
      />
      <p>
        <span className="text-red-500">{invalidMsg}</span>
      </p>
      <input type="submit" className="bg-blue-500 p-2 mt-1" />
    </form>
  );
}
