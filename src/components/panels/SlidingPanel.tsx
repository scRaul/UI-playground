import BottomPanel from "./BottomPanel";
import SidePanel from "./SidePanel";
import TopPanel from "./TopPanel";
import { getSlideTransform } from "@/lib/css";

interface SlidingProps {
  children: React.ReactNode;
  className?: string;
  isClosed: boolean;
  panelType: "Side" | "Top" | "Bottom";
  direction: "left" | "right" | "up" | "down";
  position: "absolute" | "fixed";
  zIndex?: number;
}

export default function SlidingPanel(props: SlidingProps) {
  const transform = getSlideTransform(props.direction, props.isClosed);
  const className = `${transform} ${props.className}`;
  if (props.panelType === "Side") {
    return (
      <SidePanel
        className={className}
        position={props.position}
        zIndex={props.zIndex}
      >
        {props.children}
      </SidePanel>
    );
  } else if (props.panelType === "Top") {
    return (
      <TopPanel
        className={className}
        position={props.position}
        zIndex={props.zIndex}
      >
        {props.children}
      </TopPanel>
    );
  } else {
    return (
      <BottomPanel
        className={className}
        position={props.position}
        zIndex={props.zIndex}
      >
        {props.children}
      </BottomPanel>
    );
  }
}
