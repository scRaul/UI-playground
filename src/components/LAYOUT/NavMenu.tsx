import Link from "next/link";

export interface NavItem {
  href: string;
  label: string;
  icon?: React.ReactElement;
}
interface NavMenuProps {
  navItems: NavItem[];
}
export default function NavMenu(props: NavMenuProps) {
  return (
    <nav>
      {props.navItems.map((link, index) => (
        <div key={index} className="nav-item hover:bg-gray-500 rounded-md p-3">
          <Link href={link.href} className="flex items-center ">
            {link.icon ? link.icon : null}
            {link.label}
          </Link>
        </div>
      ))}
    </nav>
  );
}
