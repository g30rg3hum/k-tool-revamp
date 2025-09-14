"use client";

import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import clsx from "clsx";

interface Props {
  href: string;
  children: React.ReactNode;
}
export default function MobileLinkListItem({ href, children }: Props) {
  const pathname = usePathname();
  const isCurrentPath = pathname === href;

  return (
    <motion.li
      whileHover={
        !isCurrentPath
          ? {
              color: "var(--primary)",
              x: 2,
            }
          : undefined
      }
      className={clsx(
        "w-max text-3xl",
        isCurrentPath ? "text-primary" : "border-b-2 border-transparent"
      )}
    >
      {isCurrentPath ? children : <a href={href}>{children}</a>}
    </motion.li>
  );
}
