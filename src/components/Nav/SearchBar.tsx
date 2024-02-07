"use client";
import { MoveLeft, Search } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  className?: string;
}
export default function SearchBar(props: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  function handleQuery(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
    if (event.target.value == "") setShowResults(false);
    else setShowResults(true);
  }
  return (
    <>
      <header
        className={` flex py-1 px-2 gap-1 w-full min-h-fit items-center ${props.className}`}
      >
        <div className="pr-1 flex gap-2 items-center justify-between w-fit ">
          <div
            className="rounded-full hover:bg-slate-200 p-2 cursor-pointer"
            onClick={() => alert("switch back to top bar")}
          >
            <MoveLeft />
          </div>
        </div>

        <search className="flex-grow px-2 py-1 flex items-center border-2 border-gray-500 focus-within:border-blue-500 rounded-lg">
          <input
            type="search"
            className="w-full focus:outline-none"
            placeholder="Search"
            onChange={handleQuery}
          />
          <div
            className="cursor-pointer rounded-xl hover:bg-slate-200 p-1 "
            onClick={() => alert("invoke search query")}
          >
            <Search / >
          </div>
        </search>
        <div className="flex items-center justify-between px-1 gap-2 "></div>
      </header>
      <dialog
        open
        className={`w-9/12 rounded-xl bg-slate-100 mx-auto ${
          showResults ? "px-2 py-1" : null
        }`}
      >
        <p>{query}</p>
      </dialog>
    </>
  );
}
