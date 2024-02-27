import Link from "next/link";
import Image from "next/image";
import { Shapes } from "lucide-react";

interface LogoProps {
  href: string;
}

export default function Logo(props: LogoProps) {
  return (
    <Link href={props.href} className="relative w-[100px] h-[32px]">
      <Image
        src="/logo.svg"
        alt="app Logo"
        className="dark:invert"
        fill={true}
        priority
      />
    </Link>
  );
}
