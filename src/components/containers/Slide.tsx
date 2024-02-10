import Aside from "./Aside";
import Header from "./Header";
import { getSlideTransform } from "@/lib/css";

interface TranslateProps {
  children: React.ReactNode;
  className?: string;
  isClosed: boolean;
  direction: "left" | "right" | "up" | "down";
}

export function SlideBar(props: TranslateProps) {
  const transform = getSlideTransform(props.direction, props.isClosed);
  return (
    <Aside className={`${transform} ${props.className}`}>
      {props.children}
    </Aside>
  );
}

export function SlideHeader(props: TranslateProps) {
  const transform = getSlideTransform(props.direction, props.isClosed);
  return (
    <Header className={`${transform} ${props.className}`}>
      {props.children}
    </Header>
  );
}
