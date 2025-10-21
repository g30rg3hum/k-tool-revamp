import FadeOnScroll from "@/components/animations/fade-on-scroll";
import ContentHeading from "@/components/layout/section/content/content-heading";
import SectionHeading from "@/components/layout/section/section-heading";
import SectionLabel from "@/components/layout/section/section-label";
import GeneralContact from "@/components/pages/sections/general-contact";
import { CONTENT_LAYOUT, SPACE_BETWEEN_SECTIONS } from "@/lib/constants/styles";
import { Anvil, Axe, Microscope } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Equipment | K-Tool Engineering | Precision Engineering Malaysia",
  description:
    "Discover the advanced machinery and precision tools at K-Tool Engineering that ensure top-quality results for your precise engineering needs. Our factories are in Malaysia and we serve clients worldwide.",
};

const mainEquipment = [
  {
    heading: (
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        <ContentHeading className="shrink-0">Profile grinder</ContentHeading>
        <div className="flex gap-3">
          <span className="bg-primary text-background font-bold px-3 py-1 rounded-md text-sm">
            [WAIDA] SPG-X
          </span>
          <span className="bg-neutral font-bold px-3 py-1 rounded-md text-sm">
            8 units
          </span>
        </div>
      </div>
    ),
    description:
      "Delivers extreme precision (1 μm accuracy) in shaping complex contours and ultra-fine profiles that are beyond the capabilities of most conventional grinders.",
    image: "/images/equipment/profile-grinder.png",
    imageAlt: "Profile grinder",
  },
  {
    heading: (
      <ContentHeading className="mb-3">CNC machining center</ContentHeading>
    ),
    description:
      "Produces complex components with high accuracy and repeatability. They can handle intricate geometries, tight tolerances, and various materials, completing jobs to exact specifications.",
    image: "/images/equipment/cnc-machining-center.png",
    imageAlt: "CNC machining center",
  },
  {
    heading: <ContentHeading className="mb-3">Wire EDM</ContentHeading>,
    description:
      "Cuts extremely precise profiles with fine surface finishing. They can achieve fine tolerances on hard materials and complex geometries that conventional methods struggle with.",
    image: "/images/equipment/wire-edm.png",
    imageAlt: "Wire EDM",
  },
  {
    heading: <ContentHeading className="mb-3">Sinker EDM</ContentHeading>,
    description:
      "High-productivity machines that deliver precise, detailed cavity machining in hardened materials— ideal for producing complex dies and components with exceptional accuracy and surface finish.",
    image: "/images/equipment/sinker-edm.png",
    imageAlt: "Sinker EDM",
  },
];

const qualityAssuranceEquipment = [
  {
    heading: (
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        <ContentHeading>Coordinate measuring machine</ContentHeading>
        <span className="bg-primary text-background font-bold px-3 py-1 rounded-md text-sm">
          [WENZEL] XO87-1000
        </span>
      </div>
    ),
    description:
      "Delivers volumetric measurement uncertainty of just 1.6 + L/350 microns (μm), backed by air-bearing guides, a granite structure, and flexible sensor options for complex components — ensuring precise quality control and verification of tight tolerances across a wide range of part sizes.",
    image: "/images/equipment/coordinate-measuring-machine.png",
    imageAlt: "Coordinate Measuring Machine",
  },
  {
    heading: (
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        <ContentHeading>Multisensor measurement system</ContentHeading>
        <span className="bg-primary text-background font-bold px-3 py-1 rounded-md text-sm">
          [KEYENCE] LM-X100TL
        </span>
      </div>
    ),
    description:
      "Offers accuracy up to ±0.7 microns (μm) and repeatability down to ±0.1 microns (μm), ensuring reliable precision tooling and quality assurance for every component we produce.",
    image: "/images/equipment/multisensor-measurement-system.png",
    imageAlt: "Multisensor Measurement System",
  },
];

export default function EquipmentPage() {
  return (
    <div className={SPACE_BETWEEN_SECTIONS}>
      {/* Main equipment */}
      <div className={CONTENT_LAYOUT}>
        <div className="flex flex-col gap-9">
          <FadeOnScroll>
            <SectionLabel icon={Anvil} className="mb-3">
              Equipment
            </SectionLabel>
            <SectionHeading className="mb-6">
              Guaranteeing <span className="text-primary">precision</span> with
              the <span className="text-primary">best technologies.</span>
            </SectionHeading>
            <p>
              At K-Tool Engineering, we pride ourselves on using the best
              technologies available to ensure we deliver the best results to
              our clients.
            </p>
          </FadeOnScroll>
          <div className="grid gap-6 lg:grid-cols-2">
            {mainEquipment.map((item, index) => (
              <FadeOnScroll
                key={index}
                className="rounded bg-white border-neutral border p-6 flex flex-col items-center gap-9 sm:flex-row"
              >
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={1000}
                  height={1000}
                  className="w-full max-w-[200px] sm:w-[120px]"
                />
                <div>
                  {/* Custom heading */}
                  {item.heading}

                  <p>{item.description}</p>
                </div>
              </FadeOnScroll>
            ))}
          </div>
        </div>
      </div>

      <div className={CONTENT_LAYOUT}>
        <FadeOnScroll className="mb-9">
          <SectionLabel className="mb-3" icon={Microscope}>
            Quality assurance
          </SectionLabel>
          <SectionHeading className="mb-6">
            <span className="text-primary">Maintaining</span> the{" "}
            <span className="text-primary">highest standards.</span>
          </SectionHeading>
          <p>
            On top of the main equipment above, we also have specific machinery
            that help us to deliver outputs that are of the highest quality in
            the industry.
          </p>
        </FadeOnScroll>
        <div className="grid gap-6 lg:grid-cols-2">
          {qualityAssuranceEquipment.map((item, index) => (
            <FadeOnScroll
              key={index}
              className="rounded bg-white border-neutral border p-6 flex flex-col items-center gap-9 sm:flex-row"
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                width={1000}
                height={1000}
                className="w-full max-w-[200px] sm:w-[120px]"
              />
              <div>
                {/* Custom heading */}
                {item.heading}

                <p>{item.description}</p>
              </div>
            </FadeOnScroll>
          ))}
        </div>
      </div>

      <div className={CONTENT_LAYOUT}>
        <FadeOnScroll>
          <SectionLabel icon={Axe} className="mb-3">
            Other equipment
          </SectionLabel>
          <SectionHeading className="mb-6">
            <span className="text-primary">Support</span> from{" "}
            <span className="text-primary">other tools.</span>
          </SectionHeading>
        </FadeOnScroll>
        <FadeOnScroll>
          <p className="mb-3">
            We also have a full range of supporting equipment, including{" "}
            <span className="font-bold">
              grinding and milling machines, laser engraving, abrasive blasting
              machines,
            </span>{" "}
            and other precision tools.
          </p>
          <p>
            These together ensure smooth production and maintain the highest
            quality standards for the work produced on the machines mentioned
            above.
          </p>
        </FadeOnScroll>
      </div>

      <GeneralContact />
    </div>
  );
}
