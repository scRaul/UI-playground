interface PanelProps {
  className?: string;
  children: React.ReactNode;
  position: "absolute" | "fixed";
  zIndex?: number;
}
export default function BottomPanel(props: PanelProps) {
  const z = props.zIndex || 99;
  return (
    <footer
      className={props.className}
      style={{
        zIndex: z,
        position: props.position,
        display: "flex",
        bottom: 0,
        width: "100%",
      }}
    >
      {props.children}
    </footer>
  );
}
