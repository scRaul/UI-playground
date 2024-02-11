import CodePreview from "@/components/cards/CodePreview";
import StoreLayoutLg from "@/components/layout/StoreLayoutLg";
import { readFileContents } from "@/lib/files";

export default function Store() {
  return (
    <>
      <CodePreview title="Desktop Layout" code={layoutLg}>
        <div className="relative h-80 w-full border overflow-hidden">
          <StoreLayoutLg />
        </div>
      </CodePreview>
    </>
  );
}

const layoutLg = readFileContents("src/components/layout/StoreLayout.tsx");
