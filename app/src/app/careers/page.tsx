import FadeOnScroll from "@/components/animations/fade-on-scroll";
import ContentHeading from "@/components/layout/section/content/content-heading";
import SectionHeading from "@/components/layout/section/section-heading";
import SectionLabel from "@/components/layout/section/section-label";
import AvailablePositionsButton from "@/components/pages/careers/available-positions-button";
import GeneralContact from "@/components/pages/sections/general-contact";
import Hyperlink from "@/components/ui/hyperlink";
import { CONTENT_LAYOUT, SPACE_BETWEEN_SECTIONS } from "@/lib/constants/styles";
import clsx from "clsx";
import { BookOpen, Briefcase, Rose, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import { title } from "process";

const gridImages = [
  {
    pos: "col-span-2 row-span-1",
    src: "images/stock/careers/1.jpg",
  },
  {
    pos: "col-span-1 row-span-2",
    src: "images/stock/careers/5.jpg",
  },
  {
    pos: "col-span-1 row-span-1",
    src: "images/stock/careers/3.jpg",
  },
  {
    pos: "col-span-1 row-span-1",
    src: "images/stock/careers/4.jpg",
  },
];

const values = [
  {
    title: "Masters of our craft",
    description:
      "We hire people who take personal pride in their work. Every team member treats each part as a reflection of their skill and dedication.",
  },
  {
    title: "Continuous learning",
    description:
      "Technology evolves, and so do we. We value curiousity, invest in training, and encourage mastering new skills and techniques.",
  },
  {
    title: "Team first",
    description:
      "We collaborate across departments, share knowledge freely, and understand that our collective success depends on putting each other first.",
  },
  {
    title: "Problem solvers",
    description:
      "We embrace new challenges and always look for ways to push past hurdles.",
  },
  {
    title: "Sense of urgency",
    description:
      "We move fast and deliver results within project deadlines, without compromising on quality.",
  },
  {
    title: "Ownership mindset",
    description:
      "We take full responsibility for our own work, and proactively address possible issues before they arise.",
  },
];

const hiring = [
  {
    title: "Frontend Engineer",
    description: "Build and optimize user interfaces for our web applications.",
    url: "https://example.com/frontend-engineer",
  },
  {
    title: "Backend Engineer",
    description: "Develop and maintain server-side logic, databases, and APIs.",
    url: "https://example.com/backend-engineer",
  },
  {
    title: "UI/UX Designer",
    description:
      "Design intuitive and engaging user experiences for our digital products.",
    url: "https://example.com/ui-ux-designer",
  },
  {
    title: "Product Manager",
    description:
      "Lead product development from ideation to launch, ensuring alignment with business goals.",
    url: "https://example.com/product-manager",
  },
];

export default function CareersPage() {
  return (
    <div className={SPACE_BETWEEN_SECTIONS}>
      <div className={CONTENT_LAYOUT}>
        <div className="flex flex-col gap-9 md:flex-row">
          <FadeOnScroll className="md:max-w-[35%]">
            <SectionLabel className="mb-3" icon={Briefcase}>
              Careers
            </SectionLabel>
            <SectionHeading className="mb-6">
              <span className="text-primary">Join us</span> in our mission to{" "}
              <span className="text-primary">elevate</span> tooling innovation.
            </SectionHeading>
            <p className="mb-3">
              We are always looking for new ways to improve and grow.
            </p>
            <p className="mb-6">
              At the forefront of making everything possible is our team of
              people. Thus, we are always on the lookout for new talented,
              driven individuals to join us on our journey.
            </p>
            <AvailablePositionsButton />
          </FadeOnScroll>

          <FadeOnScroll className="grid grid-cols-3 grid-rows-2 gap-3 h-96 grow-1">
            {gridImages.map((image, index) => (
              <div
                className={clsx(image.pos, "rounded-md bg-cover bg-center ")}
                key={index}
                style={{ backgroundImage: `url('${image.src}')` }}
              />
            ))}
          </FadeOnScroll>
        </div>
      </div>

      {/* Values */}
      <div className={CONTENT_LAYOUT}>
        <FadeOnScroll className="mb-9">
          <SectionLabel className="mb-3" icon={Rose}>
            Values
          </SectionLabel>
          <SectionHeading className="mb-6">
            Everything is upheld by our{" "}
            <span className="text-primary">core principles.</span>
          </SectionHeading>
          <p>
            We look for candidates that closely align with these values, to
            ensure that they thrive in our company culture.
          </p>
        </FadeOnScroll>
        <FadeOnScroll className="columns-[300px]">
          {values.map((value) => (
            <div
              className="border border-neutral bg-white rounded-md p-6 mb-3"
              key={value.title}
            >
              <ContentHeading className="mb-3">{value.title}</ContentHeading>
              <p>{value.description}</p>
            </div>
          ))}
        </FadeOnScroll>
      </div>

      <FadeOnScroll className={CONTENT_LAYOUT} id="available-positions">
        <div>
          <SectionLabel className="mb-3" icon={BookOpen}>
            Available positions
          </SectionLabel>
          <SectionHeading className="mb-6">
            We are currently <span className="text-primary">hiring for...</span>
          </SectionHeading>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-9 justify-between">
          <div className="flex flex-col md:w-[70%]">
            {hiring.length === 0 && <p>No positions are open at the moment.</p>}
            {hiring.length !== 0 &&
              hiring.map((position) => (
                <div key={position.title} className="mb-6">
                  <ContentHeading>
                    {position.title}{" "}
                    <Hyperlink out href={position.url}>
                      <SquareArrowOutUpRight
                        className="inline-block ml-1"
                        size={20}
                      />
                    </Hyperlink>
                  </ContentHeading>
                  <p>{position.description}</p>
                </div>
              ))}
          </div>
          {hiring.length !== 0 && (
            <Image
              src="/images/stock/careers/6.jpg"
              alt="Hiring image"
              width={1000}
              height={1000}
              className="md:w-[300px] lg:w-[400px] md:h-[280px] object-cover rounded-md"
            />
          )}
        </div>
      </FadeOnScroll>

      <GeneralContact />
    </div>
  );
}
