import CodePreview from "@/components/CARDS/CodePreview";
import HorizontalBar from "@/components/CONTAINERS/HorizontalBar";

export default function HorizontalBarPage() {
  const code = `interface HorizontalBarProps {
  className?: string;
  children: React.ReactNode;
}
function HorizontalBar(props: HorizontalBarProps) {
  return (
    <div
      className={\`flex gap-1 items-center w-full h-fit p-3 justify-between \${props.className}\`}
    >
      {props.children}
    </div>
  );
}
export default HorizontalBar;   
  `;
  const page = `
  //...
  import HorizontalBar from "@/components/CONTAINERS/HorizontalBar";
  //...
    return (
    //...
        <HorizontalBar className="shadow-xl bg-gray-200 rounded">
            <div>start</div>
            <div>ce nter</div>
            <div>end</div>
        </HorizontalBar>
    //...
    );
  `;
  return (
    <>
      <CodePreview title="HorizontalBar.tsx" code={code}>
        <HorizontalBar className="border-2 rounded">
          <div>start</div>
          <div>center</div>
          <div>end</div>
        </HorizontalBar>
      </CodePreview>
      <CodePreview title="@/page.tsx" code={page} disableNumbers={true}>
        <HorizontalBar className="shadow-xl bg-gray-200 rounded">
          <div>start</div>
          <div>center</div>
          <div>end</div>
        </HorizontalBar>
      </CodePreview>
    </>
  );
}
