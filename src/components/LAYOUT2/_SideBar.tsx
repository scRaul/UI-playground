"use client";
import {
  AlignJustify,
  Blocks,
  BookImage,
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
  RectangleHorizontal,
  RectangleVertical,
  Shapes,
  SquareStack,
  Table,
  Tags,
  Terminal,
  Type,
  Workflow,
} from "lucide-react";
import NavMenu from "./NavMenu";
import { NavItem } from "./NavMenu";
import HoverBttn from "../BUTTONS/HoverBttn";
import { useState } from "react";
import Collapsible from "../CONTAINERS/Collapsible";
import Link from "next/link";

function _SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleBar() {
    setIsOpen(!isOpen);
  }

  return (
    <div
      className={`fixed top-0 left-0 m-0 w-fit ${
        isOpen ? "h-full  bg-gray-100 shadow-2xl" : "h-fit bg-transparent"
      } 
       p-2 flex flex-col transition-transform duration-300 `}
    >
      <div id="top" className="flex justify-center items-center">
        <HoverBttn onClick={toggleBar}>
          <AlignJustify size={28} color="red" />
        </HoverBttn>
        <Link
          href="/"
          className={` cursor-pointer flex-grow flex ${isOpen ? "" : "hidden"}`}
        >
          <div id="logo">
            <Shapes />
          </div>
          UI Library
        </Link>
      </div>
      <div id="mid" className={`${isOpen ? "" : "hidden"}`}>
        <Collapsible label={"HTML Ref"} icon={<Code />}>
          <NavMenu navItems={htmlNavs} />
        </Collapsible>
        <Collapsible label={"Layouts"} icon={<Layout />}>
          <NavMenu navItems={layoutNavs} />
        </Collapsible>
        <Collapsible label={"Containers"} icon={<LayoutDashboard />}>
          <NavMenu navItems={contiainerNavs} />
        </Collapsible>
        <Collapsible label={"Navigation"} icon={<Navigation />}>
          <NavMenu navItems={navNavs} />
        </Collapsible>
        {/* <Collapsible label={"Input"} icon={<Pointer />}>
          <NavMenu navItems={inputNavs} />
        </Collapsible> */}
        <Collapsible label={"Cards"} icon={<GalleryHorizontalEnd />}>
          <NavMenu navItems={cardNavs} />
        </Collapsible>
      </div>
      <div id="bottom" className={`${isOpen ? "" : "hidden"}`}></div>
    </div>
  );
}
export default _SideBar;
const htmlNavs: NavItem[] = [
  {
    href: "/html/text",
    label: "Text",
    icon: <Type />,
  },
  {
    href: "/html/list",
    label: "List",
    icon: <Table />,
  },
  {
    href: "/html/structure",
    label: "structure",
    icon: <Layout />,
  },
  {
    href: "/html/input",
    label: "Input",
    icon: <MousePointer />,
  },
  {
    href: "/html/media",
    label: "Media",
    icon: <BookImage />,
  },
  {
    href: "/html/navigation",
    label: "Navigation",
    icon: <MapPin />,
  },
  {
    href: "/html/misc",
    label: "Misc.",
    icon: <SquareStack />,
  },
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
    href: "/layout/topbar",
    label: "TopBar",
    icon: <PanelTop />,
  },
  {
    href: "/layout/sidebar",
    label: "SideBar",
    icon: <PanelLeft />,
  },
  {
    href: "/layout/top-side-bar",
    label: "Top&SideBar",
    icon: <Layout />,
  },
];

const navNavs: NavItem[] = [
  {
    href: "/navigation/nav-menu",
    label: "NavMenu",
    icon: <ExternalLink />,
  },
];

const inputNavs: NavItem[] = [
  {
    href: "/button/hover",
    label: "HoverBttn",
    icon: <MousePointerSquare />,
  },
  {
    href: "/button/collapsible",
    label: "Collapsible",
    icon: <PanelBottomClose />,
  },
];
const cardNavs: NavItem[] = [
  {
    href: "/card/code-preview",
    label: "CodePreview",
    icon: <Terminal />,
  },
];
