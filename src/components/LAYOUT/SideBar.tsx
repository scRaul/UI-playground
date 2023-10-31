"use client";
import {
  AlignJustify,
  ExternalLink,
  Layout,
  MousePointerSquare,
  Navigation,
  PanelBottomClose,
  PanelLeft,
  PanelTop,
  Pointer,
} from "lucide-react";
import NavMenu from "./NavMenu";
import { NavItem } from "./NavMenu";
import HoverBttn from "../BUTTONS/HoverBttn";
import { useState } from "react";
import Collapsible from "../BUTTONS/Collapsible";

function SideBar() {
  const [isOpen, setIsOpen] = useState(true);

  function toggleBar() {
    setIsOpen(!isOpen);
  }

  return (
    <div
      className={`fixed top-0 left-0 m-0 ${
        isOpen ? "h-full  bg-gray-100 shadow-2xl" : "h-fit bg-transparent"
      } 
       p-2 flex flex-col transition-transform duration-300 `}
    >
      <div id="top" className="flex justify-center items-center">
        <HoverBttn onClick={toggleBar}>
          <AlignJustify size={28} color="red" />
        </HoverBttn>
        <div
          className={`flex-grow h-6 bg-slate-200 ${isOpen ? "" : "hidden"}`}
        ></div>
      </div>
      <div id="mid" className={`${isOpen ? "" : "hidden"}`}>
        <Collapsible label={"Layouts"} icon={<Layout />}>
          <NavMenu navItems={layoutNavs} />
        </Collapsible>
        <Collapsible label={"Navigation"} icon={<Navigation />}>
          <NavMenu navItems={navNavs} />
        </Collapsible>
        <Collapsible label={"Input"} icon={<Pointer />}>
          <NavMenu navItems={inputNavs} />
        </Collapsible>
      </div>
      <div id="bottom" className={`${isOpen ? "" : "hidden"}`}></div>
    </div>
  );
}
export default SideBar;

const layoutNavs: NavItem[] = [
  {
    href: "",
    label: "TopBar",
    icon: <PanelTop />,
  },
  {
    href: "",
    label: "SideBar",
    icon: <PanelLeft />,
  },
  {
    href: "",
    label: "Top&SideBar",
    icon: <Layout />,
  },
];

const navNavs: NavItem[] = [
  {
    href: "",
    label: "NavMenu",
    icon: <ExternalLink />,
  },
];

const inputNavs: NavItem[] = [
  {
    href: "",
    label: "HoverBttn",
    icon: <MousePointerSquare />,
  },
  {
    href: "",
    label: "Collapsible",
    icon: <PanelBottomClose />,
  },
];
