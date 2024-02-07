interface HeaderProps {
  className?: string;
  children: React.ReactNode;
}
export default function Header(props: HeaderProps) {
  return (
    <header
      className={`flex gap-1 w-full min-h-fit items-center top-0 left-0 ${props.className}`}
      style={{ zIndex: 10 }}
    >
      {props.children}
    </header>
  );
}
