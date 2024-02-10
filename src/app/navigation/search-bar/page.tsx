import { SearchHeaderEx } from "@/components/Page/TopBarEx";
import CodePreview from "@/components/cards/CodePreview";
import { SearchBar } from "@/components/navigation/Searchbar";

export default function SearchBarPage() {
  return (
    <>
      <CodePreview title="SearchBar" code={code}>
        <SearchBar />
      </CodePreview>

      <CodePreview title="example" code={example}>
        <SearchHeaderEx />
      </CodePreview>
    </>
  );
}

const code = `
"use client";
import { MoveLeft, Search, X } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { SlideHeader } from "../containers/Slide";

export function SearchBar() {
  return (
    <search className="flex-grow">
      <form className="flex">
        <SearchInput />
        <div className="flex justify-center items-center border px-3 py-1 rounded-r-full active:bg-[#ffffff55] hover:bg-[#ffffff33]">
          <Search strokeWidth={1} />
        </div>
      </form>
    </search>
  );
}
interface SearchHeaderProps {
  isClosed: boolean;
  setClosed: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}
export function SearchHeader(props: SearchHeaderProps) {
  return (
    <SlideHeader
      className={props.className}
      direction="left"
      isClosed={props.isClosed}
    >
      <div onClick={() => props.setClosed(true)}>
        <MoveLeft size={30} strokeWidth={1} />
      </div>
      <SearchBar />
    </SlideHeader>
  );
}

function SearchInput() {
  const [value, setValue] = useState("");
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const result = event.currentTarget.value;
    setValue(result);
  }
  return (
    <div className="flex flex-grow border rounded rounded-l-full focus-within:border-blue-500 items-center">
      <input
        type="text"
        className="focus:outline-none bg-transparent px-3 flex-grow"
        placeholder="Search"
        value={value}
        onChange={handleChange}
      />
      <div className="w-6 h-full flex items-center justify-center">
        {value.length > 0 && (
          <div
            onClick={() => setValue("")}
            className="rounded-full hover:bg-[#ffffff33]"
          >
            <X strokeWidth={1} />
          </div>
        )}
      </div>
    </div>
  );
}
`;
const example = `
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
`;
