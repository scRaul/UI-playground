import DragableEx from "@/components/Page/Cards/Dragable";
import CodePreview from "@/components/cards/CodePreview";

export default function CollapsiblePage() {
  return (
    <>
      <CodePreview title="dragable.tsx" code={""}>
        <DragableEx />
      </CodePreview>
    </>
  );
}
