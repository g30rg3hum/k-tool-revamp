"use client";

import { usePathname } from "next/navigation";
import { motion } from "motion/react";

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
      {isCurrentPath ? children : <a href={href}>{children}</a>}
    </motion.li>
  );
}
