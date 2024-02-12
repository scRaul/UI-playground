import CodePreview from "@/components/cards/CodePreview";
import MediaLayout from "@/components/layout/MediaLayout";
import { readFileContents } from "@/lib/files";

export default function MediaPage() {
  return (
    <>
      <CodePreview title="Media" code={layout}>
        <div className="relative h-96 w-full border overflow-hidden">
          <MediaLayout />
        </div>
      </CodePreview>
    </>
  );
}
const layout = readFileContents("src/components/layout/MediaLayout.tsx");
