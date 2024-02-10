"use client";
import CodePreview from "@/components/cards/CodePreview";
import { SlideBar } from "@/components/containers/Slide";
import Logo from "@/components/navigation/Logo";
import { AlignJustify, X } from "lucide-react";
import { useState } from "react";

export default function SlidersPage() {
  return (
    <>
      <CodePreview title="getSlideTransform" code={lib}>
        <div></div>
      </CodePreview>
      <CodePreview title="Slide.tsx" code={code}>
        <div className="relative h-80 w-full border overflow-hidden">
          <SimpleEx />
        </div>
      </CodePreview>

      <CodePreview title="example" code={example}>
        <div className="relative h-80 w-full border overflow-hidden">
          <PolishedEx />
        </div>
      </CodePreview>
    </>
  );
}

function SimpleEx() {
  const [closed, setClosed] = useState(false);
  return (
    <>
      <SlideBar className="border w-20" isClosed={closed} direction="left">
        <div className="font-bold">
          <div>Home</div>
          <div>Projects</div>
          <div>About</div>
        </div>
      </SlideBar>
      <div
        className="relative left-24 top-8 p-2 rounded bg-green-800 hover:bg-green-500 cursor-pointer w-fit"
        onClick={() => setClosed(!closed)}
      >
        {closed ? "Show" : "Hide"}
      </div>
    </>
  );
}

function PolishedEx() {
  const [closed, setClosed] = useState(false);
  return (
    <>
      <header className="border-b p-2 flex bg-blue-950">
        <div
          className="p-2 w-fit rounded-full hover:bg-[#ffffff33]"
          onClick={() => setClosed(false)}
        >
          <AlignJustify />
        </div>
        <Logo href="" />
      </header>
      <SlideBar
        className="border w-60 bg-blue-950"
        isClosed={closed}
        direction="left"
      >
        <header className=" p-2 flex">
          <Logo href="" />
          <div className="flex-grow"></div>
          <div
            className="p-2 w-fit rounded-full hover:bg-[#ffffff33]"
            onClick={() => setClosed(true)}
          >
            <X />
          </div>
        </header>
        <div className="font-bold pt-4">
          <div className="hover:bg-[#ffffff33] pl-4">Home</div>
          <div className="hover:bg-[#ffffff33] pl-4">Projects</div>
          <div className="hover:bg-[#ffffff33] pl-4">About</div>
        </div>
      </SlideBar>
    </>
  );
}
const code = `
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
    <Aside className={\`\${transform} \${props.className}\`}>
      {props.children}
    </Aside>
  );
}

export function SlideHeader(props: TranslateProps) {
  const transform = getSlideTransform(props.direction, props.isClosed);
  return (
    <Header className={\`\${transform} \${props.className}\`}>
      {props.children}
    </Header>
  );
}
`;

const example = `
"use client";

import { SlideBar } from "@/components/containers/Slide";
import Logo from "@/components/navigation/Logo";
import { AlignJustify, X } from "lucide-react";
import { useState } from "react";

function ExLayout(){
  const [closed, setClosed] = useState(false);
  return (
    <>
      <header className="border-b p-2 flex bg-blue-950">
        <div
          className="p-2 w-fit rounded-full hover:bg-[#ffffff33]"
          onClick={() => setClosed(false)}
        >
          <AlignJustify />
        </div>
        <Logo href="" />
      </header>
      <SlideBar
        className="border w-60 bg-blue-950"
        isClosed={closed}
        direction="left"
      >
        <header className=" p-2 flex">
          <Logo href="" />
          <div className="flex-grow"></div>
          <div
            className="p-2 w-fit rounded-full hover:bg-[#ffffff33]"
            onClick={() => setClosed(true)}
          >
            <X />
          </div>
        </header>
        <div className="font-bold pt-4">
          <div className="hover:bg-[#ffffff33] pl-4">Home</div>
          <div className="hover:bg-[#ffffff33] pl-4">Projects</div>
          <div className="hover:bg-[#ffffff33] pl-4">About</div>
        </div>
      </SlideBar>
    </>
  );
}

`;

const lib = `
type direction = 'left'|'right'|'up'|'down';
export function getSlideTransform(dir: direction, isClosed: boolean) {
  var translate = '';
  if (dir === 'left') {
    translate = isClosed ? '-translate-x-full' : 'translate-x-0';
  } else if (dir === 'right') {
    translate = isClosed ? 'translate-x-full' : 'translate-x-0';
  } else if (dir === 'up') {
    translate = isClosed ? '-translate-y-full' : 'translate-y-0';
  } else if (dir === 'down') {
    translate = isClosed ? 'translate-y-full' : 'translate-y-0';
  }
  const opacity = isClosed ? 'opacity-0 invisible' : 'opacity-100 visible';
  const css = \`transform \${translate} \${
      opacity} transition-all duration-300 ease-in-out onTransition\`;
  return css;
}
`;
