import Aside from "./Aside";

interface SideBarProps {
  children: React.ReactNode;
  className?: string;
  isClosed: boolean;
  onRight?: boolean;
}

export default function SideBar(props: SideBarProps) {
  if (props.onRight)
    return (
      <RightBar
        className={props.className}
        isClosed={props.isClosed}
        onRight={props.onRight}
      >
        {props.children}
      </RightBar>
    );
  return (
    <LeftBar
      className={props.className}
      isClosed={props.isClosed}
      onRight={props.onRight}
    >
      {props.children}
    </LeftBar>
  );
}

function LeftBar(props: SideBarProps) {
  return (
    <Aside
      className={`transform
       ${
         props.isClosed
           ? "-translate-x-full opacity-0 invisible"
           : "translate-x-0 opacity-100 visible"
       }
       transition-all duration-300 ease-in-out
       onTransition
        ${props.className}
       `}
    >
      {props.children}
    </Aside>
  );
}
function RightBar(props: SideBarProps) {
  return (
    <Aside
      className={`transform right-0
       ${
         props.isClosed
           ? "translate-x-full opacity-0 invisible"
           : "translate-x-0 opacity-100 visible"
       }
       transition-all duration-300 ease-in-out
       onTransition
        ${props.className}
       `}
    >
      {props.children}
    </Aside>
  );
}
