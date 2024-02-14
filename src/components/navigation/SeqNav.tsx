"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LinkItemOpt } from "./LinkItem";
import Link from "next/link";

export default function SeqNav() {
  const pathname = usePathname();
  const [leftPath, setLeftPath] = useState<LinkItemOpt | null>(null);
  const [rightPath, setRightPath] = useState<LinkItemOpt | null>(null);
  useEffect(() => {
    const index = navs.findIndex((value) => value.href == pathname);
    if (index > 1) {
      setLeftPath(navs[index - 1]);
    } else {
      setLeftPath(null);
    }
    if (index < navs.length - 1) {
      setRightPath(navs[index + 1]);
    } else {
      setRightPath(null);
    }
  }, [pathname]);
  return (
    <nav className="w-full py-10 max-w-3xl flex mx-auto px-1">
      {leftPath && (
        <Link
          href={leftPath.href ? leftPath.href : ""}
          className="flex text-blue-500 hover:underline"
        >
          <ChevronLeft />
          <span>{leftPath.label}</span>
        </Link>
      )}
      <div className="flex-grow"></div>
      {rightPath && (
        <Link
          href={rightPath.href ? rightPath.href : ""}
          className="flex text-blue-500 hover:underline"
        >
          <span>{rightPath.label}</span>
          <ChevronRight />
        </Link>
      )}
    </nav>
  );
}

const navs: LinkItemOpt[] = [
  { href: "/intro", label: "Getting Started" },
  { href: "/html/attributes", label: "Attributes" },
  { href: "/html/events/form", label: "Form Events" },
  { href: "/html/events/drag", label: "Drag Events" },
  { href: "/html/events/mouse", label: "Mouse Events" },
  { href: "/html/events/keyboard", label: "Keyboard Events" },
  { href: "/html/input", label: "Inputs" },
  { href: "/html/list", label: "Lists" },
  { href: "/html/navigation", label: "Navigation" },
  { href: "/html/media", label: "Media" },
  { href: "/html/structure", label: "Structure" },
  { href: "/html/text", label: "Text" },
  { href: "/html/misc", label: "Misc" },
  { href: "/navigation/link-item", label: "Link Item" },
  { href: "/navigation/logo", label: "Logo" },
  { href: "/navigation/search", label: "Search" },
  { href: "/panel/bottom-panel", label: "Bottom Pannel" },
  { href: "/panel/side-panel", label: "Side Panel" },
  { href: "/panel/top-panel", label: "Top Panl" },
  { href: "/panel/sliding-panels", label: "Sliding Panel" },
  { href: "/layout/media", label: "Media Layout" },
  { href: "/layout/store", label: "Store Layout" },
];
