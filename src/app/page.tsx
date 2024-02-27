import { H1, H4, H5 } from "@/components/text/Headings";
import { Feather, Pencil, TimerReset } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <article className="w-full">
      <header className="w-full text-center bg-blue-800 p-6 flex flex-col gap-4 items-center">
        <H1 className="font-extrabold">Copy and Paste UI</H1>
        <H4 className="">Web UI tempalates</H4>
        <Link href="/intro" className="px-3 py-1 rounded bg-slate-50 w-fit">
          <H4 className="text-blue-800">Get Started</H4>
        </Link>
      </header>
      <div className="flex flex-col lg:flex-row max-w-4xl mx-auto my-3 [&>section]:w-full">
        <section className="flex flex-col items-center gap-4 p-2">
          <TimerReset size={70} />
          <H4 className="font-bold">Build Faster</H4>
          <p className="font-sans text-lg">
            Save time and effort by quickly finding and implementing UI
            components directly into your project. No need to reinvent the wheel
            - simply copy and paste
          </p>
        </section>
        <section className="flex flex-col items-center gap-4 p-2">
          <Feather size={70} />
          <H4 className="font-bold">Lightwieght</H4>
          <p className="font-sans text-lg">
            No need to install a Library, simply find something your looking for
            and copy it onto your project
          </p>
        </section>
        <section className="flex flex-col items-center gap-4 p-2">
          <Pencil size={70} />
          <H4 className="font-bold">Customizable</H4>
          <p className="font-sans text-lg">
            Easily customize and style our components to match your project's
            unique branding and design requirements
          </p>
        </section>
      </div>
    </article>
  );
}
