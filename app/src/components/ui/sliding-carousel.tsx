"use client";

import * as motion from "motion/react-client";
import clsx from "clsx";
import { useMeasure } from "@uidotdev/usehooks";

interface Props {
  children: React.ReactNode;
  className?: string;
}
export default function SlidingCarousel({ children, className }: Props) {
  const [containerRef, { width: containerWidth }] = useMeasure();
  const [contentRef, { width: contentWidth }] = useMeasure();

  const maxDragLeft =
    containerWidth && contentWidth
      ? Math.min(0, containerWidth - contentWidth)
      : 0;

  return (
    <div
      className={clsx(
        "overflow-y-visible overflow-x-clip cursor-grab active:cursor-grabbing",
        className
      )}
      ref={containerRef}
    >
      <motion.div
        className="flex gap-6 min-w-max"
        drag="x"
        dragConstraints={{ left: maxDragLeft, right: 0 }}
        ref={contentRef}
        dragElastic={0.05}
      >
        {children}
      </motion.div>
    </div>
  );
}
