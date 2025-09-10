import HeroCarousel from "@/components/pages/home/hero/hero-carousel";
import HeroButton from "@/components/pages/home/hero/hero-button";
import { CONTENT_LAYOUT, SPACE_BETWEEN_SECTIONS } from "@/constants/styles";
import clsx from "clsx";
import Image from "next/image";
import * as motion from "motion/react-client";
import SectionLabel from "@/components/layout/section/section-label";
import { Brain } from "lucide-react";
import SectionHeading from "@/components/layout/section/section-heading";
import Button from "@/components/ui/button";
import TechnicalExpertiseCarousel from "@/components/pages/home/technical-expertise/technical-expertise-carousel";

export default function Home() {
  return (
    <div className={SPACE_BETWEEN_SECTIONS}>
      {/* Hero section */}
      <div className="relative overflow-hidden">
        {/* Background shape */}
        <motion.div
          animate={{
            scaleX: [1.05, 1.1, 1, 1.05],
            scaleY: [1.05, 1, 1.1, 1.05],
            rotate: [0, 1, -1, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 pointer-events-none -z-10"
        >
          <Image
            src="/images/shapes/waves/1.svg"
            alt="Wave shape"
            className="w-full h-full object-cover opacity-10"
            width={1000}
            height={1000}
          />
        </motion.div>
        {/* Content */}
        <div
          className={clsx(
            "flex flex-col items-center min-h-screen gap-9",
            CONTENT_LAYOUT
          )}
        >
          {/* Text */}
          <div className="flex flex-col items-center w-full">
            <span className="text-center w-max px-3 rounded-md bg-neutral mb-6">
              Precision engineering
            </span>
            {/* Custom heading */}
            <h2 className="text-4xl sm:text-5xl font-bold space-y-3 text-center mb-3">
              <span className="block">Your vision.</span>
              <span className="block text-primary font-serif font-semibold">
                Our <span className="">precision.</span>
              </span>
              <span className="block">Your success.</span>
            </h2>
            <p className="max-w-lg text-center mb-6">
              We specialise in building advanced, complex tooling and
              mold-making that meet the highest standards of precision and
              quality and act as the foundation for tomorrow&apos;s technology.
            </p>
            <HeroButton />
          </div>
          {/* Carousel */}
          <HeroCarousel />
        </div>
      </div>

      {/* What we do */}
      <div>
        <div className={clsx("flex flex-col gap-9 relative", CONTENT_LAYOUT)}>
          {/* Top right blob */}
          <motion.div
            animate={{
              scaleX: [1, 1.1, 1, 1],
              scaleY: [1, 1, 1.1, 1],
              y: [0, -2, 2, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -z-10 -bottom-25 -left-25 pointer-events-none"
          >
            <Image
              src="/images/shapes/blobs/1.svg"
              alt="Blob shape"
              className="opacity-10"
              width={350}
              height={350}
            />
          </motion.div>

          {/* Top right blob */}
          <motion.div
            animate={{
              scaleX: [1, 1.1, 1, 1],
              scaleY: [1, 1, 1.1, 1],
              y: [0, -2, 2, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -z-10 top-20 -right-25 pointer-events-none"
          >
            <Image
              src="/images/shapes/blobs/2.svg"
              alt="Blob shape"
              className="opacity-10"
              width={285}
              height={285}
            />
          </motion.div>

          {/* Content */}
          {/* Heading and description */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-[40%]">
              <SectionLabel className="mb-3" icon={Brain}>
                Technical expertise
              </SectionLabel>
              <SectionHeading>
                All your <span className="text-primary">tooling needs</span>{" "}
                covered under <span className="text-primary">one roof</span>.
              </SectionHeading>
            </div>
            <div className="md:w-[60%] flex flex-col justify-between gap-6">
              <p>
                When precision matters, complexity shouldn&apos;t slow you down.
                Our complete in-house capabilities and 30 years of mastery turn
                your challenging designs into perfect parts, fast.
              </p>
              <Button variant="primary" href="">
                Learn more
              </Button>
            </div>
          </div>

          {/* Moving card carousel */}
          <TechnicalExpertiseCarousel />
        </div>
      </div>

      {/* Highlight projects */}
      <div></div>
    </div>
  );
}
