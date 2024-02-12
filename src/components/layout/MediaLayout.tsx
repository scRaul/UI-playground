"use client";
import {
  AlignJustify,
  ArrowLeft,
  Camera,
  Clock1,
  FastForward,
  Film,
  Flame,
  GalleryVerticalEnd,
  Gamepad,
  Home,
  Mic,
  MoreVertical,
  Music,
  Play,
  Search,
  ShoppingBag,
  User,
  UserSquare,
  X,
  Youtube,
} from "lucide-react";
import TopPanel from "../panels/TopPanel";
import { useState } from "react";
import { SearchBar } from "../navigation/Search";
import SlidingPanel from "../panels/SlidingPanel";
import LinkItem, { LinkItemOpt } from "../navigation/LinkItem";
import exp from "constants";

interface GroupLinks {
  group: string;
  links: LinkItemOpt[];
}

export default function MediaLayoutSm() {
  const [closeSideBar, setCloseSideBar] = useState(false);
  const [searching, setSearching] = useState(false);

  function toggleSearch() {
    setSearching(!searching);
  }
  return (
    <>
      {!searching && (
        <TopPanel
          className={`items-center justify-between bg-[#0E0E0E] t-0 py-2`}
          position="absolute"
          zIndex={10} //change to highest  @root layout
        >
          <aside className="flex gap-2 items-center justify-center w-fit pl-4">
            <div
              className="rounded-full hover:bg-[#ffffff33] cursor-pointer"
              onClick={() => setCloseSideBar(false)}
            >
              <AlignJustify />
            </div>
            <div className="flex justify-center gap-2 cursor-pointer">
              <Youtube href="/" />
              <span className="font-sans font-extrabold text-white text-lg">
                YouTube
              </span>
            </div>
          </aside>

          <div className="flex-grow"></div>

          <div className="hidden md:flex items-center gap-2 ">
            <SearchBar className="" buttonColor="#ffffff33" />
            <Mic
              className="rounded-full bg-[#ffffff33] hover:bg-[#ffffff77] cursor-pointer hidden xs:block"
              size={30}
            />
          </div>

          <div className="flex-grow"></div>

          <div className="flex gap-1 items-center md:hidden">
            <Search
              className="rounded-full hover:bg-[#ffffff33] cursor-pointer "
              size={30}
              onClick={toggleSearch}
            />
            <Mic
              className="rounded-full hover:bg-[#ffffff33] cursor-pointer hidden xs:block "
              size={30}
            />
          </div>

          <div className="flex">
            <MoreVertical
              className="rounded-full hover:bg-[#ffffff33] cursor-pointer"
              size={30}
            />
            <div className="rounded-full border p-1 h-fit flex justify-center items-center  text-blue-500 border-blue-500 hover:bg-[#693ea5a2] mr-2">
              <User className="rounded-full border border-blue-500" />
              <span className="hidden xs:inline-block">Sign In</span>
            </div>
          </div>
        </TopPanel>
      )}
      {searching && (
        <SlidingPanel
          panelType="Top"
          isClosed={!searching}
          closeTowards="right"
          className={`px-4 py-2 items-center justify-between bg-[#0E0E0E] visible md:invisible`}
          position="absolute"
          zIndex={10} //change to highest  @root layout
        >
          <ArrowLeft
            className="rounded-full hover:bg-[#ffffff33] cursor-pointer p-1"
            size={30}
            onClick={toggleSearch}
          />
          <SearchBar />
          <Mic
            className="rounded-full hover:bg-[#ffffff33] cursor-pointer p-1"
            size={30}
          />
        </SlidingPanel>
      )}
      {!closeSideBar && (
        <SlidingPanel
          className="bg-[#0E0E0E] shadow-2xl shadow-black h-full left-0 top-0 scrolly max-w-[225px] px-4"
          isClosed={closeSideBar}
          panelType="Side"
          closeTowards="left"
          position="absolute"
          zIndex={10}
        >
          <aside className="flex gap-2 items-center justify-center w-fit pt-4">
            <div
              className="rounded-full hover:bg-[#ffffff33] cursor-pointer"
              onClick={() => setCloseSideBar(true)}
            >
              <AlignJustify />
            </div>
            <div className="flex justify-center gap-2 cursor-pointer">
              <Youtube />
              <span className="font-sans font-extrabold text-white text-lg">
                YouTube
              </span>
            </div>
          </aside>
          <SideBarLinks groupLinks={mainL} />
          <SideBarLinks groupLinks={yourL} />
          <div className="flex flex-col  border-b py-2">
            <p>Sign in to like videos, comment, and subscribe.</p>
            <div className="rounded-full border p-1 h-fit w-fit flex justify-center items-center  text-blue-500 border-blue-500 hover:bg-[#693ea5a2]">
              <User className="rounded-full border border-blue-500" />
              <span className="">Sign In</span>
            </div>
          </div>
          <SideBarLinks groupLinks={exploreL} />
        </SlidingPanel>
      )}
    </>
  );
}

const mainL: GroupLinks = {
  group: "",
  links: [
    { label: "Home", icon: <Home /> },
    { label: "Shorts", icon: <FastForward /> },
    {
      label: "Subscriptions",
      icon: <GalleryVerticalEnd />,
    },
  ],
};
const yourL: GroupLinks = {
  group: "",
  links: [
    { label: "You", icon: <UserSquare /> },
    { label: "History", icon: <Clock1 /> },
  ],
};

const exploreL: GroupLinks = {
  group: "Explore",
  links: [
    { label: "Trending", icon: <Flame /> },
    { label: "Shopping", icon: <ShoppingBag /> },
    { label: "Music", icon: <Music /> },
    { label: "Movies&TV", icon: <Film /> },
    { label: "Live", icon: <Camera /> },
    { label: "Gaming", icon: <Gamepad /> },
  ],
};

interface SideBarProps {
  groupLinks: GroupLinks;
}
function SideBarLinks(props: SideBarProps) {
  const groupLinks = props.groupLinks;
  return (
    <>
      <div className="py-2 border-b">
        {groupLinks.group.length > 0 && <span>{groupLinks.group}</span>}
        {groupLinks.links.map((link, index) => (
          <LinkItem
            key={index}
            href={link.href}
            icon={link.icon}
            label={link.label}
            className="pr-4 gap-3 hover:bg-[#ffffff77] w-full p-2 rounded"
          />
        ))}
      </div>
    </>
  );
}
