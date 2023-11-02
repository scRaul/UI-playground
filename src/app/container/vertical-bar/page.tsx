import CodePreview from "@/components/CARDS/CodePreview";
import VerticalBar from "@/components/CONTAINERS/VertricalBar";

export default function VerticalBarPage() {
  const code = `
interface VerticalBarProps {
  className?: string;
  children: React.ReactNode;
}
function VerticalBar(props: VerticalBarProps) {
  return (
    <div
      className={\`flex flex-col gap-1 items-center w-fit h-full p-3 justify-between \${props.className}\`}
    >
      {props.children}
    </div>
  );
}
export default VerticalBar;

  `;
  return (
    <>
      <CodePreview title="VerticalBar.tsx" code={code}>
        <div className="h-5/6 w-full">
          <VerticalBar className="border-2">
            <div>Start</div>
            <div>Center</div>
            <div>End</div>
          </VerticalBar>
        </div>
      </CodePreview>
    </>
  );
}
