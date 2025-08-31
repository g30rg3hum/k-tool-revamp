"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

// TODO: might have to change Link to anchor.
interface Props {
  href: string;
  children: React.ReactNode;
}
export default function DesktopLinkListItem({ href, children }: Props) {
  const pathname = usePathname();
  const isCurrentPath = pathname === href;

  return (
    <motion.li
      whileHover={
        !isCurrentPath
          ? {
              color: "var(--primary)",
              y: -2,
            }
          : undefined
      }
      className={
        isCurrentPath ? "text-primary" : "border-b-2 border-transparent"
      }
    >
      {isCurrentPath ? children : <Link href={href}>{children}</Link>}
    </motion.li>
  );
}
