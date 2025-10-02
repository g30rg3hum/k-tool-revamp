"use client";

import FadeOnScroll from "@/components/animations/fade-on-scroll";
import ContentHeading from "@/components/layout/section/content/content-heading";
import SectionHeading from "@/components/layout/section/section-heading";
import SectionLabel from "@/components/layout/section/section-label";
import Button from "@/components/ui/button";
import { CONTENT_LAYOUT } from "@/lib/constants/styles";
import clsx from "clsx";
import { ArrowLeft, ArrowRight, BadgeCheck, Layers } from "lucide-react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import Image from "next/image";
import { useState } from "react";

const stampingImages = [
  {
    width: 280,
    file: "1.png",
    position: "top-[10%] left-[17%] rotate-4",
  },
  {
    width: 280,
    file: "2.png",
    position: "top-[43%] lg:top-[45%] right-[17%] -rotate-4",
  },
];

const cncMachiningImages = [
  {
    width: 90,
    file: "1.png",
    position: "top-[25%] left-[15%] sm:left-[20%] rotate-4 lg:left-[17%]",
  },
  {
    width: 150,
    file: "2.png",
    position: "top-[10%] left-[38%] sm:left-[40%] rotate-24 lg:top-[13%]",
  },
  {
    width: 145,
    file: "3.png",
    position: "top-[30%] right-[10%] sm:right-[15%] -rotate-12",
  },
  {
    width: 130,
    file: "4.png",
    position: "top-[52%] left-[15%] sm:left-[24%] lg:top-[46%] -rotate-4",
  },
  {
    width: 130,
    file: "5.png",
    position: "top-[58%] right-[8%] sm:right-[20%] rotate-12",
  },
  {
    width: 140,
    file: "6.png",
    position:
      "top-[77%] left-[20%] sm:top-[73%] sm:left-[32%] md:left-[40%] md:top-[67%] lg:left-[24%] -rotate-24 lg:top-[77%]",
  },
];

type Direction = "left" | "right";
export default function SpecificExamples() {
  const [currentExample, setCurrentExample] = useState(0);
  const [direction, setDirection] = useState<Direction>("right");

  const slideAmount = 100;
  const slideVariants = {
    initial: (direction: Direction) => ({
      translateX: direction === "right" ? -slideAmount : slideAmount,
      opacity: 0,
    }),
    animate: {
      translateX: 0,
      opacity: 1,
    },
    exit: (direction: Direction) => ({
      translateX: direction === "right" ? slideAmount : -slideAmount,
      opacity: 0,
    }),
  };

  const totalExamples = 2;

  const left = () => {
    setDirection("left");
    setCurrentExample((prev) => (prev === 0 ? totalExamples - 1 : prev - 1));
  };

  const right = () => {
    setDirection("right");
    setCurrentExample((prev) => (prev === totalExamples - 1 ? 0 : prev + 1));
  };

  return (
    <div className={clsx(CONTENT_LAYOUT, "overflow-hidden")}>
      <div className="flex flex-col lg:flex-row mb-6">
        <FadeOnScroll className="lg:max-w-[35rem] xl:max-w-[40rem] relative">
          <div className="absolute top-0 right-0 flex lg:hidden gap-6">
            <Button variant="neutral" size="sm" onClick={left}>
              <ArrowLeft size={18} />
            </Button>
            <Button variant="neutral" size="sm" onClick={right}>
              <ArrowRight size={18} />
            </Button>
          </div>
          <SectionLabel className="mb-3" icon={Layers}>
            Specific examples
          </SectionLabel>

          <AnimatePresence>
            {/* Example 1 content */}
            {currentExample === 0 && (
              <div>
                <SectionHeading className="mb-6">
                  Stamping die set
                </SectionHeading>

                <div className="mb-6">
                  <ContentHeading className="mb-3">
                    Complete die set manufacturing
                  </ContentHeading>
                  <p>
                    We have complete capability to design and manufacture
                    stamping die sets from blueprint to the end product, giving
                    us full control over quality and precision at every stage.
                  </p>
                </div>

                <ContentHeading className="mb-3">
                  Capability for modular die sets
                </ContentHeading>
                <p className="mb-3">
                  Alongside standard die manufacturing, we also have the ability
                  to design and produce modular die sets when required. Such
                  benefits include —
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <BadgeCheck color="green" className="shrink-0" size={22} />
                    <p>
                      <span className="text-primary font-bold">
                        Cost savings:
                      </span>{" "}
                      only worn or damaged inserts need replacement, not the
                      entire die.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <BadgeCheck color="green" className="shrink-0" size={22} />
                    <p>
                      <span className="text-primary font-bold">
                        Quick and easy maintenance:
                      </span>{" "}
                      modular components can be swapped out with minimal
                      downtime, keeping your production line running smoothly.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <BadgeCheck color="green" className="shrink-0" size={22} />
                    <p>
                      <span className="text-primary font-bold">
                        Scalability and flexibility:
                      </span>{" "}
                      for larger more complex die sets, the modular approach
                      allows easier configuration and adaptation for different
                      parts or future product changes.
                    </p>
                  </li>
                </ul>
              </div>
            )}

            {/* Example 2 content */}
            {currentExample === 1 && (
              <div>
                <SectionHeading className="mb-6">
                  CNC Milling Components
                </SectionHeading>

                <div className="mb-6 space-y-3">
                  <ContentHeading>Tight tolerance capabilities</ContentHeading>
                  <p>
                    Tight tolerance machining achieved through advanced CAM
                    programming, custom fixturing, and optimized cutting
                    strategies.
                  </p>
                  <p>
                    Precise control of toolpaths, feeds, and speeds combined
                    with strategic work holding minimises tool deflection and
                    thermal distortion.
                  </p>
                </div>

                <div className="mb-6 space-y-3">
                  <ContentHeading>Multi-material expertise</ContentHeading>
                  <p>
                    Our CNC milling work includes challenging materials, such as
                    titanium alloys, hardened tool steels, and high performance
                    polymers like ULTEM, PEEK and Torlon.
                  </p>
                  <p>
                    Specialised tooling strategies and cutting parameters are
                    essential for these materials to prevent premature wear and
                    maintain dimensional stability during machining.
                  </p>
                  <p>
                    We also provide precision finishing services including gold
                    plating to deliver complete component solutions.
                  </p>
                </div>

                <div className="mb-6 space-y-3">
                  <ContentHeading>Micro-machining capabilities</ContentHeading>
                  <p>
                    We produce components with extremely small features
                    including 0.1mm diameter holes, micro-threads and intricate
                    internal channels.
                  </p>
                  <p>
                    Our precision spindles and specialised micro-tooling enable
                    use to produce critical components for electronics
                    manufacturing, medical devices, and automatic applications
                    that require exceptional detail and accuracy.
                  </p>
                </div>
              </div>
            )}
          </AnimatePresence>
        </FadeOnScroll>

        <FadeOnScroll className="grow-1 relative min-h-[500px] flex flex-col">
          <AnimatePresence mode="wait" custom={direction}>
            {/* Example 1 images */}
            {currentExample === 0 && (
              <motion.div
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                key="Example 1 images"
                className="h-full grow-1"
                custom={direction}
              >
                {stampingImages.map((image, index) => (
                  <motion.div
                    key={`Example 1 images - ${image.file}`}
                    animate={{ translateY: [0, -10, 0] }}
                    transition={{
                      duration: 5 + 1 * (index % 2 === 0 ? -1 : 1),
                      repeat: Infinity,
                    }}
                    className={`absolute ${image.position}`}
                  >
                    <Image
                      src={`/images/work/stamping-die-set/${image.file}`}
                      alt={`Stamping die set ${index + 1}`}
                      height={1000}
                      width={image.width}
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Example 2 images */}
            {currentExample === 1 && (
              <motion.div
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                key="Example 2 images"
                className="h-full grow-1"
                custom={direction}
              >
                {cncMachiningImages.map((image, index) => (
                  <motion.div
                    key={`Example 2 images - ${image.file}`}
                    animate={{ translateY: [0, -10, 0] }}
                    transition={{
                      duration: 5 + 1 * (index % 2 === 0 ? -1 : 1),
                      repeat: Infinity,
                    }}
                    className={`absolute ${image.position}`}
                  >
                    <Image
                      src={`/images/work/cnc-machining/${image.file}`}
                      alt={`CNC machining component ${index + 1}`}
                      height={1000}
                      width={image.width}
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <Image
            src="/images/shapes/shadows/1.png"
            height={1000}
            width={1000}
            alt="Shadow"
            className="opacity-30 rotate-2 absolute -bottom-10"
          />
        </FadeOnScroll>
      </div>
      <FadeOnScroll className="gap-9 w-max mx-auto lg:flex hidden">
        <Button variant="neutral" onClick={left}>
          <ArrowLeft />
        </Button>
        <Button variant="neutral" onClick={right}>
          <ArrowRight />
        </Button>
      </FadeOnScroll>
    </div>
  );
}
