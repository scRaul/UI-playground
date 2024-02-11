import CodePreview from "@/components/cards/CodePreview";
import { SearchBar, SearchInput } from "@/components/navigation/Search";

export default function SearchBarPage() {
  return (
    <>
      <CodePreview title="SearchInput" code={code}>
        <SearchInput />
      </CodePreview>

      <CodePreview title="SearchBar" code={code}>
        <SearchBar />
      </CodePreview>
    </>
  );
}

const code = `

interface SearchInputProps {
  className?: string;
  placeholder?: string;
}
export function SearchInput(props: SearchInputProps) {
  const [value, setValue] = useState("");
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const result = event.currentTarget.value;
    setValue(result);
  }
  return (
    <div
      className={\`flex flex-grow p-2 items-center \${props.className}\`}
      tabIndex={0}
    >
      <input
        type="text"
        className="focus:outline-none bg-transparent px-3 flex-grow"
        placeholder={props.placeholder ? props.placeholder : "Search"}
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
import { Search, X } from "lucide-react";
import { ChangeEvent, useState } from "react";

interface SearchBarProps {
  placeholder?: string;
}
export function SearchBar(props: SearchBarProps) {
  return (
    <search className="flex">
      <SearchInput
        className="border rounded-l-full focus-within:border-blue-700"
        placeholder={props.placeholder}
      />
      <div className="flex items-center justify-center border pr-4 p-2 rounded-r-full hover:bg-[#ffffff33]">
        <Search strokeWidth={1} />
      </div>
    </search>
  );
}

`;
