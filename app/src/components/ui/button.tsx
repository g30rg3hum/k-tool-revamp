"use client";

import clsx from "clsx";
import { motion } from "motion/react";
import Link from "next/link";

interface BaseProps {
  variant: "primary" | "outline" | "neutral";
  children: React.ReactNode;
}

interface ButtonProps extends BaseProps {
  onClick: () => void;
  href?: never;
}

interface LinkProps extends BaseProps {
  href: string;
  onClick?: never;
}

type Props = ButtonProps | LinkProps;

export default function Button({ variant, children, onClick, href }: Props) {
  const primaryStyles =
    "border-2 border-transparent bg-primary text-background";
  const outlineStyles = "border border-primary text-primary border-2";
  const neutralStyles = "bg-neutral";

  const className = clsx(
    "text-md w-max px-6 py-3 font-bold rounded-md flex items-center",
    variant === "primary" && primaryStyles,
    variant === "outline" && outlineStyles,
    variant === "neutral" && neutralStyles
  );

  const motionProps = {
    whileHover: "whileHover",
    initial: "initial",
    variants: {
      whileHover: {
        filter: variant === "neutral" ? "brightness(1.025)" : "brightness(1.4)",
        cursor: "pointer",
      },
    },
    className,
  };

  if (href) {
    return (
      <Link href={href} className="w-max">
        <motion.button {...motionProps}>{children}</motion.button>
      </Link>
    );
  }

  return (
    <motion.button {...motionProps} onClick={onClick}>
      {children}
    </motion.button>
  );
}
