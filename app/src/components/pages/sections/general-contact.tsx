import FadeOnScroll from "@/components/animations/fade-on-scroll";
import SectionHeading from "@/components/layout/section/section-heading";
import SectionLabel from "@/components/layout/section/section-label";
import Hyperlink from "@/components/ui/hyperlink";
import { CONTENT_LAYOUT, VERTICAL_PADDING } from "@/lib/constants/styles";
import clsx from "clsx";
import { Phone } from "lucide-react";
import GeneralContactForm from "../contact/general-contact-form";

export default function GeneralContact() {
  return (
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
              If you have general inquiries about us and what we do, please fill
              in the form on the right and we&apos;ll get in touch with you as
              soon as we can.
            </p>
            <p>
              However, if you already have a project or specific requirements in
              mind, please let us know <Hyperlink href="">here</Hyperlink>.
            </p>
          </FadeOnScroll>
          <FadeOnScroll className="w-full grow md:max-w-lg">
            <GeneralContactForm />
          </FadeOnScroll>
        </div>
      </div>
    </div>
  );
}
