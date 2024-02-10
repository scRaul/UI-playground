import CodePreview from "@/components/cards/CodePreview";
import Collapsible from "@/components/containers/Collapsible";

import { Folder, MousePointerClick } from "lucide-react";

export default function CollapsiblePage() {
  return (
    <>
      <CodePreview title="Collapsible.tsx" code={code}>
        <Collapsible label="click me" icon={<MousePointerClick />}>
          <h1> Hello There</h1>
        </Collapsible>
      </CodePreview>
      <CodePreview title="example" code={ex}>
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
      </CodePreview>
    </>
  );
}
const code = `"use client";
import { ChevronDown, ChevronRight, MousePointer } from "lucide-react";
import { useState } from "react";

interface CollapsibleProps {
  className?: string;
  headerClassName?: string;
  icon?: React.ReactElement;
  label: string;
  children: React.ReactNode;
  startClosed?: boolean;
}

function Collapsible(props: CollapsibleProps) {
  const [collapsed, setCollapsed] = useState<boolean>(
    props.startClosed ? props.startClosed : true
  );

  return (
    <div className={props.className}>
      <header
        className={\`flex items-center justify-center \${props.headerClassName}\`}
        onClick={() => setCollapsed(!collapsed)}
      >
        {props.icon && <div className="mr-1">{props.icon}</div>}
        <div className="font-semibold">{props.label}</div>
        <div className="flex-grow"></div>
        {collapsed ? <ChevronRight /> : <ChevronDown />}
      </header>
      {!collapsed && props.children}
    </div>
  );
}

export default Collapsible;`;

const ex = `
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
`;
