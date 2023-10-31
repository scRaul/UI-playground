import SideBar from "./SideBar";
import TopBar from "./TopBar";

interface TopAndSideLayout {
  children: React.ReactNode;
}

function TopAndSideLayout(props: TopAndSideLayout) {
  return (
    <div className="w-screen h-screen">
      <TopBar />
      <div className="flex">
        <SideBar />
        <div className={`mt-14 flex-1`}>{props.children}</div>
      </div>
    </div>
  );
}

export default TopAndSideLayout;
