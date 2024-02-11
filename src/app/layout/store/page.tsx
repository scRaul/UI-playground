import CodePreview from "@/components/cards/CodePreview";
import StoreLayout from "@/components/layout/StoreLayout";
import StoreLayoutLg from "@/components/layout/StoreLayoutLg";
import StoreLayoutSm from "@/components/layout/StoreLayoutSm";
import BottomPanel from "@/components/panels/BottomPanel";
import { readFileContents } from "@/lib/files";

export default function Store() {
  return (
    <>
      <CodePreview title="Desktop Layout" code={layoutLg}>
        <div className="relative h-80 w-full border overflow-hidden">
          <StoreLayoutLg />
          <BottomPanel
            position="absolute"
            className="p-2 bg-blue-500"
            zIndex={10}
          >
            <p>{" Only visible on screen.width > 768 px"}</p>
          </BottomPanel>
        </div>
      </CodePreview>
      <CodePreview title="Mobile Layout" code={layoutSm}>
        <div className="relative h-80 w-full border overflow-hidden">
          <StoreLayoutSm />
          <BottomPanel
            position="absolute"
            className="p-2 bg-blue-500"
            zIndex={10}
          >
            <p>{" Only visible on screen.width <= 768 px"}</p>
          </BottomPanel>
        </div>
      </CodePreview>

      <CodePreview title="Responsive Store Layout" code={layout}>
        <div className="relative h-80 w-full border overflow-hidden">
          <StoreLayout />
        </div>
      </CodePreview>
    </>
  );
}

const layout = readFileContents("src/components/layout/StoreLayout.tsx");
const layoutLg = readFileContents("src/components/layout/StoreLayoutLg.tsx");
const layoutSm = readFileContents("src/components/layout/StoreLayoutSm.tsx");
