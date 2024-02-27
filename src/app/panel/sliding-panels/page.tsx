import { AbsSlideEx, FixedSlideEx } from "@/components/Page/Panels/SlideEx";
import CodePreview from "@/components/cards/CodePreview";
import { readFileContents } from "@/lib/files";

export default function SlidersPage() {
  return (
    <>
      <CodePreview
        title={"SlidingPanel.tsx"}
        code={code}
        className="border-purple-500 [&>header]:bg-purple-600"
      >
        <p>example with position="fixed"</p>
        <FixedSlideEx />
        <p>example with position="absolute"</p>
        <AbsSlideEx />
      </CodePreview>
      <CodePreview
        title="getSlideTransform"
        className="[&>header]:bg-slate-500"
        code={slide}
      >
        //slide function
      </CodePreview>
    </>
  );
}
const code = readFileContents("src/components/panels/SlidingPanel.tsx");
const slide = readFileContents("src/lib/slide.ts");
