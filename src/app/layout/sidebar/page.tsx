import CodePreview from "@/components/CARDS/CodePreview";

import SideLayout from "@/components/LAYOUT/SideLayout";
import SideBarEx from "@/components/Page/SideBarEx";

function SideBarPage() {
  return (
    <>
      <CodePreview title="SideBar.tsx" code={code} isClientComponent={true}>
        <SideBarEx />
      </CodePreview>
      <CodePreview
        title="SideLayout.tsx"
        code={layout}
        isClientComponent={true}
      >
        <SideLayout />
      </CodePreview>
      ;
    </>
  );
}

export default SideBarPage;

const code = `
import { AlignJustify } from "lucide-react";

interface SideBarProps {
  className?: string;
  isClosed: boolean;
  setIsClosed: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function SideBar(props: SideBarProps) {
  return (
    <aside
      className={\`w-fit min-w-[200px] h-full transform
       absolute top-0 p-1 flex flex-col \${props.className}
      \${
         props.isClosed
           ? "-translate-x-full opacity-0 invisible"
           : "translate-x-0 opacity-100 visible"
       }
       transition-all duration-300 ease-in-out
       onTransition
       \`}
    >
      <header className=" pl-2 pr-1 flex gap-2 items-center justify-between">
        <div
          className="rounded-full hover:bg-slate-200 p-2"
          onClick={() => props.setIsClosed(!props.isClosed)}
        >
          <AlignJustify />
        </div>
        <div className="flex-grow">
          {/* replace with own logo */}
          <img src="/next.svg"></img>
        </div>
      </header>
      <div className="overflow-y-auto scrolly flex-grow">
        {/* add navigation here ?? */}
      </div>
      <footer className="max-w-[20ch] p-3">
        {/* add user links / website/company links here  */}
      </footer>
    </aside>
  );
}

`;

const layout = `
"use client";

import { AlignJustify } from "lucide-react";
import SideBar from "../LAYOUT/SideBar";
import { useState } from "react";

export default function SideLayout() {
  const [closeSideBar, setCloseSideBar] = useState(false);
  return (
    <div className="relative h-96 top-0 p-1">
      <header className=" pl-2 pr-1 flex gap-2 items-center justify-between w-fit min-w-[200px]">
        <div
          className="rounded-full hover:bg-slate-200 p-2"
          onClick={() => setCloseSideBar(false)}
        >
          <AlignJustify />
        </div>
        <div className="flex-grow">
          <img src="/next.svg"></img>
        </div>
      </header>
      <SideBar
        className="border bg-white"
        isClosed={closeSideBar}
        setIsClosed={setCloseSideBar}
      />
    </div>
  );
}
`;
