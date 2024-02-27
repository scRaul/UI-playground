import { Plus } from "lucide-react";

export default function Module() {
  return (
    <div className="relative">
      <details className="border border-dashed font-medium">
        <summary className="relative p-2">
          <div className="absolute top-0 p-2 pl-4">
            <h1>My Items</h1>
          </div>
        </summary>
        <div className="px-4 pb-4">
          <ol className="border-l-2 border [&>li]:p-2">
            <li className="hover:bg-[#ffffff33]">item 1</li>
            <li className="hover:bg-[#ffffff33]">item 2</li>
            <li className="hover:bg-[#ffffff33]">item 3</li>
            <li className="hover:bg-[#ffffff33]">item 4</li>
          </ol>
        </div>
      </details>
      <div className="absolute top-0 right-0 flex bg-red-800 p-2">
        <div
          title="add a lesson entry"
          className="rounded-md hover:bg-[#ffffff33]"
        >
          <Plus className="p-1" />
        </div>
        <div
          title="add a lesson entry"
          className="rounded-md hover:bg-[#ffffff33]"
        >
          <Plus className="p-1" />
        </div>
      </div>
    </div>
  );
}
