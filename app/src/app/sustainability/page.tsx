import FadeOnScroll from "@/components/animations/fade-on-scroll";
import ContentHeading from "@/components/layout/section/content/content-heading";
import SectionHeading from "@/components/layout/section/section-heading";
import SectionLabel from "@/components/layout/section/section-label";
import GeneralContact from "@/components/pages/sections/general-contact";
import { CONTENT_LAYOUT, SPACE_BETWEEN_SECTIONS } from "@/lib/constants/styles";
import {
  Leaf,
  Recycle,
  Shield,
  Droplets,
  Zap,
  FileText,
  Globe,
  Factory,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sustainability | K-TOOL Engineering | Precision Engineering in Malaysia",
  description:
    "Learn about K-TOOL Engineering's commitment to sustainable manufacturing, responsible mineral sourcing, waste reduction, and environmentally conscious precision engineering practices. Based in Malaysia, serving clients worldwide.",
};

const commitments = [
  {
    icon: Recycle,
    title: "Waste reduction and recycling",
    description:
      "We actively minimise material waste throughout our manufacturing processes. Metal shavings, off-cuts, and other by-products from our precision machining operations are systematically collected, sorted, and sent for recycling. Our goal is to maximise material utilisation and reduce landfill contributions.",
  },
  {
    icon: Zap,
    title: "Energy efficiency",
    description:
      "Our state-of-the-art 50,000 sq ft facility has been designed with energy efficiency in mind. We invest in modern, energy-efficient solar power and optimise production schedules to reduce idle machine time. LED lighting, efficient climate control systems, and smart power management help us minimise our energy footprint.",
  },
  {
    icon: Droplets,
    title: "Coolant and fluid management",
    description:
      "Precision machining requires the use of cutting fluids and coolants. We employ closed-loop coolant systems to extend fluid life, reduce consumption, and prevent contamination. All spent fluids are disposed of through licensed waste management partners in full compliance with Malaysian environmental regulations.",
  },
  {
    icon: Factory,
    title: "Clean manufacturing environment",
    description:
      "We maintain stringent housekeeping and environmental standards across our facility. Air filtration, proper ventilation, and dust extraction systems ensure a clean working environment that protects both our workforce and the surrounding community.",
  },
];

const mineralsPolicyHighlights = [
  "We do not knowingly procure materials sourced from conflict-affected or high-risk areas.",
  "We expect all suppliers to exercise due diligence on the origin of raw materials in their supply chains.",
  "We are committed to transparency and will work collaboratively with stakeholders to address any identified risks.",
  "Our policy aligns with the OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas.",
];

export default function SustainabilityPage() {
  return (
    <div className={SPACE_BETWEEN_SECTIONS}>
      {/* Hero / Overview */}
      <FadeOnScroll className={CONTENT_LAYOUT}>
        <div className="flex flex-col md:flex-row gap-9 justify-between">
          <div className="md:w-[60%]">
            <SectionLabel icon={Leaf} className="mb-3">
              Sustainability
            </SectionLabel>
            <SectionHeading className="mb-6">
              Precision engineering with{" "}
              <span className="text-primary">responsibility</span> at its{" "}
              <span className="text-primary">core.</span>
            </SectionHeading>
            <div className="space-y-3">
              <p>
                At K-TOOL Engineering, we believe that manufacturing excellence
                and environmental stewardship go hand in hand. As a precision
                engineering firm with over 30 years of experience, we recognise
                our responsibility to operate sustainably and minimise our
                impact on the environment.
              </p>
              <p>
                From responsible material sourcing to energy-efficient
                operations, sustainability is embedded in how we work — not just
                what we produce.
              </p>
            </div>
          </div>
          <div className="md:w-[35%] flex items-center justify-center">
            <div className="w-full max-w-[16rem] aspect-square rounded-full bg-primary/10 flex items-center justify-center">
              <Leaf size={96} className="text-primary" strokeWidth={1} />
            </div>
          </div>
        </div>
      </FadeOnScroll>

      {/* Our Commitments */}
      <div className={CONTENT_LAYOUT}>
        <FadeOnScroll>
          <SectionLabel icon={Globe} className="mb-3">
            Our commitments
          </SectionLabel>
          <SectionHeading className="mb-9">
            How we <span className="text-primary">reduce</span> our{" "}
            <span className="text-primary">environmental impact.</span>
          </SectionHeading>
        </FadeOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {commitments.map((commitment) => {
            const Icon = commitment.icon;
            return (
              <FadeOnScroll
                key={commitment.title}
                className="bg-white p-6 rounded-md border border-neutral"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <ContentHeading>{commitment.title}</ContentHeading>
                </div>
                <p>{commitment.description}</p>
              </FadeOnScroll>
            );
          })}
        </div>
      </div>

      {/* Responsible Minerals Policy */}
      <div className={CONTENT_LAYOUT}>
        <div className="flex flex-col md:flex-row gap-9 lg:gap-12">
          <FadeOnScroll className="md:w-[50%]">
            <SectionLabel icon={Shield} className="mb-3">
              Responsible sourcing
            </SectionLabel>
            <SectionHeading className="mb-6">
              Our commitment to{" "}
              <span className="text-primary">conflict-free</span> mineral{" "}
              <span className="text-primary">sourcing.</span>
            </SectionHeading>
            <div className="space-y-3">
              <p>
                As a precision engineering firm, our work depends on the
                responsible procurement of metals and raw materials. We are
                firmly committed to ensuring that the materials entering our
                supply chain are sourced ethically and do not contribute to
                conflict or human rights abuses.
              </p>
              <p>
                Our Responsible Minerals Policy outlines the principles and
                expectations we uphold across our operations and supply chain.
              </p>
            </div>
          </FadeOnScroll>

          <FadeOnScroll className="md:w-[50%]">
            <div className="bg-white p-6 rounded-md border border-neutral h-full">
              <ContentHeading className="mb-6">
                Policy highlights
              </ContentHeading>
              <ul className="space-y-3">
                {mineralsPolicyHighlights.map((highlight, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="w-6 h-6 bg-primary rounded-full text-background flex-shrink-0 inline-flex items-center justify-center text-xs font-bold mt-0.5">
                      {index + 1}
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-neutral">
                <a
                  href="/docs/responsible_minerals_policy.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                >
                  <FileText size={18} />
                  View full Responsible Minerals Policy (PDF)
                </a>
              </div>
            </div>
          </FadeOnScroll>
        </div>
      </div>

      {/* Continuous Improvement */}
      <FadeOnScroll className={CONTENT_LAYOUT}>
        <div className="bg-white p-6 md:p-9 rounded-md border border-neutral text-center max-w-3xl mx-auto">
          <ContentHeading className="mb-3">
            Our journey continues
          </ContentHeading>
          <p>
            Sustainability is an ongoing commitment, not a destination. As we
            continue to grow and invest in new technologies and facilities, we
            are dedicated to finding new ways to reduce our environmental
            footprint while maintaining the precision and quality our clients
            depend on. We welcome dialogue with our clients and partners on how
            we can improve together.
          </p>
        </div>
      </FadeOnScroll>

      <GeneralContact />
    </div>
  );
}
