"use client";

import clsx from "clsx";
import { motion } from "motion/react";

interface Props {
  variant: "primary" | "outline" | "neutral" | "dark";
  children: React.ReactNode;
  size?: "sm" | "md";
  square?: boolean;
  widthWrap?: boolean;
  onClick?: () => void;
  href?: string;
}

export default function Button({
  variant,
  size = "md",
  square = false,
  widthWrap = false,
  children,
  onClick,
  href,
}: Props) {
  const primaryStyles =
    "border-2 border-transparent bg-primary text-background";
  const outlineStyles = "border border-primary text-primary border-2";
  const neutralStyles = "bg-neutral text-foreground";
  const darkStyles = "bg-primary-dark text-background";

  const className = clsx(
    "font-bold rounded-md flex items-center shrink-0",
    variant === "primary" && primaryStyles,
    variant === "outline" && outlineStyles,
    variant === "neutral" && neutralStyles,
    variant === "dark" && darkStyles,
    square && "justify-center",
    square && size === "md" && "w-12 h-12",
    square && size === "sm" && "text-sm w-8 h-8",
    !square && size === "md" && "text-md px-6 py-3",
    !square && size === "sm" && "text-sm px-3 py-2",
    widthWrap && "w-max"
  );

  const motionProps = {
    whileHover: "whileHover",
    initial: "initial",
    variants: {
      whileHover: {
        filter: variant === "neutral" ? "brightness(1.015)" : "brightness(1.4)",
        cursor: "pointer",
      },
    },
    className,
  };

  if (href) {
    return (
      <a href={href} className="w-max">
        <motion.button {...motionProps}>{children}</motion.button>
      </a>
    );
  }

  return (
    <motion.button {...motionProps} onClick={onClick}>
      {children}
    </motion.button>
  );
}
