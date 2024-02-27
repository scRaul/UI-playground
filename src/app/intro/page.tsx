import Code from "@/components/cards/Code";
import { H3, H4 } from "@/components/text/Headings";
import { readFileContents } from "@/lib/files";
import Image from "next/image";

export default function IntroPage() {
  return (
    <article className="w-full h-full font-mono text-xl">
      <header className="bg-blue-800 w-full pt-20 p-1 text-center mb-4">
        <H3 className="font-bold">Getting Started</H3>
      </header>
      <div className="px-2 py-2 md:px-10">
        <section className="my-4">
          <H4 className="font-semibold underline">Disclaimer</H4>
          <p className="p-4">
            This is not a UI library and this is not a tutorial on web
            development. Rather this website serves as my personal UI
            playground. What I hope is that website serves as a refrecne /
            starting point for your UI needs.
          </p>
        </section>
        <section className="my-4">
          <H4 className="font-semibold underline">Tailwind</H4>
          <p className="p-4">
            The UI elements relay on tailwinds for their styling. If your
            pojects currently doesnt have tailwinds, I highly recommend
            installing it. For a guide visit their website,
            <a
              href="https://tailwindui.com/documentation#getting-set-up"
              target="_blank"
            >
              <span className="text-blue-500 italic hover:underline">
                TailWind
              </span>
            </a>
            {". "}
            If you currently dont have a project I recommend starting a new one
            with,{" "}
            <a
              href="https://nextjs.org/docs/getting-started/installation"
              target="_blank"
            >
              <span className="text-blue-500 italic hover:underline">
                Next.js
              </span>
            </a>{" "}
            and here are my recommended project options:
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
          <H4 className="font-semibold underline">CSS</H4>
          <p>
            Even though Tailwinds releaves us from writting tons of css, its
            isn't a replacement for CSS. Here are is my global css file:
          </p>

          <Code title="globals.css" disableNumbers={true} code={gcss} />
        </section>
      </div>
    </article>
  );
}
const gcss = readFileContents("src/app/globals.css");
