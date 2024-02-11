import Link from "next/link";

export interface NavItem {
  href?: string;
  label: string;
  icon?: React.ReactElement;
}
interface NavMenuProps {
  className?: string;
  itemClassName?: string;
  navItems: NavItem[];
  onHoverCallback?: (label: string) => void;
}
export default function NavMenu(props: NavMenuProps) {
  function handleItemHover(label: string) {
    if (props.onHoverCallback) {
      props.onHoverCallback(label);
    }
  }
  return (
    <nav className={` ${props.className}`}>
      {props.navItems.map((link, index) => (
        <Link
          href={link.href ? link.href : ""}
          key={index}
          className={`flex items-center gap-1 ${props.itemClassName}`}
          onMouseEnter={() => handleItemHover(link.label)}
        >
          {link.icon ? link.icon : null}
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
