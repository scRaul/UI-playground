import LinkItem from "@/components/navigation/LinkItem";
import { Home, Phone, User } from "lucide-react";

export default function LinkItemEx() {
  return (
    <nav className="">
      <LinkItem
        className="hover:bg-[#ffffff33] p-2"
        label="Home"
        icon={<Home />}
      />
      <LinkItem
        className="hover:bg-[#ffffff33] p-2"
        label="About"
        icon={<User />}
      />
      <LinkItem
        className="hover:bg-[#ffffff33] p-2"
        label="Contact"
        icon={<Phone />}
      />
    </nav>
  );
}
