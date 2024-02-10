import Link from "next/link";
import Image from "next/image";
import { Shapes } from "lucide-react";

interface LogoProps {
  href: string;
}

export default function Logo(props: LogoProps) {
  return (
    <Link href={props.href} className="flex justify-center items-center gap-1">
      <Shapes size={24} />
      <Image
        src="/next.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
    </Link>
  );
}
