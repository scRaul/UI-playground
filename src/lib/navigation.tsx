import LinkItem from "@/components/navigation/LinkItem";
import { group } from "console";
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
  GalleryHorizontalEnd,
  LayoutPanelLeft,
  List,
} from "lucide-react";

export interface LinkItemOpt {
  label: string;
  href?: string;
  icon?: React.ReactElement;
}
export interface LinkGroup {
  group: LinkItemOpt;
  links: (LinkGroup | LinkItemOpt[])[];
}
const StartLinks: LinkItemOpt[] = [
  { href: "/intro", label: "Getting Started" },
];
const AttributeLinks: LinkItemOpt[] = [
  { href: "/html/attributes", label: "Attributes", icon: <Blocks /> },
];
const EventLinks: LinkItemOpt[] = [
  { href: "/html/events/form", label: "Form Events" },
  { href: "/html/events/drag", label: "Drag Events" },
  { href: "/html/events/mouse", label: "Mouse Events" },
  { href: "/html/events/keyboard", label: "Keyboard Events" },
];
const HtmlLinks: LinkItemOpt[] = [
  { href: "/html/input", label: "Inputs", icon: <MousePointer /> },
  { href: "/html/list", label: "Lists", icon: <Table /> },
  { href: "/html/navigation", label: "Navigation", icon: <MapPin /> },
  { href: "/html/media", label: "Media", icon: <BookImage /> },
  { href: "/html/structure", label: "Structure", icon: <Layout /> },
  { href: "/html/text", label: "Text", icon: <Type /> },
  { href: "/html/misc", label: "Misc", icon: <SquareStack /> },
];
const NavigationLinks: LinkItemOpt[] = [
  { href: "/navigation/link-item", label: "Link Item", icon: <ILink /> },
  { href: "/navigation/logo", label: "Logo", icon: <Home /> },
  { href: "/navigation/search", label: "Search", icon: <Search /> },
];
const PanelLinks: LinkItemOpt[] = [
  {
    href: "/panel/bottom-panel",
    label: "Bottom Pannel",
    icon: <PanelBottom />,
  },
  { href: "/panel/side-panel", label: "Side Panel", icon: <PanelLeft /> },
  { href: "/panel/top-panel", label: "Top Panel", icon: <PanelTop /> },
  {
    href: "/panel/sliding-panels",
    label: "Sliding Panel",
    icon: <PanelRightClose />,
  },
];
const LayoutLinks: LinkItemOpt[] = [
  { href: "/layout/media", label: "Media Layout", icon: <FastForward /> },
  { href: "/layout/store", label: "Store Layout", icon: <Store /> },
];
const CardLinks: LinkItemOpt[] = [
  {
    label: "CodePreview",
    href: "/card/code-preview",
    icon: <Terminal />,
  },

  {
    label: "Collapsible",
    href: "/card/collapsible",
    icon: <ChevronDownSquare />,
  },
  {
    label: "SortableList",
    href: "/card/sortable-list",
    icon: <List />,
  },
];

const EventGroup: LinkGroup = {
  group: { label: "Events", icon: <Workflow /> },
  links: [EventLinks],
};
const HTMLGroup: LinkGroup = {
  group: { label: "HTML Refs", icon: <Code /> },
  links: [AttributeLinks, EventGroup, HtmlLinks],
};
const NavigationGroup: LinkGroup = {
  group: { label: "Navigation", icon: <Navigation /> },
  links: [NavigationLinks],
};
const PanelGroup: LinkGroup = {
  group: { label: "Panels", icon: <LayoutPanelLeft /> },
  links: [PanelLinks],
};
const LayoutGroup: LinkGroup = {
  group: { label: "Layouts", icon: <Layout /> },
  links: [LayoutLinks],
};
const CardGroup: LinkGroup = {
  group: { label: "Cards", icon: <GalleryHorizontalEnd /> },
  links: [CardLinks],
};

export const UIAppNavs = [
  StartLinks,
  HTMLGroup,
  NavigationGroup,
  LayoutGroup,
  CardGroup,
];

export const UIAppSeq = [
  ...StartLinks,
  ...AttributeLinks,
  ...EventLinks,
  ...HtmlLinks,
  ...LayoutLinks,
  ...CardLinks,
];
