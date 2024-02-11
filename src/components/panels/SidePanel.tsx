interface PanelProps {
  className?: string;
  children: React.ReactNode;
  position: "absolute" | "fixed";
  zIndex?: number;
}
export default function SidePanel(props: PanelProps) {
  return (
    <aside
      className={`${props.position} h-full w-fit top-0 flex flex-col overflow-y-auto ${props.className}`}
      style={{ zIndex: props.zIndex ? props.zIndex : 100 }}
    >
      {props.children}
    </aside>
  );
}
