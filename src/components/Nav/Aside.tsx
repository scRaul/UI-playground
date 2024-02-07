interface AsideProps {
  className?: string;
  children: React.ReactNode;
}
export default function Aside(props: AsideProps) {
  return (
    <aside className={`absolute w-fit top-0 flex flex-col ${props.className}`}>
      {props.children}
    </aside>
  );
}
