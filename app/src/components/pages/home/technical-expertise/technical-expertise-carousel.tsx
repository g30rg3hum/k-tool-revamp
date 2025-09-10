"use client";

import * as motion from "motion/react-client";
import ContentHeading from "@/components/layout/section/content/content-heading";
import clsx from "clsx";
import { useMeasure } from "@uidotdev/usehooks";

const technicalExpertisePoints = [
  {
    title: "Profile Grinding",
    description:
      "Micron-level accuracy and fine surface finishes for complex parts like punches and dies. We recommend this when CNC or wire cutting isn't enough.",
  },
  {
    title: "CNC Machining",
    description:
      "High-precision milling for complex parts using various materials, ensuring tight tolerances and fast turnaround for both prototypes and production",
  },
  {
    title: "Design & Reverse Engineering",
    description:
      "Create high-precision die sets, and replicate/modify existing tools or parts — backed by our specialised expertise in advanced tooling for the electronics industry.",
  },
  {
    title: "CAD/CAM Software",
    description:
      "Advanced solutions to turn your ideas into precise tooling — improving accuracy, shortening lead times, and ensuring seamless production.",
  },
  {
    title: "Sinker EDM",
    description:
      "High-precision spark erosion for detailed cavities, fine details, and hardened materials used in advanced tooling and mold applications.",
  },
  {
    title: "Wire Cutting",
    description:
      "Precision wire cutting for fine-finish cuts, tight tolerances, and small radii — ideal for detailed profiles and high-accuracy parts.",
  },
  {
    title: "Steel and Carbide Grinding",
    description:
      "Expert grinding of steel and carbide to tight tolerances, ensuring high-dimensional accuracy and durability for demanding tooling needs.",
  },
];

export default function TechnicalExpertiseCarousel() {
  const [containerRef, { width: containerWidth }] = useMeasure();
  const [contentRef, { width: contentWidth }] = useMeasure();

  const maxDragLeft =
    containerWidth && contentWidth
      ? Math.min(0, containerWidth - contentWidth)
      : 0;

  return (
    <div
      className="overflow-hidden cursor-grab active:cursor-grabbing"
      ref={containerRef}
    >
      <motion.div
        className="flex gap-6 min-w-max"
        drag="x"
        dragConstraints={{ left: maxDragLeft, right: 0 }}
        ref={contentRef}
        dragElastic={0.05}
      >
        {[...technicalExpertisePoints].map((point) => (
          <motion.div
            key={point.title}
            whileHover={{ y: -2 }}
            className={clsx(
              "h-[25rem] w-xs bg-neutral rounded-md shrink-0 flex flex-col justify-between"
            )}
          >
            <div className="p-6">
              <ContentHeading className="mb-3 border-b border-primary">
                {point.title}
              </ContentHeading>

              <p>{point.description}</p>
            </div>

            <div
              className="border rounded-md bg-black h-[46%]"
              // style={{ backgroundImage: `url(${point.image})` }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
