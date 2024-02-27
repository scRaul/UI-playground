import CodePreview from "@/components/cards/CodePreview";
import SidePanel from "@/components/panels/SidePanel";
import { readFileContents } from "@/lib/files";

import { GridBg, GridBgWrapped } from "@/components/Page/Util";

export default function SidePanelPage() {
  return (
    <CodePreview
      title={"SidePanel.tsx"}
      code={code}
      className="border-green-500 [&>header]:bg-green-600"
    >
      <p>example with position="fixed"</p>
      <div className="relative w-full border">
        <GridBgWrapped />
        <SidePanel
          className="w-20 bg-[#0000ff99] border "
          position="absolute"
          zIndex={1}
        >
          <div className="py-3 ">Side Panel</div>
        </SidePanel>
      </div>
      <p>example with position="absolute"</p>
      <div className="relative w-full border h-80 overflow-auto scrolly">
        <GridBg />
        <SidePanel
          className="top-0 left-0 w-20 bg-[#0000ff99] border"
          position="absolute"
          zIndex={1}
        >
          <div className="py-3 ">Side Panel</div>
        </SidePanel>
      </div>
    </CodePreview>
  );
}
const code = readFileContents("src/components/panels/SidePanel.tsx");
