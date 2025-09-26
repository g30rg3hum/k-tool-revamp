import FadeOnScroll from "@/components/animations/fade-on-scroll";
import ContentHeading from "@/components/layout/section/content/content-heading";
import SectionHeading from "@/components/layout/section/section-heading";
import SectionLabel from "@/components/layout/section/section-label";
import ValuesAccordion from "@/components/pages/about/values/values-accordion";
import GeneralContact from "@/components/pages/sections/general-contact";
import { CONTENT_LAYOUT, SPACE_BETWEEN_SECTIONS } from "@/lib/constants/styles";
import { BicepsFlexed, Eye, History, Rocket } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className={SPACE_BETWEEN_SECTIONS}>
      {/* Overview */}
      <FadeOnScroll className={CONTENT_LAYOUT}>
        <div className="flex flex-col md:flex-row gap-9 justify-between">
          <div className="md:w-[60%] flex flex-col">
            <SectionLabel className="mb-3" icon={Eye}>
              Overview
            </SectionLabel>
            <div></div>
            <SectionHeading className="mb-6">
              Established for several{" "}
              <span className="text-primary">decades</span>, we have been at the{" "}
              <span className="text-primary">forefront</span> of{" "}
              <span className="text-primary">tooling innovation.</span>
            </SectionHeading>
            <p>
              We are an international, leading ISO-certified precision
              engineering company based in Malaysia. Mr. Tan Hoo Peng founded
              K-Tool Engineering in 1990, and ever since we have been committed
              to delivering high-precision tooling solutions to key sectors of
              the electronics industry. These include semiconductors,
              connectors, stamping parts, and many more.
            </p>
          </div>
          <Image
            src="/images/stock/about/overview/1.png"
            width={1000}
            height={0}
            alt="Company image"
            className="rounded-md md:w-[40%] max-w-[30rem] md:max-w-[20rem] h-max self-center object-cover"
          />
        </div>
      </FadeOnScroll>

      {/* Mission and vision */}
      <div className={CONTENT_LAYOUT}>
        <FadeOnScroll>
          <SectionLabel className="mb-6" icon={Rocket}>
            Mission and vision
          </SectionLabel>
        </FadeOnScroll>

        <div className="flex flex-col md:flex-row gap-9">
          <FadeOnScroll className="bg-white md:w-[50%] p-6 rounded-md border border-neutral">
            <ContentHeading className="mb-3">What drives us</ContentHeading>
            <p>
              Delivering precision engineering solutions with uncompromising
              quality and speed, transforming our clients&apos; complex designs
              into perfectly manufactured components with advanced technology
              and decades of expertise.
            </p>
          </FadeOnScroll>
          <FadeOnScroll className="bg-white md:w-[50%] p-6 rounded-md border border-neutral">
            <ContentHeading className="mb-3">
              Where we&apos;re headed
            </ContentHeading>
            <p>
              We envision a future where we are the precision engineering
              partner that innovators from all over the world trust first, known
              for solving difficult challenges through technical excellence and
              genuine, transparent partnership.
            </p>
          </FadeOnScroll>
        </div>
      </div>

      {/* Core values */}
      <div className={CONTENT_LAYOUT}>
        <div className="flex flex-col gap-9 md:gap-18 md:flex-row md:justify-between">
          <FadeOnScroll className="md:max-w-sm lg:max-w-lg">
            <SectionLabel className="mb-3" icon={BicepsFlexed}>
              Values
            </SectionLabel>
            <SectionHeading className="mb-6">
              We operate <span className="text-primary">every project</span>{" "}
              with these <span className="text-primary">firm principles</span>{" "}
              in mind.
            </SectionHeading>
            <p>
              Our commitment to our core values helps us to deliver exceptional
              results every time - values that we live by during every project
              we take on and every relationship we build.
            </p>
          </FadeOnScroll>
          <FadeOnScroll className="flex-1 md:max-w-lg">
            <ValuesAccordion />
          </FadeOnScroll>
        </div>
      </div>

      {/* History */}
      <div className={CONTENT_LAYOUT}>
        <FadeOnScroll>
          <SectionLabel className="mb-3" icon={History}>
            History
          </SectionLabel>
          <div className="md:text-center md:mx-auto flex flex-col items-center mb-9">
            <SectionHeading className="mb-6 w-full md:max-w-xl">
              We have made{" "}
              <span className="text-primary">significant improvements</span>{" "}
              since our founding.
            </SectionHeading>
            <p className="md:max-w-2xl">
              We have continuously improved our processes, embraced new
              technologies, and expanded our workspaces to better serve our
              clients and adapt to the ever-changing market demands.
            </p>
          </div>
        </FadeOnScroll>

        <div className="flex flex-col items-center gap-12">
          <FadeOnScroll className="max-w-4xl flex flex-col md:flex-row items-center bg-white rounded-md border border-neutral p-3">
            <div className="md:w-[50%] p-6 order-1">
              <ContentHeading className="mb-3">
                Establishment (1990)
              </ContentHeading>
              <p>
                We began as a small, humble workshop in a rented space,
                initially focused on producing spare parts. Since then,
                we&apos;ve experienced rapid growth in both our workforce and
                machinery.
              </p>
            </div>
            <Image
              src="/images/stock/about/history/1.jpg"
              height={1000}
              width={1000}
              alt="Establishment image"
              className="h-full w-full md:w-[50%] rounded-md order-2 object-cover min-h-[300px]"
            />
          </FadeOnScroll>
          <FadeOnScroll className="max-w-4xl flex flex-col md:flex-row items-center bg-white border border-neutral p-3 rounded-md">
            <Image
              src="/images/stock/about/history/2.jpg"
              height={1000}
              width={1000}
              alt="First factory image"
              className="h-full w-full md:w-[50%] rounded-md order-2 md:order-1 object-cover min-h-[300px]"
            />
            <div className="md:w-[50%] p-6 order-1 md:order-2">
              <ContentHeading className="mb-3">
                First factory (1992)
              </ContentHeading>
              <p>
                Just two years later, we moved into our own 12,000 square foot
                semi-detached factory in Bayan Lepas — a thriving industrial hub
                on the island of Penang in Malaysia. This allowed us to expand
                our production capabilities and better serve our growing client
                base.
              </p>
            </div>
          </FadeOnScroll>
          <FadeOnScroll className="max-w-4xl flex flex-col md:flex-row items-center bg-white border border-neutral p-3 rounded-md">
            <div className="md:w-[50%] p-6">
              <ContentHeading className="mb-3">
                Bigger factory (2010)
              </ContentHeading>
              <p>
                Just two years later, we moved into our own 12,000 square foot
                semi-detached factory in Bayan Lepas — a thriving industrial hub
                on the island of Penang in Malaysia. This allowed us to expand
                our production capabilities and better serve our growing client
                base.
              </p>
            </div>
            <Image
              src="/images/stock/about/history/3.jpg"
              height={1000}
              width={1000}
              alt="First factory image"
              className="h-full w-full md:w-[50%] rounded-md object-cover min-h-[300px]"
            />
          </FadeOnScroll>
          <FadeOnScroll className="max-w-4xl flex flex-col md:flex-row items-center bg-white border border-neutral p-3 rounded-md">
            <div className="md:w-[50%] p-6 order-1 md:order-2">
              <ContentHeading className="mb-3">
                Sale of division (2023)
              </ContentHeading>
              <p>
                We sold our semiconductor mold division to TOWA Corporation, a
                leading Japanese OEM in semiconductor auto-molding and packaging
                equipment. This enabled us to concentrate on ultra-precision
                engineering in the stamping and connector industry.
              </p>
            </div>
            <Image
              src="/images/stock/about/history/4.jpg"
              height={1000}
              width={1000}
              alt="Deal image"
              className="h-full w-full object-cover min-h-[300px] md:w-[50%] rounded-md order-2 md:order-1"
            />
          </FadeOnScroll>
          <FadeOnScroll className="max-w-4xl flex flex-col md:flex-row items-center bg-white border border-neutral p-3 rounded-md">
            <div className="md:w-[50%] p-6">
              <ContentHeading className="mb-3">
                An even bigger facility (2025)
              </ContentHeading>
              <p>
                We commissioned a 50,000 square foot state-of-the-art facility
                to further elevate our capabilities and strengthen our position
                as a leader in ultra-precision manufacturing in Malaysia.
              </p>
            </div>
            <Image
              src="/images/stock/about/history/5.jpg"
              height={1000}
              width={1000}
              alt="Facility image"
              className="h-full w-full object-cover min-h-[300px] md:w-[50%] rounded-md"
            />
          </FadeOnScroll>
        </div>
      </div>

      <GeneralContact />
    </div>
  );
}
