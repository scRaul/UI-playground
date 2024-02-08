import { H3, H4 } from "@/components/_text/Headings";
import Image from "next/image";

export default function IntroPage() {
  return (
    <article className="w-full h-full font-mono text-xl">
      <header className="bg-blue-800 w-full pt-4 p-1 text-center mb-4">
        <H3 className="font-bold">Getting Started</H3>
      </header>
      <div className="px-2 py-2 md:px-10">
        <section className="my-4">
          <H4 className="font-semibold underline">Starting Project</H4>
          <p className="p-4">
            {" "}
            If you haven't done so already, read through{" "}
            <a href="https://nextjs.org/docs" target="_blank">
              <span className="text-blue-500 italic hover:underline">
                {" "}
                Next.js
              </span>
            </a>{" "}
            docs to gain a better idea of what Next js has to offer. If you are
            starting a new project, I recommend following their{" "}
            <a
              href="https://nextjs.org/docs/getting-started/installation"
              target="_blank"
            >
              <span className="text-blue-500 italic hover:underline">
                Automatic Installation.
              </span>
            </a>{" "}
            I recommend saying yes to tailwinds and the src folder.
          </p>
          <Image
            src={"/setUp.png"}
            alt="set up png"
            width={1044}
            height={250}
            className="mx-auto"
          />
        </section>
        <section className="my-4">
          <H4 className="font-semibold underline">Project Structure</H4>
          <p className="p-4">
            After next js finishes setting up your project,I recommend that you
            add each of the following folders inside of the src/ directory:
          </p>
          <ol className=" p-3 mx-auto">
            <li className="m-1">
              <details className="border rounded">
                <summary className="border-b px-3 py-2">actions/</summary>
                <p className="p-3">
                  This is where you store your server side functions, these
                  functions are invoked when submitting a form.{" "}
                  <a
                    href="https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations"
                    target="_blank"
                  >
                    <span className="text-blue-500 italic hover:underline">
                      {" "}
                      More info.
                    </span>
                  </a>
                </p>
              </details>
            </li>
            <li className="m-1">
              <details className="border rounded">
                <summary className="border-b px-3 py-2">components/</summary>
                <p className="p-3">
                  A folder were you will be storing all your UI elements.
                  Further organized by grouping UI into subfolders.
                </p>
              </details>
            </li>
            <li className="m-1">
              <details className="border rounded">
                <summary className="border-b px-3 py-2">lib/</summary>

                <p className="p-3">
                  Here you store your personal libraries, such as if you need to
                  store data types or frequently used functions.
                </p>
              </details>
            </li>
          </ol>
          <Image
            src={"/fileStruct.png"}
            alt="set up png"
            width={548 / 2}
            height={1060 / 2}
            className="mx-auto"
          />
        </section>
        <section className="my-4">
          <H4 className="font-semibold underline">Tips/Tweaks</H4>
          <p className="p-4">
            Even though majority of the UI elements will relay soley on the
            tailwinds library, its good to know that you can define a class
            using tailwinds classes. My tip is to define an input class
            <code> @/src/app/gloabls.css </code> for example:
          </p>
          <div className="p-2 bg-[#0A0832]">
            <var>{`
            .input {
  @apply rounded p-2 bg-transparent focus:outline-none border border-white focus:border-blue-500 w-full;
} `}</var>
          </div>
          <p className="p-4">
            {" "}
            Another tip is that rather than using rgb for the root css variables
            , change them to hex. This will (in vsCode at least) place a color
            picker next to the value; allowing you to tweak the colors faster
            and easier
          </p>
        </section>
      </div>
    </article>
  );
}
