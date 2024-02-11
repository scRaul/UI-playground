"use client";
import {
  Apple,
  ChevronLeft,
  Equal,
  Search,
  ShoppingCart,
  X,
} from "lucide-react";
import TopPanel from "../panels/TopPanel";
import SlidingPanel from "../panels/SlidingPanel";
import { useState } from "react";
import { SearchInput } from "../navigation/Search";
import LinkItem, { LinkItemOpt } from "../navigation/LinkItem";

interface GroupLinks {
  group: string;
  links: LinkItemOpt[];
}
interface Category {
  id: string;
  groupLinks: GroupLinks[];
}

export default function StoreLayoutSm() {
  const [closeMainSlide, setCloseMainSlide] = useState<boolean>(true);
  const [closeSubSlide, setCloseSubSlide] = useState<boolean>(true);
  const [searching, setSearching] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [selectedGroup, setSelectedGroup] = useState<Category | null>(null);
  function handleSearch(event: React.MouseEvent<SVGElement>) {
    setSearching(true);
    setCloseMainSlide(false);
  }
  function handleMenu(event: React.MouseEvent<SVGElement>) {
    setCloseMainSlide(false);
    setOpenMenu(true);
  }
  function handleClosePanels(event: React.MouseEvent<SVGElement>) {
    setCloseMainSlide(true);
    setCloseSubSlide(true);
    setSelectedGroup(null);
    setSearching(false);
    setOpenMenu(false);
  }
  function handleClickCategory(label: string) {
    const group = categoryGroupedLinks.find(
      (groupItem) => groupItem.id === label
    );
    if (group) {
      setCloseSubSlide(false);
      setSelectedGroup(group);
    }
  }
  function handleBack() {
    setCloseSubSlide(true);
  }
  return (
    <>
      <TopPanel
        position={"absolute"}
        className="py-2 px-4 bg-black"
        zIndex={10} //set higher if using at root
      >
        <div id="logo" className="cursor-pointer">
          <Apple strokeWidth={1} />
        </div>
        <div className="flex-grow"></div>
        <div className="flex gap-2">
          <Search
            strokeWidth={1}
            onClick={handleSearch}
            className="cursor-pointer"
          />
          <ShoppingCart strokeWidth={1} className="cursor-pointer" />
          <Equal
            strokeWidth={1}
            onClick={handleMenu}
            className="cursor-pointer"
          />
        </div>
      </TopPanel>
      <SlidingPanel
        panelType="Side"
        closeTowards="top"
        position="absolute"
        className="bg-black w-full px-4 py-4"
        isClosed={closeMainSlide}
        zIndex={11} //set higher if using @root
      >
        <header className="w-full flex">
          <div className="flex-grow"></div>
          <X strokeWidth={1} onClick={handleClosePanels} />
        </header>
        {searching && (
          <div className="flex items-center w-full text-lg mt-7 px-4">
            <Search strokeWidth={1} />
            <SearchInput
              placeholder="Search Store"
              className="flex-grow"
              xClassName="bg-gray-400"
              strokeWidth={3}
            />
          </div>
        )}
        {openMenu && (
          <div className=" w-full text-lg font-bold mt-7 px-4">
            {categories.map((cat, index) => (
              <div
                key={index}
                onClick={() => handleClickCategory(cat.label)}
                className="cursor-pointer"
              >
                {cat.label}
              </div>
            ))}
          </div>
        )}
      </SlidingPanel>
      <SlidingPanel
        panelType="Side"
        closeTowards="right"
        position="absolute"
        className="bg-black w-full px-4 py-4 right-0"
        isClosed={closeSubSlide}
        zIndex={12} //set higher if using @root
      >
        <header className="w-full flex">
          <ChevronLeft strokeWidth={1} onClick={handleBack} />
          <div className="flex-grow"></div>
          <X strokeWidth={1} onClick={handleClosePanels} />
        </header>
        {selectedGroup && <SelectedGroup selectedGroup={selectedGroup} />}
      </SlidingPanel>
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
        <div className="px-4 font-sans font-extralight" key={number}>
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
const categories: LinkItemOpt[] = [
  { label: "Computer" },
  { label: "Tablet" },
  { label: "Phone" },
  { label: "Accessories" },
];
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
