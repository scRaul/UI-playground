import CodePreview from "@/components/cards/CodePreview";
import StoreLayoutMD from "@/components/layout/StoreLayout";

export default function Store() {
  return (
    <>
      <CodePreview title="Desktop Layout" code={deskStore}>
        <div className="relative h-80 w-full border overflow-hidden">
          <StoreLayoutMD />
        </div>
      </CodePreview>
    </>
  );
}

const deskStore = `
"use client";
import { Apple, Search, ShoppingCart } from "lucide-react";
import Header from "../containers/Header";
import { SlideHeader } from "../containers/Slide";
import { useState } from "react";
import { SearchInput } from "../navigation/Search";
import { NavItem } from "../navigation/NavMenu";
import NavMenu from "../navigation/NavMenu";

interface GroupLinks {
  group: string;
  links: NavItem[];
}
interface Category {
  id: string;
  groupLinks: GroupLinks[];
}
export default function StoreLayoutMD() {
  const [closeSlide, setCloseSlide] = useState<boolean>(false);
  const [selectedGroup, setSelectedGroup] = useState<Category | null>(null);
  const [searching, setSearching] = useState<boolean>(false);

  function handleHoverCategory(label: string) {
    const group = categoryGroupedLinks.find(
      (groupItem) => groupItem.id === label
    );
    if (group) {
      setSelectedGroup(group);
      setCloseSlide(false);
      setSearching(false);
    }
  }
  function handleCloseSlide() {
    setSelectedGroup(null);
    setCloseSlide(true);
    setSearching(false);
  }
  function hoverSearch() {
    if (searching) {
      return;
    }
    setSelectedGroup(null);
    setCloseSlide(true);
  }
  function clickSearch() {
    setCloseSlide(false);
    setSelectedGroup(null);
    setSearching(true);
  }
  return (
    <>
      <Header className={\`px-20 py-2 bg-black\`}>
        <div
          id="logo"
          className="cursor-pointer"
          onMouseEnter={handleCloseSlide}
        >
          <Apple strokeWidth={1} />
        </div>
        <NavMenu
          navItems={categories}
          className="flex w-full font-sans font-extralight justify-evenly"
          itemClassName="w-fit"
          onHoverCallback={handleHoverCategory}
        />
        <div
          id="search"
          className="cursor-pointer"
          onMouseEnter={hoverSearch}
          onClick={clickSearch}
        >
          <Search strokeWidth={1} />
        </div>
        <div
          id="bag"
          className="cursor-pointer"
          onMouseEnter={handleCloseSlide}
        >
          <ShoppingCart strokeWidth={1} />
        </div>
      </Header>
      <SlideHeader
        direction="up"
        isClosed={closeSlide}
        className="bg-black p-3 pl-20"
      >
        {selectedGroup && <SelectedGroup selectedGroup={selectedGroup} />}
        {searching && (
          <div className="px-20 flex gap-1 justify-center items-center">
            <Search strokeWidth={1} />
            <SearchInput placeholder="Search Store" />
          </div>
        )}
      </SlideHeader>
      {!closeSlide && (
        <div
          className="w-full h-full bg-[#ffffff33] blur-md"
          onMouseEnter={handleCloseSlide}
        ></div>
      )}
    </>
  );
}
interface SelectedGroupProps {
  selectedGroup: Category;
}
function SelectedGroup(props: SelectedGroupProps) {
  const selectedGroup = props.selectedGroup;
  return (
    <>
      {selectedGroup.groupLinks.map((group: GroupLinks, number: number) => (
        <div
          className="flex flex-col mr-5 font-sans font-extralight"
          key={number}
        >
          <span className=" text-gray-500 text-sm">{\`\${group.group} \${selectedGroup.id}\`}</span>
          <NavMenu
            navItems={group.links}
            className={\`\${number > 0 ? "text-sm" : "font-bold text-xl"}\`}
          />
        </div>
      ))}
    </>
  );
}

const ComputerGroupLinks: GroupLinks[] = [
  {
    group: "Explore",
    links: [
      { label: "All Computers" },
      { label: "LapAir" },
      { label: "LapPro" },
      { label: "DeskStudio" },
      { label: "DeskPro" },
    ],
  },
  {
    group: "Shop",
    links: [
      { label: "Shop Computers" },
      { label: "Computer Accessories" },
      { label: "Financing" },
    ],
  },
  {
    group: "More",
    links: [{ label: "Computer Support" }, { label: "ComputerOS" }],
  },
];
const TabletGroupLinks: GroupLinks[] = [
  {
    group: "Explore",
    links: [
      { label: "All Tablets" },
      { label: "TabAir" },
      { label: "TabPro" },
      { label: "TabMimi" },
    ],
  },
  {
    group: "Shop",
    links: [
      { label: "Shop Tablets" },
      { label: "Tablet Accesories" },
      { label: "Financing" },
    ],
  },
  {
    group: "More",
    links: [{ label: "Tablet Support" }, { label: "TabOS" }],
  },
];

const PhoneGroupLinks: GroupLinks[] = [
  {
    group: "Explore",
    links: [
      { label: "All Phones" },
      { label: "MAir" },
      { label: "MPro" },
      { label: "MMini" },
      { label: "MOutdoors" },
    ],
  },
  {
    group: "Shop",
    links: [
      { label: "Shop Phones" },
      { label: "Phone Accessories" },
      { label: "Phone Plans" },
      { label: "Financing" },
    ],
  },
  {
    group: "More",
    links: [{ label: "Phone Support" }, { label: "MOS" }],
  },
];
const AccessoriesGroupLinks: GroupLinks[] = [
  {
    group: "Shop",
    links: [
      { label: "Shop All Accessories" },
      { label: "Computers" },
      { label: "Tablets" },
      { label: "Phones" },
    ],
  },
];
const categoryGroupedLinks: Category[] = [
  {
    id: "Computer",
    groupLinks: ComputerGroupLinks,
  },
  {
    id: "Tablet",
    groupLinks: TabletGroupLinks,
  },
  {
    id: "Phone",
    groupLinks: PhoneGroupLinks,
  },
  {
    id: "Accessories",
    groupLinks: AccessoriesGroupLinks,
  },
];
const categories: NavItem[] = [
  { label: "Computer" },
  { label: "Tablet" },
  { label: "Phone" },
  { label: "Accessories" },
];

`;
