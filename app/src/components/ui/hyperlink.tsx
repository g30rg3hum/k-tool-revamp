import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
  out?: boolean;
}
export default function Hyperlink({ href, children, out }: Props) {
  return (
    <a
      className="text-primary underline"
      href={href}
      target={out ? "_blank" : undefined}
      rel={out ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
