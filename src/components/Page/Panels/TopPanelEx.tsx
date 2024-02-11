import Logo from "@/components/navigation/Logo";
import TopPanel from "@/components/panels/TopPanel";

export default function TopPanelEx() {
  return (
    <div className="relative w-full h-80 border">
      <TopPanel className="px-4 py-1 border-b" position="absolute" zIndex={1}>
        <Logo href="" />
        <div className="flex-grow"></div>
        <div className="font-bold text-xl hover:underline">Home</div>
        <div className="font-bold text-xl hover:underline">Projects</div>
        <div className="font-bold text-xl hover:underline">About</div>
      </TopPanel>
    </div>
  );
}
