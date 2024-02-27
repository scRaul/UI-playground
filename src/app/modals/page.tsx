import ModalEx from "@/components/Page/Modals/ModalExamples";
import CodePreview from "@/components/cards/CodePreview";
import { readFileContents } from "@/lib/files";

export default function CenterModal() {
  return (
    <>
      <CodePreview
        title="Modal.tsx"
        code={center}
        className="[&>header]:bg-black text-white border-black"
      >
        <ModalEx />
      </CodePreview>
    </>
  );
}

const center = readFileContents("src/components/modals/Modal.tsx");
