import ContentHeading from "@/components/layout/section/content/content-heading";
import SectionHeading from "@/components/layout/section/section-heading";
import SectionLabel from "@/components/layout/section/section-label";
import GeneralContact from "@/components/pages/sections/general-contact";
import { CONTENT_LAYOUT, SPACE_BETWEEN_SECTIONS } from "@/lib/constants/styles";
import { ArrowLeft, ArrowRight, BadgeCheck, Layers } from "lucide-react";
import Image from "next/image";
import * as motion from "motion/react-client";
import Button from "@/components/ui/button";
import FadeOnScroll from "@/components/animations/fade-on-scroll";

const stampingImages = [
  {
    width: 70,
    file: "1.png",
    position: "top-[15%] left-[17%] rotate-4",
  },
  {
    width: 50,
    file: "2.png",
    position: "top-[20%] left-[43%] -rotate-3",
  },
  {
    width: 80,
    file: "3.png",
    position: "top-[23%] right-[17%] -rotate-7",
  },
  {
    width: 80,
    file: "4.png",
    position: "top-[55%] left-[25%] rotate-5",
  },
  {
    width: 80,
    file: "5.png",
    position: "top-[55%] right-[30%] -rotate-5",
  },
];

export default function WorkPage() {
  return (
    <div className={SPACE_BETWEEN_SECTIONS}>
      <div className={CONTENT_LAYOUT}>
        <div className="flex flex-col lg:flex-row mb-6">
          <FadeOnScroll className="lg:max-w-[35rem] xl:max-w-[40rem] relative">
            <div className="absolute top-0 right-0 flex lg:hidden gap-6">
              <Button variant="neutral" size="sm">
                <ArrowLeft size={18} />
              </Button>
              <Button variant="neutral" size="sm">
                <ArrowRight size={18} />
              </Button>
            </div>
            <SectionLabel className="mb-3" icon={Layers}>
              Example work
            </SectionLabel>
            <SectionHeading className="mb-6">Stamping die set</SectionHeading>

            <div className="mb-6">
              <ContentHeading className="mb-3">
                Complete die set manufacturing
              </ContentHeading>
              <p>
                We have complete capability to design and manufacture stamping
                die sets from blueprint to the end product, giving us full
                control over quality and precision at every stage.
              </p>
            </div>

            <div>
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
                    modular components can be swapped out with minimal downtime,
                    keeping your production line running smoothly.
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
          </FadeOnScroll>

          <FadeOnScroll className="grow-1 relative min-h-[500px]">
            {stampingImages.map((image, index) => (
              <motion.div
                key={image.file}
                animate={{ translateY: [0, -10, 0] }}
                transition={{
                  duration: 5 + 1 * (index % 2 === 0 ? -1 : 1),
                  repeat: Infinity,
                }}
                className={`absolute ${image.position}`}
              >
                <Image
                  src={`/images/work/stamping/${image.file}`}
                  alt={`Stamping die set ${index + 1}`}
                  height={1000}
                  width={image.width}
                />
              </motion.div>
            ))}

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
          <Button variant="neutral">
            <ArrowLeft />
          </Button>
          <Button variant="neutral">
            <ArrowRight />
          </Button>
        </FadeOnScroll>
      </div>
      <GeneralContact />
    </div>
  );
}
