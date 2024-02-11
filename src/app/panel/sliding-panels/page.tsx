import SimpleSlideEx from "@/components/Page/Panels/SimpleSlide";
import CodePreview from "@/components/cards/CodePreview";
import { readFileContents } from "@/lib/files";

export default function SlidersPage() {
  return (
    <>
      <CodePreview title="getSlideTransform" code={lib}>
        <small>//no preview</small>
      </CodePreview>
      <CodePreview title="SlidingPanel.tsx" code={code}>
        <SimpleSlideEx />
      </CodePreview>
      <CodePreview title="example" code={example}>
        <small>//example from above</small>
      </CodePreview>
    </>
  );
}
const lib = readFileContents("src/lib/css.ts");
const code = readFileContents("src/components/panels/SlidingPanel.tsx");
const example = readFileContents("src/components/Page/Panels/SimpleSlide.tsx");
