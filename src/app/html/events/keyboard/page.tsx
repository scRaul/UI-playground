import OnKeyDown from "@/components/Page/Events/Keyboard/OnKeyDown";
import OnKeyUp from "@/components/Page/Events/Keyboard/OnKeyUp";
import { readFileContents } from "@/lib/files";
import CodePreview from "@/components/cards/CodePreview";

export default function Page() {
  return (
    <>
      <CodePreview title="OnKeyDown" code={OnKeyDowntxt}>
        <OnKeyDown />
      </CodePreview>
      <CodePreview title="OnKeyUp" code={OnKeyUptxt}>
        <OnKeyUp />
      </CodePreview>
    </>
  );
}
const OnKeyDowntxt = readFileContents(
  "src/components/Page/Events/Keyboard/OnKeyDown.tsx"
);
const OnKeyUptxt = readFileContents(
  "src/components/Page/Events/Keyboard/OnKeyUp.tsx"
);
