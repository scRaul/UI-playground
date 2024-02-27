interface PanelProps {
  className?: string;
  children: React.ReactNode;
  position: "absolute" | "fixed";
  zIndex?: number;
}
export default function SidePanel(props: PanelProps) {
  const z = props.zIndex || 99;
  return (
    <aside
      className={props.className}
      style={{
        zIndex: z,
        position: props.position,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        top: 0,
      }}
    >
      {props.children}
    </aside>
  );
}
