export default function DetailsBasicEx() {
  return (
    <details className="border border-dashed font-medium">
      <summary className="bg-blue-800 p-2 font-bold">My Items</summary>
      <div className="px-4 pb-4 bg-blue-800">
        <ol className="border-l-2 [&>li]:p-2 bg-blue-900">
          <li className="hover:bg-[#ffffff33]">item 1</li>
          <li className="hover:bg-[#ffffff33]">item 2</li>
          <li className="hover:bg-[#ffffff33]">item 3</li>
          <li className="hover:bg-[#ffffff33]">item 4</li>
        </ol>
      </div>
    </details>
  );
}
