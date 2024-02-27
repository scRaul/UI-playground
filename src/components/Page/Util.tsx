export function GridBgWrapped() {
  return (
    <div className="h-80 overflow-auto scrolly px-1">
      <GridBg />
    </div>
  );
}
export function GridBg() {
  return (
    <>
      <div className="h-96  w-full relative rounded-md grid grid-cols-8 grid-rows-5 gap-1 [&>div]:flex [&>div]:items-center justify-center">
        <div className="bg-[#ffffff33] row-span-1 col-span-8">
          <p className="mx-auto text-[#ffffff55]">scroll down</p>
        </div>
        <div className="bg-[#ffffff33] row-span-4 col-span-1"></div>
        <div className="bg-[#ffffff33] row-span-4 col-span-5"></div>
        <div className="bg-[#ffffff33] row-span-2 col-span-2"></div>
        <div className="bg-[#ffffff33] row-span-2 col-span-2"></div>
      </div>
      <div className="h-96 w-full relative rounded-md grid grid-cols-8 grid-rows-5 gap-1 [&>div]:flex [&>div]:items-center justify-center">
        <div className="bg-[#ffffff33] row-span-4 col-span-1"></div>
        <div className="bg-[#ffffff33] row-span-4 col-span-5"></div>
        <div className="bg-[#ffffff33] row-span-2 col-span-2"></div>
        <div className="bg-[#ffffff33] row-span-2 col-span-2"></div>
        <div className="bg-[#ffffff33] row-span-1 col-span-8">
          <p className="mx-auto text-[#ffffff55]">scroll up</p>
        </div>
      </div>
    </>
  );
}
