import CodePreview from "@/components/cards/CodePreview";
import SidePanel from "@/components/panels/SidePanel";
import { readFileContents } from "@/lib/files";
import SidePanelEx from "@/components/Page/Panels/SidePanelEx";

export default function SidePanelPage() {
  return (
    <>
      <CodePreview title="SidePanel.tsx" code={code}>
        <div className="relative w-full h-80 border">
          <SidePanel className="border right-0" position="absolute" zIndex={1}>
            <div className="font-bold">
              <div>Home</div>
              <div>Projects</div>
              <div>About</div>
            </div>
          </SidePanel>
        </div>
      </CodePreview>
      <CodePreview title="example" code={example}>
        <SidePanelEx />
      </CodePreview>
    </>
  );
}
const code = readFileContents("src/components/panels/SidePanel.tsx");
const example = readFileContents("src/components/Page/Panels/SidePanelEx.tsx");
