import Logo from "@/components/navigation/Logo";
import BottomPanel from "@/components/panels/BottomPanel";

export default function SlidePanelEx() {
  return (
    <div className="relative w-full h-80 border">
      <BottomPanel
        className="px-4 py-1 border-b flex flex-col border"
        position="absolute"
        zIndex={1}
      >
        <Children />
      </BottomPanel>
    </div>
  );
}

function Children() {
  return (
    <>
      <Logo href="" />
      <div className="flex-grow"></div>
      <div className="font-bold text-xl hover:underline">Home</div>
      <div className="font-bold text-xl hover:underline">Projects</div>
      <div className="font-bold text-xl hover:underline">About</div>
    </>
  );
}
