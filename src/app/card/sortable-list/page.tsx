import SortableList from "@/components/cards/SortableList";
import CodePreview from "@/components/cards/CodePreview";
import { readFileContents } from "@/lib/files";

export default function CollapsiblePage() {
  return (
    <>
      <CodePreview title="Sortable.tsx" code={code} className="mt-20 ">
        <SortableList className="gap-1 bg-[#ffffff33] [&>div]:border py-2">
          <div>
            <h1>A</h1>
            <p>lorem</p>
          </div>
          <div>B</div>
          <div>C</div>
          <div>D</div>
        </SortableList>
      </CodePreview>
    </>
  );
}
const code = readFileContents("src/components/cards/SortableList.tsx");
