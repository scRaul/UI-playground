import CodePreview from "@/components/cards/CodePreview";
import { SearchBar, SearchInput } from "@/components/navigation/Search";
import { readFileContents } from "@/lib/files";

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

const code = readFileContents("src/components/navigation/Search.tsx");
