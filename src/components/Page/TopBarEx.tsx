"use client";

import { useState } from "react";
import { SearchHeader } from "../navigation/Searchbar";

export function SearchHeaderEx() {
  const [close, setClose] = useState(false);
  return (
    <div className="h-80 w-full border relative">
      <SearchHeader
        setClosed={setClose}
        isClosed={close}
        className=" bg-gray-700 justify-around h-12"
      />
      <div
        className="p-1 my-2 w-fit mx-auto rounded bg-green-600  hover:bg-green-500 active:bg-green-800"
        onClick={() => setClose(false)}
      >
        Bring Back
      </div>
    </div>
  );
}
