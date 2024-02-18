import Link from "next/link";
import Image from "next/image";
import { Shapes } from "lucide-react";

interface LogoProps {
  href: string;
}

export default function Logo(props: LogoProps) {
  return (
    <Link href={props.href} className="">
      <Image
        src="/logo.svg"
        alt="app Logo"
        className="dark:invert"
        width={100}
        height={20}
        priority
      />
    </Link>
  );
}
