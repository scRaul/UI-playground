"use client";

import { useState } from "react";

export default function OnResetEx() {
  const [value, setValue] = useState("Durian");
  function handleResetEvent(event: React.FormEvent<HTMLFormElement>) {
    setValue("");
  }
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.currentTarget.value);
  }
  return (
    <form onReset={handleResetEvent}>
      Enter your favorite fruit:
      <input
        type="text"
        className="input"
        name="name"
        value={value}
        onChange={handleChange}
      />
      <br />
      <input type="Reset" className="bg-red-500 p-2 mt-1  " />
    </form>
  );
}
