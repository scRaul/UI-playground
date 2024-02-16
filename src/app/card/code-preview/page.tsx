import CodePreview from "@/components/cards/CodePreview";
import { readFileContents } from "@/lib/files";

export default function CodePreviewPage() {
  return (
    <CodePreview title="CodePreview" code={code}>
      <h1> //This Element itself </h1>
    </CodePreview>
  );
}

const code = readFileContents("src/components/cards/CodePreview.tsx");
