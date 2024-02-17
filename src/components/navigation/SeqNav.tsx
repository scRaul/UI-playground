"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LinkItemOpt } from "./LinkItem";
import Link from "next/link";

interface SeqNavProps {
  links: LinkItemOpt[];
}

export default function SeqNav(props: SeqNavProps) {
  const navs = props.links;
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
