"use client";
import NavMenu from "@/components/navigation/NavMenu";
import { NavItem } from "@/components/navigation/NavMenu";
import {
  AlignJustify,
  Blocks,
  BookImage,
  Chrome,
  Code,
  ExternalLink,
  GalleryHorizontalEnd,
  Layout,
  LayoutDashboard,
  Link as ILink,
  MapPin,
  MousePointer,
  MousePointerSquare,
  Navigation,
  PanelBottomClose,
  PanelLeft,
  PanelRightClose,
  PanelTop,
  Search,
  SquareStack,
  Table,
  Terminal,
  Type,
  Workflow,
  Store,
} from "lucide-react";
import Collapsible from "@/components/containers/Collapsible";
import { useEffect, useState } from "react";
import Header from "../containers/Header";
import Logo from "../navigation/Logo";
import { SlideBar } from "../containers/Slide";
import { usePathname } from "next/navigation";
import { group } from "console";

interface CollapseNavGroup {
  icon?: React.ReactElement;
  name: string;
  links: NavItem[];
}

export default function HeaderSideLayout() {
  const [closeSideBar, setCloseSideBar] = useState(true);
  const pathname = usePathname();
  useEffect(() => {
    setCloseSideBar(true);
  }, [pathname]);
  return (
    <Header className="bg-inherit fixed shadow-black shadow-md top-0 left-0">
      <aside className="flex gap-2 items-center justify-around w-fit min-w-[200px]">
        <div
          className="rounded-full hover:bg-slate-200 p-2"
          onClick={() => setCloseSideBar(false)}
        >
          <AlignJustify />
        </div>
        <Logo href="/" />
      </aside>
      <SlideBar
        className="bg-inherit shadow-2xl shadow-black h-screen left-0 scrolly"
        isClosed={closeSideBar}
        direction="left"
      >
        <header className="flex gap-2 items-center justify-around w-fit min-w-[200px] mb-4">
          <div
            className="rounded-full hover:bg-slate-200 p-2"
            onClick={() => setCloseSideBar(true)}
          >
            <AlignJustify />
          </div>
          <Logo href="/" />
        </header>
        <NavMenu
          className="text-blue-600"
          itemClassName="hover:text-white p-2 pl-4"
          navItems={miscLinks}
        />
        <ColNavGroups colNavGroups={colNavGroups} />
      </SlideBar>
    </Header>
  );
}
interface ColNavProps {
  colNavGroups: CollapseNavGroup[];
}
function ColNavGroups(props: ColNavProps) {
  const colNavGroups = props.colNavGroups;
  return (
    <>
      {colNavGroups.map((group, index) => (
        <Collapsible
          label={group.name}
          icon={group.icon}
          className="text-gray-600 hover:text-white p-2 pl-4"
        >
          <NavMenu
            navItems={group.links}
            className="text-slate-600 border-l border-gray-100 ml-4 my-2"
            itemClassName="hover:text-blue-500 p-2"
          />
        </Collapsible>
      ))}
    </>
  );
}
const miscLinks: NavItem[] = [
  {
    href: "/intro",
    label: "Getting Started",
  },
];
const htmlLinks: NavItem[] = [
  {
    href: "/html/attributes",
    label: "Attributes",
    icon: <Blocks />,
  },
  {
    href: "/html/events",
    label: "Events",
    icon: <Workflow />,
  },
  {
    href: "/html/input",
    label: "Input",
    icon: <MousePointer />,
  },
  {
    href: "/html/list",
    label: "List",
    icon: <Table />,
  },
  {
    href: "/html/navigation",
    label: "Navigation",
    icon: <MapPin />,
  },
  {
    href: "/html/media",
    label: "Media",
    icon: <BookImage />,
  },
  {
    href: "/html/structure",
    label: "structure",
    icon: <Layout />,
  },
  {
    href: "/html/text",
    label: "Text",
    icon: <Type />,
  },

  {
    href: "/html/misc",
    label: "Misc.",
    icon: <SquareStack />,
  },
];
const contiainerLinks: NavItem[] = [
  {
    href: "/container/aside",
    label: "Aside",
    icon: <PanelLeft />,
  },
  {
    href: "/container/collapsible",
    label: "Collapsible",
    icon: <PanelBottomClose />,
  },
  {
    href: "/container/header",
    label: "Header",
    icon: <PanelTop />,
  },
  {
    href: "/container/sliders",
    label: "Sliders",
    icon: <PanelRightClose />,
  },
];
const layoutLinks: NavItem[] = [
  {
    href: "/layout/store",
    label: "Store",
    icon: <Store />,
  },
];

const navLinks: NavItem[] = [
  {
    href: "/navigation/logo",
    label: "Logo",
    icon: <Chrome />,
  },
  {
    href: "/navigation/nav-menu",
    label: "NavMenu",
    icon: <ILink />,
  },
  {
    href: "/navigation/search",
    label: "Search",
    icon: <Search />,
  },
];

const cardLinks: NavItem[] = [
  {
    href: "/card/code-preview",
    label: "CodePreview",
    icon: <Terminal />,
  },
];

const colNavGroups: CollapseNavGroup[] = [
  {
    icon: <Code />,
    name: "HTML REF",
    links: htmlLinks,
  },
  {
    icon: <Navigation />,
    name: "Navigation",
    links: navLinks,
  },
  {
    icon: <LayoutDashboard />,
    name: "Containers",
    links: contiainerLinks,
  },
  {
    icon: <Layout />,
    name: "Layout",
    links: layoutLinks,
  },
  {
    icon: <GalleryHorizontalEnd />,
    name: "Cards",
    links: cardLinks,
  },
];
