import Logo from "./Logo";
import { BasicGroup } from "./LinkItem";
import { H6 } from "../text/Headings";

interface FooterProps {
  groups: BasicGroup[];
}

export default function Footer(props: FooterProps) {
  return (
    <footer className="w-full flex flex-col p-4 border-t border-[#ffffff33]">
      <section className="flex flex-col md:flex-row px-10 justify-around gap-2">
        {props.groups.map((group, index) => (
          <div key={index}>
            <H6 className="font-simibold underline">{group.label}</H6>
            <ol>
              {group.links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  className="flex gap-1 items-baseline hover:underline hover:text-blue-500"
                >
                  <span className="text-sm md:text-base">{link.label}</span>
                  {link.icon}
                </a>
              ))}
            </ol>
          </div>
        ))}
        <div className="flex-grow"></div>
      </section>
      <section className="flex flex-col items-center py-5">
        <Logo href="/" />
        <p>Copyright © 2024 Raul Ramirez</p>
      </section>
    </footer>
  );
}
