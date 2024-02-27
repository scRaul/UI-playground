import CodePreview from "@/components/cards/CodePreview";
import TopPanel from "@/components/panels/TopPanel";
import { readFileContents } from "@/lib/files";
import { GridBg, GridBgWrapped } from "@/components/Page/Util";

export default function HeaderPage() {
  return (
    <CodePreview
      title={"TopPanel.tsx"}
      code={code}
      className="border-orange-500 [&>header]:bg-orange-600"
    >
      <p>example with position="fixed"</p>
      <div className="relative w-full border">
        <GridBgWrapped />
        <TopPanel
          className="w-20 bg-[#0000ff99] border "
          position="absolute"
          zIndex={1}
        >
          <div className="py-3 ">Top Panel</div>
        </TopPanel>
      </div>
      <p>example with position="absolute"</p>
      <div className="relative w-full border h-80 overflow-auto scrolly">
        <GridBg />
        <TopPanel
          className="top-0 left-0 w-20 bg-[#0000ff99] border"
          position="absolute"
          zIndex={1}
        >
          <div className="py-3 ">Top Panel</div>
        </TopPanel>
      </div>
    </CodePreview>
  );
}

const code = readFileContents("src/components/panels/TopPanel.tsx");
