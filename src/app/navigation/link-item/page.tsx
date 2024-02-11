import LinkItemEx from "@/components/Page/Nav/LinkItemEx";
import CodePreview from "@/components/cards/CodePreview";
import LinkItem from "@/components/navigation/LinkItem";
import { readFileContents } from "@/lib/files";
import { Home, Phone, User } from "lucide-react";

export default function LinkItemPage() {
  return (
    <>
      <CodePreview title="LinkItem.tsx" code={code}>
        <nav>
          <LinkItem label="Home" icon={<Home />} />
          <LinkItem label="About" icon={<User />} />
          <LinkItem label="Contact" icon={<Phone />} />
        </nav>
      </CodePreview>

      <CodePreview title="example" code={example}>
        <LinkItemEx />
      </CodePreview>
    </>
  );
}

const code = readFileContents("src/components/navigation/LinkItem.tsx");
const example = readFileContents("src/components/Page/Nav/LinkItemEx.tsx");
