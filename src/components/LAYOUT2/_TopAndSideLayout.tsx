import _SideBar from "./_SideBar";
import _TopBar from "./_TopBar";

interface _TopAndSideLayout {
  children: React.ReactNode;
}

function _TopAndSideLayout(props: _TopAndSideLayout) {
  return (
    <div className="w-screen h-screen pl-2 pr-2">
      {/* <_TopBar /> */}
      <div className="flex">
        <_SideBar />
        <div className={`mt-14 m-auto flex-1 flex flex-col items-center p-24"`}>
          {props.children}
        </div>
      </div>
      <div className="h-32 w-ful"></div>
    </div>
  );
}

export default _TopAndSideLayout;
