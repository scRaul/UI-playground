interface AsideProps {
  className?: string;
  children: React.ReactNode;
}
export default function SidePanel(props: AsideProps) {
  return (
    <aside
      className={`absolute h-full w-fit top-0 flex flex-col overflow-y-auto ${props.className}`}
    >
      {props.children}
    </aside>
  );
}
