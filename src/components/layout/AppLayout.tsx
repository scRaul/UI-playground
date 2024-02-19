"use client";
import LinkItem, { LinkItemOpt, NestedGroup } from "../navigation/LinkItem";
import Collapsible from "@/components/cards/Collapsible";
import { useEffect, useState } from "react";
import TopPanel from "../panels/TopPanel";
import Logo from "../navigation/Logo";
import SlidingPanel from "../panels/SlidingPanel";
import { usePathname } from "next/navigation";
import { AlignJustify } from "lucide-react";

interface AppLayoutProps {
  navGroups: (NestedGroup | LinkItemOpt[])[];
}

export default function AppLayout(props: AppLayoutProps) {
  const [closeSideBar, setCloseSideBar] = useState(true);
  const pathname = usePathname();
  useEffect(() => {
    setCloseSideBar(true);
  }, [pathname]);
  const group = props.navGroups;
  const renderNavItems = (navGroups: (NestedGroup | LinkItemOpt[])[]) => {
    return navGroups.map((group, index) => {
      if (Array.isArray(group)) {
        return (
          <GetLinkItems key={`t-${index}`} links={group as LinkItemOpt[]} />
        );
      } else {
        return (
          <GetGroupedItems key={`t-${index}`} group={group as NestedGroup} />
        );
      }
    });
  };

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
        <nav className="pl-4 pt-5">{renderNavItems(props.navGroups)}</nav>
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

interface GetLinkProps {
  links: LinkItemOpt[];
}
function GetLinkItems(props: GetLinkProps) {
  return (
    <>
      {props.links.map((link, index) => (
        <LinkItem
          key={link.href}
          label={link.label}
          href={link.href}
          icon={link.icon}
          className="hover:text-blue-500"
        />
      ))}
    </>
  );
}
interface GroupProps {
  group: NestedGroup;
}
function GetGroupedItems(props: GroupProps) {
  const { group } = props;

  return (
    <CollapseWrapper label={group.group.label} icon={group.group.icon}>
      {group.links.map((item, index) => {
        if ("group" in item) {
          return (
            <GetGroupedItems key={`c-${index}`} group={item as NestedGroup} />
          );
        } else {
          return <GetLinkItems key={`c-${index}`} links={item} />;
        }
      })}
    </CollapseWrapper>
  );
}
