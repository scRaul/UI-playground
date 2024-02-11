"use client";

import { useState } from "react";

export default function OnClickEx() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className="rounded-full bg-green-800 p-2 active:bg-green-500 text-center font-bold cursor-pointer"
        onClick={() => setCount(count + 1)}
      >
        +1
      </div>
      <p className="text-blue-500">{`Count: ${count}`}</p>
    </>
  );
}
