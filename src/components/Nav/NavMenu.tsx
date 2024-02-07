import Link from "next/link";

export interface NavItem {
  href: string;
  label: string;
  icon?: React.ReactElement;
}
interface NavMenuProps {
  className?: string;
  itemClassName?: string;
  navItems: NavItem[];
  handleClick?: () => void;
}
export default function NavMenu(props: NavMenuProps) {
  function handleItemClick() {
    if (props.handleClick) {
      props.handleClick();
    }
  }
  return (
    <nav className={`h-fit ml-3 ${props.className}`}>
      {props.navItems.map((link, index) => (
        <div
          key={index}
          className={` p-1 cursor-pointer ${props.itemClassName}`}
          onClick={handleItemClick}
        >
          <Link href={link.href} className="px-2 flex items-center gap-1">
            {link.icon ? link.icon : null}
            {link.label}
          </Link>
        </div>
      ))}
    </nav>
  );
}
