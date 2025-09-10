import HeroCarousel from "@/components/pages/home/hero/hero-carousel";
import HeroButton from "@/components/pages/home/hero/hero-button";
import {
  CONTENT_LAYOUT,
  SPACE_BETWEEN_SECTIONS,
  VERTICAL_PADDING,
} from "@/constants/styles";
import clsx from "clsx";
import Image from "next/image";
import * as motion from "motion/react-client";
import SectionLabel from "@/components/layout/section/section-label";
import {
  Brain,
  Briefcase,
  Clock,
  Cpu,
  Hourglass,
  Ruler,
  Star,
  User,
} from "lucide-react";
import SectionHeading from "@/components/layout/section/section-heading";
import Button from "@/components/ui/button";
import TechnicalExpertiseCarousel from "@/components/pages/home/technical-expertise/technical-expertise-carousel";
import FeaturedProjectsStack from "@/components/pages/home/featured-projects/featured-projects-stack";

const reasonsToChooseUs = [
  {
    text: "Micron-level precision",
    icon: Ruler,
  },
  {
    text: "Rapid turnaround",
    icon: Hourglass,
  },
  {
    text: "Cutting-edge machinery",
    icon: Cpu,
  },
  {
    text: "30 years of expertise",
    icon: Clock,
  },
  {
    text: "Customer-centric focus",
    icon: User,
  },
];

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
            <h2 className="text-4xl sm:text-5xl font-bold space-y-1 text-center mb-3">
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
      <div className="overflow-x-clip">
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
              <div className="w-max">
                <Button variant="primary" href="">
                  Learn more
                </Button>
              </div>
            </div>
          </div>

          {/* Moving card carousel */}
          <TechnicalExpertiseCarousel />
        </div>
      </div>

      {/* Featured projects */}
      <div className="bg-[url('/images/shapes/waves/layered/1.png')] bg-cover bg-center text-neutral">
        <div className={clsx(CONTENT_LAYOUT, VERTICAL_PADDING)}>
          {/* Content */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <SectionLabel icon={Briefcase}>Featured projects</SectionLabel>
              <div className="hidden sm:block">
                <Button variant="neutral" href="">
                  View all our projects
                </Button>
              </div>
            </div>

            <div className="max-w-xl mx-auto mb-6 sm:mb-12">
              <SectionHeading className="text-right mb-6">
                A <span className="text-primary">glimpse</span> into our{" "}
                <span className="text-primary">best work.</span>
              </SectionHeading>
              <p className="text-left">
                Some of the projects we&apos;ve worked on and are particularly
                proud of thus far, to help you get a sense of the tangible
                results our expertise can deliver.
              </p>
            </div>

            <div className="block mb-12 sm:hidden sm:mb-0">
              <Button variant="neutral" href="">
                View all our projects
              </Button>
            </div>

            <FeaturedProjectsStack />
          </div>
        </div>
      </div>

      {/* Why choose us */}
      <div>
        <div className={clsx(CONTENT_LAYOUT)}>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:gap-12 lg:gap-27">
            <div className="max-w-md md:max-w-sm lg:max-w-lg">
              <SectionLabel icon={Star} className="mb-3">
                Why choose us?
              </SectionLabel>
              <SectionHeading>
                We offer the best combination of{" "}
                <span className="text-primary">
                  expertise, precision, and efficiency
                </span>{" "}
                in the industry.
              </SectionHeading>
            </div>
            <div className="flex-1 md:max-w-lg">
              {reasonsToChooseUs.map((reason) => (
                <p
                  className="w-full py-3 border-b last:border-b-0 font-semibold flex justify-between gap-3"
                  key={reason.text}
                >
                  <span>{reason.text}</span>
                  <reason.icon className="ml-3 text-primary" />
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
