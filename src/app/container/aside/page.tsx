import CodePreview from "@/components/cards/CodePreview";
import Aside from "@/components/containers/Aside";
import Logo from "@/components/navigation/Logo";

export default function AsidePage() {
  return (
    <>
      <CodePreview title="Aside.tsx" code={code}>
        <div className="relative w-full h-80 border">
          <Aside className="border">
            <div className="font-bold">
              <div>Home</div>
              <div>Projects</div>
              <div>About</div>
            </div>
          </Aside>
        </div>
      </CodePreview>
      <CodePreview title="example" code={example}>
        <div className="relative w-full h-80 border">
          <Aside className="border min-w-[100px]">
            <header className="border-b p-1">
              <Logo href="" />
            </header>
            <div className="font-bold pt-4">
              <div className="hover:bg-[#ffffff33] pl-4">Home</div>
              <div className="hover:bg-[#ffffff33] pl-4">Projects</div>
              <div className="hover:bg-[#ffffff33] pl-4">About</div>
            </div>
          </Aside>
        </div>
      </CodePreview>
    </>
  );
}
const code = `
interface AsideProps {
  className?: string;
  children: React.ReactNode;
}
export default function Aside(props: AsideProps) {
  return (
    <aside
      className={\`absolute h-full w-fit top-0 flex flex-col overflow-y-auto \${props.className}\`}
    >
      {props.children}
    </aside>
  );
}
`;
const example = `
<Aside className="border min-w-[100px]">
    <header className="border-b p-1">
        <Logo href="" />
    </header>
    <div className="font-bold pt-4">
        <div className="hover:bg-[#ffffff33] pl-4">Home</div>
        <div className="hover:bg-[#ffffff33] pl-4">Projects</div>
        <div className="hover:bg-[#ffffff33] pl-4">About</div>
    </div>
</Aside>
`;
