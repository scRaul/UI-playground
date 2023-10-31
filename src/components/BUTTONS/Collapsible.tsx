import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface CollapsibleProps {
  icon?: React.ReactElement;
  label: string;
  children: React.ReactNode;
}

function Collapsible({ icon, label, children }: CollapsibleProps) {
  const [isCollapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <div className="border rounded p-2">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleCollapse}
      >
        {icon && <div className="mr-2">{icon}</div>}
        <div className="font-semibold">{label}</div>
        {isCollapsed ? <ChevronRight /> : <ChevronDown />}
      </div>
      {isCollapsed ? null : <div className="mt-2">{children}</div>}
    </div>
  );
}

export default Collapsible;
