import FadeOnScroll from "@/components/animations/fade-on-scroll";
import ContentHeading from "@/components/layout/section/content/content-heading";
import SectionHeading from "@/components/layout/section/section-heading";
import SectionLabel from "@/components/layout/section/section-label";
import GeneralContact from "@/components/pages/sections/general-contact";
import { CONTENT_LAYOUT, SPACE_BETWEEN_SECTIONS } from "@/lib/constants/styles";
import { Search } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Quality Assurance | K-Tool Engineering | Precision Engineering in Malaysia",
    description:
        "Discover K-Tool Engineering's rigorous quality assurance processes that ensure precision, accuracy, and reliability at every stage of manufacturing. Our ISO 9001:2015 certified system guarantees top-quality results for your engineering needs. We are based in Malaysia and serve clients worldwide.",
};

const content = [
    {
        title: "In-process quality control",
        paragraphs: [
            <>
                Each machinist is responsible for inspecting their own work
                before it moves to the next stage. This promotes accountability
                and ensures that issues are caught at the source.
            </>,
            <>
                Parts are not permitted to advance unless they meet the required
                stage specifications. Critical dimensions are measured using
                specialised equipment. These are then documented and must be
                approved to maintain consistent quality.
            </>,
        ],
        image: "/images/stock/quality-assurance/1.jpg",
    },
    {
        title: "Full traceability and documentation",
        paragraphs: [
            <>
                Every step of the production process is tracked and recorded,
                including who inspected each part and when. This provides
                complete traceability, maintains process transparency, and
                enables root-cause analysis if required.
            </>,
            <>
                Final reports are available for every completed part or job,
                offering customers full visibility and confidence in the quality
                of their order.
            </>,
        ],
        image: "/images/stock/quality-assurance/2.jpg",
    },
    {
        title: "Final inspection",
        paragraphs: [
            <>
                After passing through all manufacturing stages, every part goes
                through a dedicated final quality check at our quality control
                department. This inspection acts as a final safeguard against
                any inconsistencies or defects that may have escaped earlier
                detection.
            </>,
            <>
                Final inspection reports are generated for each job, verifying
                that every component meets customer specifications before
                delivery.
            </>,
        ],
        image: "/images/stock/quality-assurance/3.jpg",
    },
    {
        title: "Backed by advanced equipment",
        paragraphs: [
            <>
                Our quality assurance processes are supported by
                state-of-the-art measuring and inspection equipment.
            </>,
            <>
                Navigate to{" "}
                <a href="/equipment" className="text-primary">
                    our equipment page
                </a>{" "}
                to learn more.
            </>,
        ],
        image: "/images/stock/quality-assurance/4.jpg",
    },
];

export default function QualityAssurancePage() {
    return (
        <div className={SPACE_BETWEEN_SECTIONS}>
            {/* Main section */}
            <div className={CONTENT_LAYOUT}>
                <div className="flex flex-col md:flex-row gap-9 lg:gap-12">
                    <FadeOnScroll className="flex-shrink-0 h-max md:sticky md:top-46 md:max-w-xs lg:max-w-lg">
                        <SectionLabel icon={Search} className="mb-3">
                            Quality assurance
                        </SectionLabel>
                        <SectionHeading className="mb-6">
                            We ensure{" "}
                            <span className="text-primary">accuracy</span> at{" "}
                            <span className="text-primary">every step.</span>
                        </SectionHeading>
                        <p className="mb-3">
                            We have a strict quality assurance system backing
                            every stage of the manufacturing process — from raw
                            material selection to final inspection.
                        </p>
                        <p>
                            Our ISO 9001:2015 certified framework ensures
                            consistent, high-quality results with full
                            traceability and accountability.
                        </p>
                    </FadeOnScroll>

                    <div className="space-y-12">
                        {content.map((section, index) => (
                            <FadeOnScroll key={section.title}>
                                <ContentHeading className="mb-6">
                                    <span className="w-8 h-8 bg-primary rounded-full text-background mr-3 inline-flex items-center justify-center text-sm font-bold">
                                        {index + 1}
                                    </span>{" "}
                                    {section.title}
                                </ContentHeading>
                                <div className="space-y-3 mb-6">
                                    {section.paragraphs.map(
                                        (paragraph, index) => (
                                            <p key={index}>{paragraph}</p>
                                        )
                                    )}
                                </div>
                                <Image
                                    src={section.image}
                                    alt="image"
                                    width={1000}
                                    height={1000}
                                    className="rounded-md"
                                />
                            </FadeOnScroll>
                        ))}
                    </div>
                </div>
            </div>

            <GeneralContact />
        </div>
    );
}
