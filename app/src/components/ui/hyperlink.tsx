import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
}
export default function Hyperlink({ href, children }: Props) {
  return (
    <Link className="text-primary underline" href={href}>
      {children}
    </Link>
  );
}
