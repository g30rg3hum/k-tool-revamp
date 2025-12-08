"use client";

import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import clsx from "clsx";

interface Props {
    href: string;
    children: React.ReactNode;
    className?: string;
}
export default function DesktopLinkListItem({
    href,
    children,
    className,
}: Props) {
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
            className={clsx(
                isCurrentPath
                    ? "text-primary"
                    : "border-b-2 border-transparent",
                className
            )}
        >
            {isCurrentPath ? children : <a href={href}>{children}</a>}
        </motion.li>
    );
}
