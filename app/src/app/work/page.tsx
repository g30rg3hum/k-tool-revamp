import FadeOnScroll from "@/components/animations/fade-on-scroll";
import SectionHeading from "@/components/layout/section/section-heading";
import SectionLabel from "@/components/layout/section/section-label";
import GeneralContact from "@/components/pages/sections/general-contact";
import ExpertiseCarousel from "@/components/pages/work/expertise-carousel";
import Process from "@/components/pages/work/process";
import SpecificExamples from "@/components/pages/work/specific-examples";
import Hyperlink from "@/components/ui/hyperlink";
import { CONTENT_LAYOUT, SPACE_BETWEEN_SECTIONS } from "@/lib/constants/styles";
import { Eye, LineSquiggle } from "lucide-react";

// TODO: add metadata
export default function WorkPage() {
  return (
    <div className={SPACE_BETWEEN_SECTIONS}>
      {/* Overview */}
      <div className={CONTENT_LAYOUT}>
        <FadeOnScroll className="mb-6">
          <SectionLabel className="mb-3" icon={Eye}>
            Overview
          </SectionLabel>
          <SectionHeading className="mb-6">
            Ready for <span className="text-primary">any challenge.</span>
          </SectionHeading>
          <p>
            With state-of-the-art{" "}
            <Hyperlink href="/equipment">equipment</Hyperlink>, we are able to
            offer a wide range of expertise to tackle any complex project with
            the utmost precision and efficiency.
          </p>
        </FadeOnScroll>
        <FadeOnScroll>
          <ExpertiseCarousel />
        </FadeOnScroll>
      </div>

      <div className={CONTENT_LAYOUT}>
        <FadeOnScroll className="mb-6">
          <SectionLabel className="mb-3" icon={LineSquiggle}>
            Process
          </SectionLabel>
          <SectionHeading>
            We&apos;ve got you <span className="text-primary">covered</span>,
            from <span className="text-primary">beginning to end.</span>
          </SectionHeading>
        </FadeOnScroll>
        <Process />
      </div>

      <SpecificExamples />

      <GeneralContact />
    </div>
  );
}
