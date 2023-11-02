"use client";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface CollapsibleProps {
  className?: string;
  icon?: React.ReactElement;
  label: string;
  children: React.ReactNode;
}

function Collapsible(props: CollapsibleProps) {
  const [isCollapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <div className={`border rounded p-2 h-fit ${props.className}`}>
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleCollapse}
      >
        {props.icon && <div className="mr-2">{props.icon}</div>}
        <div className="font-semibold">{props.label}</div>
        {isCollapsed ? <ChevronRight /> : <ChevronDown />}
      </div>
      {isCollapsed ? null : <div className="mt-2">{props.children}</div>}
    </div>
  );
}

export default Collapsible;
