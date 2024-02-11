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
          itemClassName="hover:text-white p-2"
          navItems={miscNavs}
        />
        <Collapsible
          className="text-gray-600 hover:text-white p-2"
          label={"HTML Ref"}
          icon={<Code />}
          startClosed={true}
        >
          <NavMenu
            className="text-slate-600 border-l border-gray-100 mt-4"
            itemClassName="hover:text-blue-500"
            navItems={htmlNavs}
          />
        </Collapsible>
        <Collapsible
          className="text-gray-600 hover:text-white p-2"
          label={"Navigation"}
          icon={<Navigation />}
          startClosed={true}
        >
          <NavMenu
            className="text-slate-600 border-l border-gray-100 mt-4"
            itemClassName="hover:text-blue-500"
            navItems={navNavs}
          />
        </Collapsible>
        <Collapsible
          className="text-gray-600 hover:text-white p-2"
          label={"Containers"}
          icon={<LayoutDashboard />}
          startClosed={true}
        >
          <NavMenu
            className="text-slate-600 border-l border-gray-100 mt-4"
            itemClassName="hover:text-blue-500"
            navItems={contiainerNavs}
          />
        </Collapsible>
        <Collapsible
          className="text-gray-600 hover:text-white p-2"
          label={"Layouts"}
          icon={<Layout />}
          startClosed={true}
        >
          <NavMenu
            className="text-slate-600 border-l border-gray-100 mt-4"
            itemClassName="hover:text-blue-500"
            navItems={layoutNavs}
          />
        </Collapsible>
        <Collapsible
          className="text-gray-600 hover:text-white p-2"
          label={"Cards"}
          icon={<GalleryHorizontalEnd />}
          startClosed={true}
        >
          <NavMenu
            className="text-slate-600 border-l border-gray-100 mt-4"
            itemClassName="hover:text-blue-500"
            navItems={cardNavs}
          />
        </Collapsible>
      </SlideBar>
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
const layoutNavs: NavItem[] = [
  {
    href: "/layout/store",
    label: "Store",
    icon: <Store />,
  },
];

const navNavs: NavItem[] = [
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

const cardNavs: NavItem[] = [
  {
    href: "/card/code-preview",
    label: "CodePreview",
    icon: <Terminal />,
  },
];
