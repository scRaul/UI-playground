import OnClickEx from "@/components/Page/Events/Mouse/OnClickEx";
import OnDoubleClickEx from "@/components/Page/Events/Mouse/OnDoubleClickEx";
import OnMouseDown_UpEx from "@/components/Page/Events/Mouse/OnMouseDown_UpEx";
import OnMouseMoveEx from "@/components/Page/Events/Mouse/OnMouseMoveEx";
import OnMouseOver_OutEx from "@/components/Page/Events/Mouse/OnMouseOver_OutEx";
import { readFileContents } from "@/lib/files";
import CodePreview from "@/components/cards/CodePreview";

export default function Page() {
  return (
    <>
      <CodePreview title="OnClickEx" code={OnClickExtxt}>
        <OnClickEx />
      </CodePreview>
      <CodePreview title="OnDoubleClickEx" code={OnDoubleClickExtxt}>
        <OnDoubleClickEx />
      </CodePreview>
      <CodePreview title="OnMouseDown_UpEx" code={OnMouseDown_UpExtxt}>
        <OnMouseDown_UpEx />
      </CodePreview>
      <CodePreview title="OnMouseMoveEx" code={OnMouseMoveExtxt}>
        <OnMouseMoveEx />
      </CodePreview>
      <CodePreview title="OnMouseOver_OutEx" code={OnMouseOver_OutExtxt}>
        <OnMouseOver_OutEx />
      </CodePreview>
    </>
  );
}
const OnClickExtxt = readFileContents(
  "src/components/Page/Events/Mouse/OnClickEx.tsx"
);
const OnDoubleClickExtxt = readFileContents(
  "src/components/Page/Events/Mouse/OnDoubleClickEx.tsx"
);
const OnMouseDown_UpExtxt = readFileContents(
  "src/components/Page/Events/Mouse/OnMouseDown_UpEx.tsx"
);
const OnMouseMoveExtxt = readFileContents(
  "src/components/Page/Events/Mouse/OnMouseMoveEx.tsx"
);
const OnMouseOver_OutExtxt = readFileContents(
  "src/components/Page/Events/Mouse/OnMouseOver_OutEx.tsx"
);
