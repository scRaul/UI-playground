import Link from "next/link";
import React, { ReactNode } from "react";

interface ILink {
  href: string;
  label: string;
  icon?: ReactNode;
}
interface NavigationProps {
  menuIcon: ReactNode;
  brandNode?: ReactNode;
  LinkSet: ILink[];
}

function Navigation(props: NavigationProps) {
  return (
    <>
      <nav className="@NavCSS  bg-gray-800 h-screen w-24 pt-3">
        <div>{props.menuIcon}</div>
        {props.brandNode ? <div>{props.brandNode}</div> : <></>}
        {props.LinkSet.map((link, index) => (
          <div key={index} className="nav-item mt-3">
            <Link href={link.href} className="flex content-center items-center">
              <span className="icon aria-hidden-[true]">{link.icon}</span>{" "}
              {link.label}
            </Link>
          </div>
        ))}
      </nav>
    </>
  );
}
export type { ILink };
export default Navigation;
