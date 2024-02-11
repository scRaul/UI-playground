import CodePreview from "@/components/cards/CodePreview";
import StoreLayoutLg from "@/components/layout/StoreLayoutLg";
import StoreLayoutSm from "@/components/layout/StoreLayoutSm";
import { readFileContents } from "@/lib/files";

export default function Store() {
  return (
    <>
      <CodePreview title="Desktop Layout" code={layoutLg}>
        <div className="relative h-80 w-full border overflow-hidden">
          <StoreLayoutLg />
        </div>
      </CodePreview>
      <CodePreview title="Mobile Layout" code={layoutSm}>
        <div className="relative h-80 w-full border overflow-hidden">
          <StoreLayoutSm />
        </div>
      </CodePreview>
    </>
  );
}

const layoutLg = readFileContents("src/components/layout/StoreLayoutLg.tsx");
const layoutSm = readFileContents("src/components/layout/StoreLayoutSm.tsx");
