interface HeaderProps {
  className?: string;
  children: React.ReactNode;
}
export default function Header(props: HeaderProps) {
  return (
    <header
      className={`flex gap-1 w-full  top-0 left-0 ${props.className}`}
      style={{ zIndex: 99 }}
    >
      {props.children}
    </header>
  );
}
