import CodePreview from "@/components/cards/CodePreview";
import StoreLayout from "@/components/layout/StoreLayout";

export default function Store() {
  return (
    <>
      <CodePreview title="Apple Like" code={""}>
        <div className="relative h-60 w-full border overflow-hidden">
          <StoreLayout />
        </div>
      </CodePreview>
    </>
  );
}
