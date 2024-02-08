import CodePreview from "@/components/cards/CodePreview";
import Aside from "@/components/layout/Aside";
import { SideEx, SideLayoutEx, Test } from "@/components/Page/SideBarEx";

export default function SideBarPage() {
  return (
    <>
      <CodePreview title="Aside.tsx" code={aside}>
        <div className="h-80 border relative">
          <Aside className="border  px-2 py-4 h-full">
            <div className="font-mono text-xl">Side Content</div>
          </Aside>
        </div>
      </CodePreview>

      <CodePreview title="ExampleLayout" code={exlayout}>
        <div className="h-80 border relative">
          <Aside className="border-r px-2 py-4 h-full">
            <div className="font-mono text-xl">On Left</div>
          </Aside>
          <Aside className="border-l px-2 py-4 h-full right-0">
            <div className="font-mono text-xl">On Right</div>
          </Aside>
          <div className="w-full h-full px-10 flex flex-col">
            <div className="text-center">Main Content</div>
          </div>
        </div>
      </CodePreview>

      <CodePreview title="Sidebar.tsx" code={sidebar}>
        <SideEx />
      </CodePreview>

      <CodePreview title="SideLayoutExample.tsx" code={sidelayout}>
        <SideLayoutEx />
      </CodePreview>
    </>
  );
}

const aside = `
interface AsideProps {
  className?: string;
  children: React.ReactNode;
}
export default function Aside(props: AsideProps) {
  return (
    <aside
      className={\`w-fit
       absolute top-0 flex flex-col \${props.className}\`}
    >
      {props.children}
    </aside>
  );
}
`;

const exlayout = `
<Aside className="border-r border-white px-2 py-4 h-full bg-red-500">
  <div className="font-mono text-xl">On Left</div>
</Aside>
<Aside className="border-l border-white px-2 py-4 h-full right-0 bg-blue-500">
  <div className="font-mono text-xl">On Right</div>
</Aside>
<div className="w-full h-full px-10 flex flex-col">
  <div className="text-center">Main Content</div>
</div>
`;

const sidebar = `
import { AlignJustify } from "lucide-react";
import Logo from "./Logo";

interface SideBarProps {
  children: React.ReactNode;
  className?: string;
  isClosed: boolean;
  setIsClosed: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function SideBar(props: SideBarProps) {
  return (
    <aside
      className={\`w-fit min-w-[200px] h-screen transform
       absolute top-0 flex flex-col \${props.className}
       \${
         props.isClosed
           ? "-translate-x-full opacity-0 invisible"
           : "translate-x-0 opacity-100 visible"
       }
       transition-all duration-300 ease-in-out
       onTransition
       \`}
    >
      <header className="flex gap-2 items-center justify-around p-1">
        <div
          className="rounded-full hover:bg-slate-200 p-2"
          onClick={() => props.setIsClosed(!props.isClosed)}
        >
          <AlignJustify />
        </div>
        <Logo />
      </header>
      {props.children}
    </aside>
  );
}

`;

const sidelayout = `

export function SideLayoutEx() {
  const [closeSideBar, setCloseSideBar] = useState(false);
  return (
    <div className="relative h-80 top-0 p-1">
      <div
        className="ml-4 rounded-full hover:bg-slate-200 p-2 w-fit"
        onClick={() => setCloseSideBar(false)}
        hidden={!closeSideBar}
      >
        <AlignJustify />
      </div>
      <SideBar
        isClosed={closeSideBar}
        setIsClosed={setCloseSideBar}
        className="border"
      >
        <div className="mt-10 w-full hover:bg-slate-50 flex font-semibold text-lg hover:text-black">
          <div className="w-10"></div>
          <span className="">Home</span>
        </div>
        <div className="w-full hover:bg-slate-50 flex font-semibold text-lg hover:text-black">
          <div className="w-10"></div>
          <span className="">Trending</span>
        </div>
        <div className="w-full hover:bg-slate-50 flex font-semibold text-lg hover:text-black">
          <div className="w-10"></div>
          <span className="">Shopping</span>
        </div>
        <div className="w-full hover:bg-slate-50 flex font-semibold text-lg hover:text-black">
          <div className="w-10"></div>
          <span className="">Music</span>
        </div>
        <div className="w-full hover:bg-slate-50 flex font-semibold text-lg hover:text-black">
          <div className="w-10"></div>
          <span className="">TV</span>
        </div>
        <div className="w-full hover:bg-slate-50 flex font-semibold text-lg hover:text-black">
          <div className="w-10"></div>
          <span className="">Movies</span>
        </div>
        <div className="w-full hover:bg-slate-50 flex font-semibold text-lg hover:text-black">
          <div className="w-10"></div>
          <span className="">Games</span>
        </div>
        <div className="w-full hover:bg-slate-50 flex font-semibold text-lg hover:text-black">
          <div className="w-10"></div>
          <span className="">Sports</span>
        </div>
      </SideBar>
    </div>
  );
}
`;
