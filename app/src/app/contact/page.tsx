import FadeOnScroll from "@/components/animations/fade-on-scroll";
import ContentHeading from "@/components/layout/section/content/content-heading";
import SectionHeading from "@/components/layout/section/section-heading";
import GeneralContactForm from "@/components/pages/contact/general-contact-form";
import { CONTENT_LAYOUT, SPACE_BETWEEN_SECTIONS } from "@/lib/constants/styles";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className={SPACE_BETWEEN_SECTIONS}>
      <div className={CONTENT_LAYOUT}>
        <FadeOnScroll className="text-center mb-9">
          <SectionHeading className="mb-3">
            <span className="text-primary">Contact</span> our team
          </SectionHeading>
          <p>
            Got any general questions about our services or us as a company?
            We&apos;re here to help!
          </p>
          <p>Fill in the form below or reach us directly via other mediums.</p>
        </FadeOnScroll>
        <div className="flex flex-col lg:flex-row justify-center gap-12 mx-auto">
          <FadeOnScroll>
            <GeneralContactForm />
          </FadeOnScroll>

          <FadeOnScroll className="space-y-6">
            <div>
              <ContentHeading className="mb-3">Chat with us</ContentHeading>
              <p className="text-muted mb-3">
                Send an email directly at your own convenience.
              </p>
              <p>
                <Mail className="inline-block mr-2" size={20} />{" "}
                <span className="underline">contact@ktool.com</span>
              </p>
            </div>
            <div>
              <ContentHeading className="mb-3">Call us</ContentHeading>
              <p className="text-muted mb-3">
                Call our team Mon-Fri, 9am - 5pm UTC+8.
              </p>
              <p>
                <Phone className="inline-block mr-2" size={20} />{" "}
                <span className="underline">+604 645 1518</span>
              </p>
            </div>
            <div>
              <ContentHeading className="mb-3">Visit us</ContentHeading>
              <p className="text-muted mb-3">Chat to us in person at our HQ.</p>
              <div className="flex">
                <MapPin className="inline-block mr-2" size={20} />
                <div className="underline">
                  <p>Plot 159, Jalan Sungai Kluang</p>
                  <p>Bayan Lepas Phase 1 FTZ</p>
                  <p>11900 Bayan Lepas</p>
                  <p>Penang, Malaysia</p>
                </div>
              </div>
            </div>
          </FadeOnScroll>
        </div>
      </div>
      <div />
    </div>
  );
}
