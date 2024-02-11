import CodePreview from "@/components/cards/CodePreview";
import TopPanel from "@/components/panels/TopPanel";
import { readFileContents } from "@/lib/files";
import TopPanelEx from "@/components/Page/Panels/TopPanelEx";

export default function HeaderPage() {
  return (
    <>
      <CodePreview title="TopPanel.tsx" code={code}>
        <div className="h-80 w-full relative border">
          <TopPanel
            className="px-4 py-1 border-b"
            position="absolute"
            zIndex={1}
          >
            <div>Home</div>
            <div>Projects</div>
            <div>About</div>
          </TopPanel>
        </div>
      </CodePreview>
      <CodePreview title="example" code={example}>
        <TopPanelEx />
      </CodePreview>
    </>
  );
}

const code = readFileContents("src/components/panels/TopPanel.tsx");
const example = readFileContents("src/components/Page/Panels/TopPanelEx.tsx");
