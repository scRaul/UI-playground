import _SideBar from "./_SideBar";
import _TopBar from "./_TopBar";

interface _TopAndSideLayout {
  children: React.ReactNode;
}

function _TopAndSideLayout(props: _TopAndSideLayout) {
  return (
    <div className="w-screen h-screen">
      <_TopBar />
      <div className="flex">
        <_SideBar />
        <div className={`mt-14 m-auto flex-1 flex flex-col items-center p-24"`}>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default _TopAndSideLayout;
