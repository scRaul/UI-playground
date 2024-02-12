"use client";
import LinkItem from "../navigation/LinkItem";
import {
  AlignJustify,
  Blocks,
  BookImage,
  Chrome,
  Code,
  Layout,
  Link as ILink,
  MapPin,
  MousePointer,
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
  Link,
  Home,
  Navigation,
  ChevronDownSquare,
  PanelBottom,
  FastForward,
} from "lucide-react";
import Collapsible from "@/components/cards/Collapsible";
import { useEffect, useState } from "react";
import TopPanel from "../panels/TopPanel";
import Logo from "../navigation/Logo";
import SlidingPanel from "../panels/SlidingPanel";
import { usePathname } from "next/navigation";

export default function AppLayout() {
  const [closeSideBar, setCloseSideBar] = useState(true);
  const pathname = usePathname();
  useEffect(() => {
    setCloseSideBar(true);
  }, [pathname]);
  return (
    <>
      <TopPanel
        className="bg-inherit shadow-black shadow-md left-0"
        position="fixed"
        zIndex={95}
      >
        <aside className="flex gap-2 items-center justify-around w-fit min-w-[200px]">
          <div
            className="rounded-full hover:bg-slate-200 p-2"
            onClick={() => setCloseSideBar(false)}
          >
            <AlignJustify />
          </div>
          <Logo href="/" />
        </aside>
      </TopPanel>
      <SlidingPanel
        className="bg-inherit shadow-2xl shadow-black h-screen left-0 top-0 scrolly"
        isClosed={closeSideBar}
        panelType="Side"
        closeTowards="left"
        position="fixed"
        zIndex={100}
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
        <nav className="pl-4 pt-5">
          <LinkItem
            className="text-blue-600 hover:text-white"
            href="/intro"
            label="Getting Started"
          />
          <HTMLNavs />
          <NavNavs />
          <PanelNavs />
          <LayoutNavs />
        </nav>
      </SlidingPanel>
    </>
  );
}
interface CollapseWrapperProps {
  label: string;
  icon?: React.ReactElement;
  children: React.ReactNode;
}

function CollapseWrapper(props: CollapseWrapperProps) {
  return (
    <Collapsible
      label={props.label}
      icon={props.icon}
      className="pt-2 text-gray-600"
      headerClassName="text-gray-500 hover:text-white cursor-pointer"
    >
      <div className="border-l ml-4 [&>*]:p-2">{props.children}</div>
    </Collapsible>
  );
}

function HTMLNavs() {
  return (
    <CollapseWrapper label="HTML REF" icon={<Code />}>
      <LinkItem
        className="hover:text-blue-500"
        label="Attributes"
        href="/html/attributes"
        icon={<Blocks />}
      />
      <CollapseWrapper label="Events" icon={<Workflow />}>
        <LinkItem
          className="hover:text-blue-500"
          label="Form/Input"
          href="/html/events/form"
        />
        <LinkItem
          className="hover:text-blue-500"
          label="Drag/Touch"
          href="/html/events/drag"
        />
        <LinkItem
          className="hover:text-blue-500"
          label="Mouse"
          href="/html/events/mouse"
        />
        <LinkItem
          className="hover:text-blue-500"
          label="Keyboard"
          href="/html/events/keyboard"
        />
      </CollapseWrapper>
      <LinkItem
        className="hover:text-blue-500"
        label="Input"
        href="/html/input"
        icon={<MousePointer />}
      />
      <LinkItem
        className="hover:text-blue-500"
        label="List"
        href="/html/list"
        icon={<Table />}
      />
      <LinkItem
        className="hover:text-blue-500"
        label="Navigation"
        href="/html/navigation"
        icon={<MapPin />}
      />
      <LinkItem
        className="hover:text-blue-500"
        label="Media"
        href="/html/media"
        icon={<BookImage />}
      />
      <LinkItem
        className="hover:text-blue-500"
        label="Structure"
        href="/html/structure"
        icon={<Layout />}
      />
      <LinkItem
        className="hover:text-blue-500"
        label="Text"
        href="/html/text"
        icon={<Type />}
      />
      <LinkItem
        className="hover:text-blue-500"
        label="misc"
        href="/html/misc"
        icon={<SquareStack />}
      />
    </CollapseWrapper>
  );
}

function NavNavs() {
  return (
    <CollapseWrapper label="Navigation" icon={<Navigation />}>
      <LinkItem
        className="hover:text-blue-500"
        label="LinkItem"
        href="/navigation/link-item"
        icon={<ILink />}
      />
      <LinkItem
        className="hover:text-blue-500"
        label="Logo"
        href="/navigation/logo"
        icon={<Home />}
      />
      <LinkItem
        className="hover:text-blue-500"
        label="Search"
        href="/navigation/search"
        icon={<Search />}
      />
    </CollapseWrapper>
  );
}

function PanelNavs() {
  return (
    <CollapseWrapper label="Panels" icon={<Code />}>
      <LinkItem
        className="hover:text-blue-500"
        label="BottomPanel"
        href="/panel/bottom-panel"
        icon={<PanelBottom />}
      />
      <LinkItem
        className="hover:text-blue-500"
        label="SidePanel"
        href="/panel/side-panel"
        icon={<PanelLeft />}
      />
      <LinkItem
        className="hover:text-blue-500"
        label="TopPanel"
        href="/panel/top-panel"
        icon={<PanelTop />}
      />
      <LinkItem
        className="hover:text-blue-500"
        label="SlidingPanels"
        href="/panel/sliding-panels"
        icon={<PanelRightClose />}
      />
    </CollapseWrapper>
  );
}
function LayoutNavs() {
  return (
    <CollapseWrapper label="Layouts" icon={<Layout />}>
      <LinkItem
        className="hover:text-blue-500"
        label="Media"
        href="/layout/media"
        icon={<FastForward />}
      />
      <LinkItem
        className="hover:text-blue-500"
        label="Store"
        href="/layout/store"
        icon={<Store />}
      />
    </CollapseWrapper>
  );
}
function CardNavs() {
  return (
    <LinkItem
      className="hover:text-blue-500"
      label="Collapsible"
      href="/card/collapsible"
      icon={<ChevronDownSquare />}
    />
  );
}
