import CodePreview from "@/components/cards/CodePreview";
import NavMenu, { NavItem } from "@/components/navigation/NavMenu";
import { Briefcase, Home, Phone, UserSquare } from "lucide-react";

export default function NavMenuPage() {
  return (
    <>
      <CodePreview title="NavMenu.tsx" code={code}>
        <NavMenu navItems={codeNavs} />
      </CodePreview>
      <CodePreview title="example" code={example}>
        <NavMenu
          navItems={pageNavs}
          className="flex"
          itemClassName="hover:bg-gray-200"
        />
      </CodePreview>
    </>
  );
}
const codeNavs: NavItem[] = [
  {
    href: "",
    label: "Home",
  },
  {
    href: "",
    label: "About",
  },
  {
    href: "",
    label: "Projects",
  },
  {
    href: "",
    label: "Contact",
  },
];

const pageNavs: NavItem[] = [
  {
    href: "",
    label: "Home",
    icon: <Home />,
  },
  {
    href: "",
    label: "About",
    icon: <UserSquare />,
  },
  {
    href: "",
    label: "Projects",
    icon: <Briefcase />,
  },
  {
    href: "",
    label: "Contact",
    icon: <Phone />,
  },
];
const code = `
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
}
export default function NavMenu(props: NavMenuProps) {
  return (
    <nav className={\`h-fit \${props.className}\`}>
      {props.navItems.map((link, index) => (
        <div key={index} className={\`rounded-md p-3  cursor-pointer  \${props.itemClassName}\`}>
          <Link href={link.href} className="flex items-center ">
            {link.icon ? link.icon : null}
            {link.label}
          </Link>
        </div>
      ))}
    </nav>
  );
}
`;
const example = `
import NavMenu, { NavItem } from "@/components/LAYOUT2/NavMenu";
import { Briefcase, Home, Phone, UserSquare } from "lucide-react";
function Example(){
  return (
       <NavMenu
          navItems={pageNavs}
          className="flex"
          itemClassName="hover:bg-gray-200"
        /> 
  );
};

const pageNavs: NavItem[] = [
  {
    href: "",
    label: "Home",
    icon: <Home />,
  },
  {
    href: "",
    label: "About",
    icon: <UserSquare />,
  },
  {
    href: "",
    label: "Projects",
    icon: <Briefcase />,
  },
  {
    href: "",
    label: "Contact",
    icon: <Phone />,
  },
]; 
`;
