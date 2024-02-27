import CodePreview from "@/components/cards/CodePreview";
import BottomPanel from "@/components/panels/BottomPanel";
import { readFileContents } from "@/lib/files";

import { GridBg, GridBgWrapped } from "@/components/Page/Util";

export default function BottomPanelPage() {
  return (
    <CodePreview
      title="BottomPannel.tsx"
      className="border-yellow-500 [&>header]:bg-yellow-600"
      code={code}
    >
      <p>example w/positon = "fixed" </p>
      <div className="relative w-full border">
        <GridBgWrapped />
        <BottomPanel
          className="border-y border-black w-full h-20  bg-[#0000ff99]"
          position="absolute"
          zIndex={1}
        >
          <div className="w-full h-full flex items-end justify-center">
            Bottom panel
          </div>
        </BottomPanel>
      </div>
      <p className="mt-4">example w/ position="absolute"</p>
      <div className="relative w-full border h-80 overflow-auto scrolly">
        <GridBg />
        <BottomPanel
          className="w-full h-20  bg-[#0000ff99] border-t border-black"
          position="absolute"
          zIndex={1}
        >
          <div className="w-full h-full flex items-end justify-center">
            Bottom panel
          </div>
        </BottomPanel>
      </div>
    </CodePreview>
  );
}
const code = readFileContents("src/components/panels/BottomPanel.tsx");
