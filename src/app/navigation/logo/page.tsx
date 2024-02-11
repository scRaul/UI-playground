import CodePreview from "@/components/cards/CodePreview";
import Logo from "@/components/navigation/Logo";
import { readFileContents } from "@/lib/files";

export default function LogoPage() {
  return (
    <CodePreview title="Logo.tsx" code={logo}>
      <Logo href="/" />
    </CodePreview>
  );
}
const logo = readFileContents("src/components/navigation/Logo.tsx");
