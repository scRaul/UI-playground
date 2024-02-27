import DetailsBasic from "@/components/Page/Cards/DetailsBasic";
import Module from "@/components/Page/Cards/Module";

import CodePreview from "@/components/cards/CodePreview";
import Collapsible from "@/components/cards/Collapsible";
import { readFileContents } from "@/lib/files";

import { Folder, MousePointerClick } from "lucide-react";

export default function CollapsiblePage() {
  return (
    <>
      <CodePreview title="<details>" code={detailsBasic}>
        <DetailsBasic />
      </CodePreview>
      <CodePreview title="ModuleComponents.tsx" code={""}>
        <Module />
      </CodePreview>
      {/* <CodePreview title="Collapsible.tsx" code={code}>
        <Collapsible label="click me" icon={<MousePointerClick />}>
          <h1> Hello There</h1>
        </Collapsible>
      </CodePreview> */}
      {/* <CodePreview title="example" code={ex}>
        <Collapsible label="App" className="" icon={<Folder />}>
          <div className="pl-10">
            <Collapsible label="Container" className="" icon={<Folder />}>
              <div className="pl-10">
                <div>page.tsx</div>
              </div>
            </Collapsible>
            <div>page.tsx</div>
            <div>layout.tsx</div>
            <div>global.css</div>
          </div>
        </Collapsible>
      </CodePreview> */}
    </>
  );
}

const detailsBasic = readFileContents(
  "src/components/Page/Cards/DetailsBasic.tsx"
);
const code = readFileContents("src/components/cards/Collapsible.tsx");
const ex = readFileContents("src/components/cards/Collapsible.tsx");
