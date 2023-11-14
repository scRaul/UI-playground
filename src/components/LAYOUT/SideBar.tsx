export default function SideBar() {
  return (
    <aside
      className="bg-blue-300 w-fit min-w-[200px] h-full
             absolute top-0 p-1 shadow-xl flex flex-col"
    >
      <header className=" pl-2 pr-1 flex gap-2 items-center justify-between">
        <div className="w-fit rounded-full hover:bg-slate-200 p-3 cursor-pointer"></div>
        <div className="w-full cursor-pointer">
          <img src="/next.svg" className=" h-6" />
        </div>
      </header>
      <section className="overflow-y-auto scrolly flex-grow">
        <div className="flex justify-start items-center px-4 hover:bg-white cursor-pointer rounded">
          <div className="pr-4"></div>
          <p> Home </p>
        </div>
        <div className="flex justify-start items-center px-4 hover:bg-white cursor-pointer rounded">
          <div className="pr-4"></div>
          <p> Video </p>
        </div>
        <div className="flex justify-start items-center px-4 hover:bg-white cursor-pointer rounded">
          <div className="pr-4"></div>
          <p> Music </p>
        </div>
        <div className="flex justify-start items-center px-4 hover:bg-white cursor-pointer rounded">
          <div className="pr-4"></div>
          <p> Music </p>
        </div>
      </section>

      <footer className="max-w-[20ch] p-3">
        <div>
          <a href="" className="mr-2 inline-block">
            About
          </a>
          <a href="" className="mr-2 inline-block">
            About
          </a>
          <a href="" className="mr-2 inline-block">
            About
          </a>
          <a href="" className="mr-2 inline-block">
            About
          </a>
          <a href="" className="mr-2 inline-block">
            About
          </a>
          <a href="" className="mr-2 inline-block">
            About
          </a>
          <a href="" className="mr-2 inline-block">
            About
          </a>
          <a href="" className="mr-2 inline-block">
            About
          </a>
          <a href="" className="mr-2 inline-block">
            About
          </a>
        </div>
      </footer>
    </aside>
  );
}
