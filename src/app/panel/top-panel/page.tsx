import CodePreview from "@/components/cards/CodePreview";
import TopPanel from "@/components/panels/TopPanel";
import Logo from "@/components/navigation/Logo";

export default function HeaderPage() {
  return (
    <>
      <CodePreview title="Header.tsx" code={code}>
        <div className="h-80 w-full relative border">
          <TopPanel className="px-4 py-1 border-b">
            <div>Home</div>
            <div>Projects</div>
            <div>About</div>
          </TopPanel>
        </div>
      </CodePreview>
      <CodePreview title="example" code={example}>
        <div className="h-80 w-full relative border">
          <TopPanel className="px-4 py-1 border-b">
            <Logo href="" />
            <div className="flex-grow"></div>
            <div className="font-bold text-xl hover:underline">Home</div>
            <div className="font-bold text-xl hover:underline">Projects</div>
            <div className="font-bold text-xl hover:underline">About</div>
          </TopPanel>
        </div>
      </CodePreview>
    </>
  );
}

const code = `
interface HeaderProps {
  className?: string;
  children: React.ReactNode;
}
export default function Header(props: HeaderProps) {
  return (
    <header
      className={\`flex gap-1 w-full min-h-fit items-center top-0 left-0 \${props.className}\`}
      style={{ zIndex: 10 }}
    >
      {props.children}
    </header>
  );
}
`;
const example = `
<Header className="px-4 py-1 border-b">
  <Logo href="" />
  <div className="flex-grow"></div>
  <div className="font-bold text-xl hover:underline">Home</div>
  <div className="font-bold text-xl hover:underline">Projects</div>
  <div className="font-bold text-xl hover:underline">About</div>
</Header>
`;
