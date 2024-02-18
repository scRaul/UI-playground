import {
  BasicGroup,
  LinkItemOpt,
  NestedGroup,
} from "@/components/navigation/LinkItem";

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
  ExternalLink,
} from "lucide-react";

// [ LINK_ITEM_OPT[] ]
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
//END [ LINK_ITEM_OPT[] ]

// [ EVENTGROUP ]
const EventGroup: NestedGroup = {
  group: { label: "Events", icon: <Workflow /> },
  links: [EventLinks],
};
const HTMLGroup: NestedGroup = {
  group: { label: "HTML Refs", icon: <Code /> },
  links: [AttributeLinks, EventGroup, HtmlLinks],
};
const NavigationGroup: NestedGroup = {
  group: { label: "Navigation", icon: <Navigation /> },
  links: [NavigationLinks],
};
const PanelGroup: NestedGroup = {
  group: { label: "Panels", icon: <LayoutPanelLeft /> },
  links: [PanelLinks],
};
const LayoutGroup: NestedGroup = {
  group: { label: "Layouts", icon: <Layout /> },
  links: [LayoutLinks],
};
const CardGroup: NestedGroup = {
  group: { label: "Cards", icon: <GalleryHorizontalEnd /> },
  links: [CardLinks],
};
//END [ EVENTGROUP]
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
// [ FOOTER GROUPS]
export const footerGroups: BasicGroup[] = [
  {
    label: "Contact",
    links: [
      {
        href: "https://www.linkedin.com/in/raul-rl/",
        label: "LinkedIn",
        icon: <ExternalLink size={14} />,
      },
    ],
  },
];

// END FOOTER LINKS
