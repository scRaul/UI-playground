import CodePreview from "@/components/CARDS/CodePreview";
import Collapsible from "@/components/CONTAINERS/Collapsible";
import { MousePointerClick } from "lucide-react";

export default function CollapsiblePage() {
  const code = `"use client";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface CollapsibleProps {
  icon?: React.ReactElement;
  label: string;
  children: React.ReactNode;
}

function Collapsible({ icon, label, children }: CollapsibleProps) {
  const [isCollapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <div className="border rounded p-2 h-fit">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleCollapse}
      >
        {icon && <div className="mr-2">{icon}</div>}
        <div className="font-semibold">{label}</div>
        {isCollapsed ? <ChevronRight /> : <ChevronDown />}
      </div>
      {isCollapsed ? null : <div className="mt-2">{children}</div>}
    </div>
  );
}

export default Collapsible;

`;
  const page = `//...
 import Collapsible from "@/components/CONTAINERS/Collapsible"; 
 //...
    return ( //...
          <Collapsible label="click me" icon={<MousePointerClick />}>
            <h1> Hello There</h1>
          </Collapsible>
      //...
      );
`;
  return (
    <>
      <CodePreview title="Collapsible.tsx" code={code} isClientComponent={true}>
        <Collapsible label="click me" icon={<MousePointerClick />}>
          <h1> Hello There</h1>
        </Collapsible>
      </CodePreview>
      <CodePreview title="@/page.tsx" code={page}>
        <Collapsible label="click me" icon={<MousePointerClick />}>
          <h1> Hello There</h1>
        </Collapsible>
      </CodePreview>
    </>
  );
}
