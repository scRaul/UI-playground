import CodePreview from "@/components/cards/CodePreview";
import BottomPanel from "@/components/panels/BottomPanel";
import { readFileContents } from "@/lib/files";
import BottomPanelEx from "@/components/Page/Panels/BottomPanelEx";

export default function BottomPanelPage() {
  return (
    <>
      <CodePreview title="BottomPanel.tsx" code={code}>
        <div className="relative w-full h-80 border">
          <BottomPanel className="border" position="absolute" zIndex={1}>
            <div className="font-bold">
              <div>Home</div>
              <div>Projects</div>
              <div>About</div>
            </div>
          </BottomPanel>
        </div>
      </CodePreview>
      <CodePreview title="example" code={example}>
        <BottomPanelEx />
      </CodePreview>
    </>
  );
}
const code = readFileContents("src/components/panels/BottomPanel.tsx");
const example = readFileContents(
  "src/components/Page/Panels/BottomPanelEx.tsx"
);
