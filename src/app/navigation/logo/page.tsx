import CodePreview from "@/components/_cards/CodePreview";
import Logo from "@/components/_navigation/Logo";

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

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/vercel.svg"
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
