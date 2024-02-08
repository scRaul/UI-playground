"use client";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface CollapsibleProps {
  className?: string;
  icon?: React.ReactElement;
  label: string;
  children: React.ReactNode;
  startClosed?: boolean;
}

function Collapsible(props: CollapsibleProps) {
  const [isCollapsed, setCollapsed] = useState(
    props.startClosed ? props.startClosed : false
  );

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <div className="p-2 h-fit flex flex-col justify-center">
      <div
        className={`flex items-center cursor-pointer ${props.className}`}
        onClick={toggleCollapse}
      >
        {props.icon && <div className="mr-2">{props.icon}</div>}
        <div className="font-semibold">{props.label}</div>
        <div className="flex-grow"></div>
        {isCollapsed ? <ChevronRight /> : <ChevronDown />}
      </div>
      {isCollapsed ? null : (
        <div className="mt-2 ml-auto mr-auto">{props.children}</div>
      )}
    </div>
  );
}

export default Collapsible;
