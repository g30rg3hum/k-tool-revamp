import SectionHeading from "@/components/layout/section/section-heading";
import SectionLabel from "@/components/layout/section/section-label";
import { CONTENT_LAYOUT, SPACE_BETWEEN_SECTIONS } from "@/lib/constants/styles";
import { Briefcase } from "lucide-react";

export default function CareersPage() {
  return (
    <div className={SPACE_BETWEEN_SECTIONS}>
      <div className={CONTENT_LAYOUT}>
        <SectionLabel className="mb-3" icon={Briefcase}>
          Careers
        </SectionLabel>
        <SectionHeading className="max-w-[690px] border">
          <span className="text-primary">Join us</span> in our mission to{" "}
          <span className="text-primary">empower organisations</span> through{" "}
          <span className="text-primary">tooling innovation.</span>
        </SectionHeading>

        <div className="columns "></div>
      </div>
    </div>
  );
}
