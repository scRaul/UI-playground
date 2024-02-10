import CodePreview from "@/components/cards/CodePreview";
import Logo from "@/components/navigation/Logo";

export default function LogoPage() {
  return (
    <CodePreview title="Logo.tsx" code={logo}>
      <Logo href="/" />
    </CodePreview>
  );
}
const logo = `
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
`;
