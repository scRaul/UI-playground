import Logo from "@/components/navigation/Logo";
import SidePanel from "@/components/panels/SidePanel";

export default function SidePanelEx() {
  return (
    <div className="relative w-full h-80 border">
      <SidePanel
        className="border min-w-[100px]"
        position="absolute"
        zIndex={1}
      >
        <header className="border-b p-1">
          <Logo href="" />
        </header>
        <div className="font-bold pt-4">
          <div className="hover:bg-[#ffffff33] pl-4">Home</div>
          <div className="hover:bg-[#ffffff33] pl-4">Projects</div>
          <div className="hover:bg-[#ffffff33] pl-4">About</div>
        </div>
      </SidePanel>
    </div>
  );
}
