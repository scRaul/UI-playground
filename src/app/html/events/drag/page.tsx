import OnDragEnter_LeaveEx from "@/components/Page/Events/Drag/OnDragEnter_LeaveEx";
import OnDragOver_Drop from "@/components/Page/Events/Drag/OnDragOver_Drop";
import OnDrag_EndEx from "@/components/Page/Events/Drag/OnDrag_EndEx";
import TouchEx from "@/components/Page/Events/Drag/TouchEx";
import { readFileContents } from "@/lib/files";
import CodePreview from "@/components/cards/CodePreview";

export default function Page() {
  return (
    <>
      <CodePreview title="OnDrag_EndEx" code={OnDrag_EndExtxt}>
        <OnDrag_EndEx />
      </CodePreview>
      <CodePreview title="OnDragEnter_LeaveEx" code={OnDragEnter_LeaveExtxt}>
        <OnDragEnter_LeaveEx />
      </CodePreview>
      <CodePreview title="OnDragOver_Drop" code={OnDragOver_Droptxt}>
        <OnDragOver_Drop />
      </CodePreview>
      <CodePreview title="TouchEx" code={TouchExtxt}>
        <TouchEx />
      </CodePreview>
    </>
  );
}
const OnDragEnter_LeaveExtxt = readFileContents(
  "src/components/Page/Events/Drag/OnDragEnter_LeaveEx.tsx"
);
const OnDragOver_Droptxt = readFileContents(
  "src/components/Page/Events/Drag/OnDragOver_Drop.tsx"
);
const OnDrag_EndExtxt = readFileContents(
  "src/components/Page/Events/Drag/OnDrag_EndEx.tsx"
);
const TouchExtxt = readFileContents(
  "src/components/Page/Events/Drag/TouchEx.tsx"
);
