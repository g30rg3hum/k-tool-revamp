import * as motion from "motion/react-client";
import ContentHeading from "@/components/layout/section/content/content-heading";
import clsx from "clsx";
import SlidingCarousel from "@/components/ui/sliding-carousel";

export const technicalExpertisePoints = [
  {
    title: "Profile Grinding",
    description:
      "Micron-level accuracy and fine surface finishes for complex parts like punches and dies. We recommend this when CNC or wire cutting isn't enough.",
    image: "1.jpg",
  },
  {
    title: "CNC Machining",
    description:
      "High-precision milling for complex parts using various materials, ensuring tight tolerances and fast turnaround for both prototypes and production",
    image: "2.jpg",
  },
  {
    title: "Design & Reverse Engineering",
    description:
      "Create high-precision die sets, and replicate/modify existing tools or parts — backed by our specialised expertise in advanced tooling for the electronics industry.",
    image: "3.jpg",
  },
  {
    title: "CAD/CAM Software",
    description:
      "Advanced solutions to turn your ideas into precise tooling — improving accuracy, shortening lead times, and ensuring seamless production.",
    image: "4.jpg",
  },
  {
    title: "Sinker EDM",
    description:
      "High-precision spark erosion for detailed cavities, fine details, and hardened materials used in advanced tooling and mold applications.",
    image: "5.jpg",
  },
  {
    title: "Wire Cutting",
    description:
      "Precision wire cutting for fine-finish cuts, tight tolerances, and small radii — ideal for detailed profiles and high-accuracy parts.",
    image: "6.jpg",
  },
  {
    title: "Steel and Carbide Grinding",
    description:
      "Expert grinding of steel and carbide to tight tolerances, ensuring high-dimensional accuracy and durability for demanding tooling needs.",
    image: "7.jpg",
  },
];

export default function TechnicalExpertiseCarousel() {
  return (
    <SlidingCarousel>
      {[...technicalExpertisePoints].map((point) => (
        <motion.div
          key={point.title}
          whileHover={{ y: -3 }}
          className={clsx(
            "h-[25rem] w-xs bg-white rounded-md shrink-0 flex flex-col justify-between border border-neutral"
          )}
        >
          <div className="p-6">
            <ContentHeading className="mb-3 border-b">
              {point.title}
            </ContentHeading>

            <p>{point.description}</p>
          </div>

          <div
            className="rounded-md bg-center bg-cover h-[43%] m-3"
            style={{
              backgroundImage: `url('/images/stock/home/technical-expertise/${point.image}')`,
            }}
          />
        </motion.div>
      ))}
    </SlidingCarousel>
  );
}
