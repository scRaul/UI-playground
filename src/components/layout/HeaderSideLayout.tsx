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
  MapPin,
  MousePointer,
  MousePointerSquare,
  Navigation,
  PanelBottomClose,
  PanelLeft,
  PanelTop,
  SquareStack,
  Table,
  Terminal,
  Type,
  Workflow,
} from "lucide-react";
import Collapsible from "@/components/containers/Collapsible";
import { useEffect, useState } from "react";
import Header from "./Header";
import Logo from "../navigation/Logo";
import SideBar from "./SideBar";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function HeaderSideLayout() {
  const [closeSideBar, setCloseSideBar] = useState(true);
  const pathname = usePathname();
  useEffect(() => {
    setCloseSideBar(true);
  }, [pathname]);
  return (
    <Header className="bg-inherit p-1 fixed">
      <header className="flex gap-2 items-center justify-around w-fit min-w-[200px]">
        <div
          className="rounded-full hover:bg-slate-200 p-2"
          onClick={() => setCloseSideBar(false)}
        >
          <AlignJustify />
        </div>
        <Logo href="/" />
      </header>
      <SideBar
        className="bg-inherit shadow-2xl h-screen min-w-[200px]"
        isClosed={closeSideBar}
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
          itemClassName="hover:text-white"
          navItems={miscNavs}
        />

        <Collapsible
          className="text-gray-600 hover:text-white"
          label={"HTML Ref"}
          icon={<Code />}
          startClosed={true}
        >
          <NavMenu
            className="text-slate-600 border-l border-gray-100"
            itemClassName="hover:text-blue-500"
            navItems={htmlNavs}
          />
        </Collapsible>
        <Collapsible
          className="text-gray-600 hover:text-white"
          label={"Containers"}
          icon={<LayoutDashboard />}
          startClosed={true}
        >
          <NavMenu
            className="text-slate-600 border-l border-gray-100"
            itemClassName="hover:text-blue-500"
            navItems={contiainerNavs}
          />
        </Collapsible>
        <Collapsible
          className="text-gray-600 hover:text-white"
          label={"Cards"}
          icon={<GalleryHorizontalEnd />}
          startClosed={true}
        >
          <NavMenu
            className="text-slate-600 border-l border-gray-100"
            itemClassName="hover:text-blue-500"
            navItems={cardNavs}
          />
        </Collapsible>
        <Collapsible
          className="text-gray-600 hover:text-white"
          label={"Navigation"}
          icon={<Navigation />}
          startClosed={true}
        >
          <NavMenu
            className="text-slate-600 border-l border-gray-100"
            itemClassName="hover:text-blue-500"
            navItems={navNavs}
          />
        </Collapsible>
        <Collapsible
          className="text-gray-600 hover:text-white"
          label={"Layouts"}
          icon={<Layout />}
          startClosed={true}
        >
          <NavMenu
            className="text-slate-600 border-l border-gray-100"
            itemClassName="hover:text-blue-500"
            navItems={layoutNavs}
          />
        </Collapsible>
      </SideBar>
    </Header>
  );
}
const miscNavs: NavItem[] = [
  {
    href: "/intro",
    label: "Getting Started",
  },
];
const htmlNavs: NavItem[] = [
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
const contiainerNavs: NavItem[] = [
  {
    href: "/container/collapsible",
    label: "Collapsible",
    icon: <PanelBottomClose />,
  },
];
const layoutNavs: NavItem[] = [
  {
    href: "/layout/sidebar",
    label: "SideBar",
    icon: <PanelLeft />,
  },
  {
    href: "/layout/topbar",
    label: "TopBar",
    icon: <PanelTop />,
  },

  // {
  //   href: "/layout/top-side-bar",
  //   label: "Top&SideBar",
  //   icon: <Layout />,
  // },
];

const navNavs: NavItem[] = [
  {
    href: "/navigation/nav-menu",
    label: "NavMenu",
    icon: <ExternalLink />,
  },
  {
    href: "/navigation/logo",
    label: "Logo",
    icon: <Chrome />,
  },
];

const cardNavs: NavItem[] = [
  {
    href: "/card/code-preview",
    label: "CodePreview",
    icon: <Terminal />,
  },
];
