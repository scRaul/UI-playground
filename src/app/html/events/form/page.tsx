import OnBlur from "@/components/Page/Events/Form/OnBlur";
import OnChange from "@/components/Page/Events/Form/OnChange";
import OnContextMenu from "@/components/Page/Events/Form/OnContextMenu";
import OnFocus from "@/components/Page/Events/Form/OnFocus";
import OnInput from "@/components/Page/Events/Form/OnInput";
import OnInvalid from "@/components/Page/Events/Form/OnInvalid";
import OnReset from "@/components/Page/Events/Form/OnReset";
import OnSelect from "@/components/Page/Events/Form/OnSelect";
import OnSubmit from "@/components/Page/Events/Form/OnSubmit";
import { readFileContents } from "@/lib/files";
import CodePreview from "@/components/cards/CodePreview";

export default function Page() {
  return (
    <>
      <CodePreview title="OnBlur" code={OnBlurtxt}>
        <OnBlur />
      </CodePreview>
      <CodePreview title="OnChange" code={OnChangetxt}>
        <OnChange />
      </CodePreview>
      <CodePreview title="OnContextMenu" code={OnContextMenutxt}>
        <OnContextMenu />
      </CodePreview>
      <CodePreview title="OnFocus" code={OnFocustxt}>
        <OnFocus />
      </CodePreview>
      <CodePreview title="OnInput" code={OnInputtxt}>
        <OnInput />
      </CodePreview>
      <CodePreview title="OnInvalid" code={OnInvalidtxt}>
        <OnInvalid />
      </CodePreview>
      <CodePreview title="OnReset" code={OnResettxt}>
        <OnReset />
      </CodePreview>
      <CodePreview title="OnSelect" code={OnSelecttxt}>
        <OnSelect />
      </CodePreview>
      <CodePreview title="OnSubmit" code={OnSubmittxt}>
        <OnSubmit />
      </CodePreview>
    </>
  );
}
const OnBlurtxt = readFileContents(
  "src/components/Page/Events/Form/OnBlur.tsx"
);
const OnChangetxt = readFileContents(
  "src/components/Page/Events/Form/OnChange.tsx"
);
const OnContextMenutxt = readFileContents(
  "src/components/Page/Events/Form/OnContextMenu.tsx"
);
const OnFocustxt = readFileContents(
  "src/components/Page/Events/Form/OnFocus.tsx"
);
const OnInputtxt = readFileContents(
  "src/components/Page/Events/Form/OnInput.tsx"
);
const OnInvalidtxt = readFileContents(
  "src/components/Page/Events/Form/OnInvalid.tsx"
);
const OnResettxt = readFileContents(
  "src/components/Page/Events/Form/OnReset.tsx"
);
const OnSelecttxt = readFileContents(
  "src/components/Page/Events/Form/OnSelect.tsx"
);
const OnSubmittxt = readFileContents(
  "src/components/Page/Events/Form/OnSubmit.tsx"
);
