interface PanelProps {
  className?: string;
  children: React.ReactNode;
  position: "absolute" | "fixed";
  zIndex?: number;
}
export default function TopPanel(props: PanelProps) {
  return (
    <header
      className={`${props.position} flex gap-1 w-full  top-0 left-0 ${props.className}`}
      style={{ zIndex: props.zIndex ? props.zIndex : 99 }}
    >
      {props.children}
    </header>
  );
}
