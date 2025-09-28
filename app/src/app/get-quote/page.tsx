import FadeOnScroll from "@/components/animations/fade-on-scroll";
import ContentHeading from "@/components/layout/section/content/content-heading";
import SectionHeading from "@/components/layout/section/section-heading";
import GetQuoteForm from "@/components/pages/get-quote/get-quote-form";
import { CONTENT_LAYOUT, SPACE_BETWEEN_SECTIONS } from "@/lib/constants/styles";
import clsx from "clsx";
import { Eye, MessagesSquare, Package, Play, Quote, Send } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Quote | K-Tool Engineering",
  description:
    "Request a quote for your precision engineering project from K-Tool Engineering. Provide your project details and receive a competitive quotation within 24 hours.",
};

const steps = [
  {
    title: "Submit form",
    description: "Tell us your project requirements.",
    icon: Send,
  },
  {
    title: "Review",
    description: "Our team will review your specifications.",
    icon: Eye,
  },
  {
    title: "Receive quote within 24 hours",
    description: "Check your email for the quote.",
    icon: Quote,
  },
  {
    title: "Discussion",
    description: "Make any necessary adjustments.",
    icon: MessagesSquare,
  },
  {
    title: "Commence project",
    description: "When you're happy, we'll get started.",
    icon: Play,
  },
  {
    title: "Delivery",
    description: "Receive your completed project on time.",
    icon: Package,
  },
];
export default function GetQuotePage() {
  return (
    <div className={SPACE_BETWEEN_SECTIONS}>
      <div className={clsx(CONTENT_LAYOUT, "flex flex-col gap-9 md:flex-row")}>
        <FadeOnScroll className="md:max-w-[400px]">
          <SectionHeading className="mb-3">
            Already have an <span className="text-primary">idea</span> for a{" "}
            <span className="text-primary">project?</span>
          </SectionHeading>
          <p className="mb-6">
            Let us know the specifics and we&apos;ll get back to you with a
            complete quotation, timeline, and our industry-competitive pricing.
          </p>
          <div className="flex flex-col gap-6">
            {steps.map((step) => (
              <div key={step.title}>
                <ContentHeading>
                  <step.icon className="inline-block mr-3 text-primary" />
                  {step.title}
                </ContentHeading>
                <p className="text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </FadeOnScroll>
        <FadeOnScroll className="bg-white p-6 rounded-md border border-neutral w-full">
          <GetQuoteForm />
        </FadeOnScroll>
      </div>
      <div />
    </div>
  );
}
