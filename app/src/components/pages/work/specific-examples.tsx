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

const exampleImages = [
  {
    width: 220,
    file: "1.png",
    position:
      "top-[40%] left-[24%] sm:left-[35%] md:left-[37%] lg:left-[30%] rotate-4",
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
                  Example 2 title
                </SectionHeading>

                <div className="mb-6">
                  <ContentHeading className="mb-3">
                    Example sub-heading
                  </ContentHeading>
                  <p>
                    This is an example paragraph detailing all the important
                    details of example 2. We need to show that this example
                    offers some sort of result for the client.
                  </p>
                </div>

                <div>
                  <ContentHeading className="mb-3">
                    Another example sub-heading
                  </ContentHeading>
                  <p>This is another example paragraph.</p>
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
                {exampleImages.map((image, index) => (
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
                      src={`/images/work/example/${image.file}`}
                      alt={`Example ${index + 1}`}
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
