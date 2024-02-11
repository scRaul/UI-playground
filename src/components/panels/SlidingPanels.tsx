import SidePanel from "./SidePanel";
import TopPanel from "./TopPanel";
import { getSlideTransform } from "@/lib/css";

interface TranslateProps {
  children: React.ReactNode;
  className?: string;
  isClosed: boolean;
  direction: "left" | "right" | "up" | "down";
}

export function SlidingSidePanel(props: TranslateProps) {
  const transform = getSlideTransform(props.direction, props.isClosed);
  return (
    <SidePanel className={`${transform} ${props.className}`}>
      {props.children}
    </SidePanel>
  );
}

export function SlidingTopPanel(props: TranslateProps) {
  const transform = getSlideTransform(props.direction, props.isClosed);
  return (
    <TopPanel className={`${transform} ${props.className}`}>
      {props.children}
    </TopPanel>
  );
}
