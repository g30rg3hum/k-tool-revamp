import HeroCarousel from "@/components/pages/home/hero/hero-carousel";
import HeroButton from "@/components/pages/home/hero/hero-button";
import {
  CONTENT_LAYOUT,
  SPACE_BETWEEN_SECTIONS,
  VERTICAL_PADDING,
} from "@/lib/constants/styles";
import clsx from "clsx";
import Image from "next/image";
import * as motion from "motion/react-client";
import SectionLabel from "@/components/layout/section/section-label";
import {
  Brain,
  Briefcase,
  Clock,
  Cpu,
  Globe,
  Hourglass,
  Phone,
  Ruler,
  Star,
  User,
} from "lucide-react";
import SectionHeading from "@/components/layout/section/section-heading";
import Button from "@/components/ui/button";
import TechnicalExpertiseCarousel from "@/components/pages/home/technical-expertise/technical-expertise-carousel";
import FeaturedProjectsStack from "@/components/pages/home/featured-projects/featured-projects-stack";
import Hyperlink from "@/components/ui/hyperlink";
import GeneralContactForm from "@/components/pages/contact/general-contact-form";
import FadeOnScroll from "@/components/animations/fade-on-scroll";

const reasonsToChooseUs = [
  {
    text: "Customer-centric focus",
    icon: User,
  },
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
    text: "30 years of mastery",
    icon: Clock,
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
            className="w-full h-full object-cover opacity-5"
            width={1000}
            height={1000}
          />
        </motion.div>
        {/* Content */}
        <FadeOnScroll
          className={clsx(
            "flex flex-col items-center min-h-screen gap-9",
            CONTENT_LAYOUT
          )}
        >
          {/* Text */}
          <div className="flex flex-col items-center w-full">
            <span className="font-semibold text-center w-max px-3 rounded-md bg-neutral mb-6">
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
        </FadeOnScroll>
      </div>

      {/* What we do */}
      <div className="overflow-x-clip" id="what-we-do">
        <div className={clsx("flex flex-col gap-9 relative", CONTENT_LAYOUT)}>
          {/* Top right blob */}
          {/* <motion.div
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
              className="opacity-5"
              width={350}
              height={350}
            />
          </motion.div> */}

          {/* Top right blob */}
          {/* <motion.div
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
              className="opacity-5"
              width={285}
              height={285}
            />
          </motion.div> */}

          {/* Content */}
          {/* Heading and description */}
          <FadeOnScroll className="flex flex-col md:flex-row gap-6">
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
          </FadeOnScroll>

          {/* Moving card carousel */}
          <FadeOnScroll>
            <TechnicalExpertiseCarousel />
          </FadeOnScroll>
        </div>
      </div>

      {/* Featured projects */}
      <div>
        <div className={clsx(CONTENT_LAYOUT)}>
          {/* Content */}
          <div>
            <FadeOnScroll>
              <div className="flex justify-between items-center mb-3 sm:mb-6">
                <SectionLabel icon={Briefcase}>Featured projects</SectionLabel>
                <div className="hidden sm:block">
                  <Button variant="primary" href="">
                    View all our projects
                  </Button>
                </div>
              </div>

              <div className="max-w-lg md:max-w-xl mx-auto mb-6 sm:mb-9">
                <SectionHeading className="text-left sm:text-right mb-6">
                  A <span className="text-primary">glimpse</span> into our{" "}
                  <span className="text-primary">best work.</span>
                </SectionHeading>
                <p className="text-left">
                  Some of the projects we&apos;ve worked on and are particularly
                  proud of thus far, to help you get a sense of the actual
                  results our expertise can deliver.
                </p>
              </div>

              <div className="block mb-9 sm:hidden sm:mb-0">
                <Button variant="primary" href="">
                  View all our projects
                </Button>
              </div>
            </FadeOnScroll>

            <FadeOnScroll>
              <FeaturedProjectsStack />
            </FadeOnScroll>
          </div>
        </div>
      </div>

      {/* Why choose us */}
      <div>
        <div className={clsx(CONTENT_LAYOUT)}>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:gap-12 lg:gap-18">
            <FadeOnScroll className="md:max-w-sm lg:max-w-lg flex flex-col gap-6">
              <div>
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
              <Button widthWrap variant="primary" href="">
                More about us
              </Button>
            </FadeOnScroll>
            <FadeOnScroll className="flex-1 md:max-w-xl">
              {reasonsToChooseUs.map((reason) => (
                <p
                  className="w-full py-3 border-b last:border-b-0 font-semibold flex justify-between gap-3"
                  key={reason.text}
                >
                  <span>{reason.text}</span>
                  <reason.icon className="ml-3 text-primary" />
                </p>
              ))}
            </FadeOnScroll>
          </div>
        </div>
      </div>

      {/* Global outreach */}
      <div>
        <div className={clsx(CONTENT_LAYOUT)}>
          <FadeOnScroll>
            <SectionLabel icon={Globe} className="mb-3">
              Global outreach
            </SectionLabel>
            <div className="relative mx-auto mb-3 flex justify-center">
              <Image
                src="/images/countries.svg"
                alt="Map with countries we serve"
                width={800}
                height={800}
              />
              <div className="absolute bottom-0 left-0 right-0 h-30 md:h-60 lg:h-80 bg-gradient-to-t from-background to-transparent pointer-events-none" />
            </div>
          </FadeOnScroll>

          <FadeOnScroll>
            <SectionHeading className="text-left max-w-xl lg:max-w-2xl sm:mx-auto sm:text-center mb-6">
              Delivering{" "}
              <span className="text-primary">exceptional quality</span> in
              <span className="text-primary"> several countries</span> across
              <span className="text-primary"> several continents.</span>
            </SectionHeading>
            <div className="text-left max-w-2xl sm:mx-auto sm:text-center space-y-3">
              <p>
                We&apos;re based in Malaysia, but our methods are scalable and
                designed for global reach. This way, we can support you wherever
                you are, and provide the same exceptional service every time
                that extends beyond borders.
              </p>
              <p className="font-semibold">
                Currently, we serve: USA, Austria, Germany, Ireland, Malaysia,
                Thailand, Vietnam, Indonesia, Singapore, and Japan.
              </p>
            </div>
          </FadeOnScroll>
        </div>
      </div>

      <div className="bg-primary-dark text-neutral">
        <div className={clsx(CONTENT_LAYOUT, VERTICAL_PADDING)}>
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <FadeOnScroll className="md:max-w-lg">
              <SectionLabel icon={Phone} className="mb-3">
                Contact
              </SectionLabel>
              <SectionHeading className="mb-6">
                How can we <span className="text-primary">help?</span>
              </SectionHeading>
              <p className="mb-3">
                If you have general inquiries about us and what we do, please
                fill in the form on the right and we&apos;ll get in touch with
                you as soon as we can.
              </p>
              <p>
                However, if you already have a project or specific requirements
                in mind, please let us know <Hyperlink href="">here</Hyperlink>.
              </p>
            </FadeOnScroll>
            <FadeOnScroll className="w-full grow md:max-w-lg">
              <GeneralContactForm />
            </FadeOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
}
