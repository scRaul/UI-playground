"use client";
import { Apple, Link, Search, ShoppingCart } from "lucide-react";
import TopPanel from "../panels/TopPanel";
import SlidingPanel from "../panels/SlidingPanel";
import { useState } from "react";
import { SearchInput } from "../navigation/Search";
import LinkItem from "../navigation/LinkItem";
import { LinkItemOpt } from "../navigation/LinkItem";

interface GroupLinks {
  group: string;
  links: LinkItemOpt[];
}
interface Category {
  id: string;
  groupLinks: GroupLinks[];
}
export default function StoreLayoutLg() {
  const [closeSlide, setCloseSlide] = useState<boolean>(true);
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
      <TopPanel
        className={`px-20 py-2 bg-black`}
        position="absolute"
        zIndex={10} //change to highest  @root layout
      >
        <div
          id="logo"
          className="cursor-pointer"
          onMouseEnter={handleCloseSlide}
        >
          <Apple strokeWidth={1} />
        </div>
        <nav className="flex w-full font-sans font-extralight justify-evenly">
          {categories.map((cat, index) => (
            <LinkItem
              key={index}
              label={cat.label}
              href={cat.href}
              icon={cat.icon}
              onHoverCallBack={handleHoverCategory}
            />
          ))}
        </nav>
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
      </TopPanel>
      <SlidingPanel
        closeTowards="top"
        isClosed={closeSlide}
        panelType="Top"
        position="absolute"
        className="bg-black p-3 pl-20 pt-10"
        zIndex={9} //change 1 < TopPanel @root layout
      >
        {selectedGroup && <SelectedGroup selectedGroup={selectedGroup} />}
        {searching && (
          <div className="px-20 py-10 flex gap-1 justify-center items-center">
            <Search strokeWidth={1} />
            <SearchInput placeholder="Search Store" />
          </div>
        )}
      </SlidingPanel>
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
          <span className=" text-gray-500 text-sm">{`${group.group} ${selectedGroup.id}`}</span>
          <nav className={`${number > 0 ? "text-sm" : "font-bold text-xl"}`}>
            {group.links.map((link, index) => (
              <LinkItem
                key={index}
                label={link.label}
                href={link.href}
                icon={link.icon}
                className=""
              />
            ))}
          </nav>
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
const categories: LinkItemOpt[] = [
  { label: "Computer" },
  { label: "Tablet" },
  { label: "Phone" },
  { label: "Accessories" },
];
