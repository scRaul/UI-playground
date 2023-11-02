import Link from "next/link";
interface NavBttnProps {
href: string;
}
function NavBttn(props: NavBttnProps) {
  return <Link href={props.href} className="">

  </Link>;
}
