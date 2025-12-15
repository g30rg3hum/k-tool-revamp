import FadeOnScroll from "@/components/animations/fade-on-scroll";
import ContentHeading from "@/components/layout/section/content/content-heading";
import SectionHeading from "@/components/layout/section/section-heading";
import SectionLabel from "@/components/layout/section/section-label";
import AvailablePositionsButton from "@/components/pages/careers/available-positions-button";
import Job from "@/components/pages/careers/job";
import Construction from "@/components/pages/reusables/construction";
import GeneralContact from "@/components/pages/sections/general-contact";
import Hyperlink from "@/components/ui/hyperlink";
import { client } from "@/lib/clients/sanity";
import { CONTENT_LAYOUT, SPACE_BETWEEN_SECTIONS } from "@/lib/constants/styles";
import clsx from "clsx";
import {
    BookOpen,
    Briefcase,
    Info,
    Rose,
    SquareArrowOutUpRight,
} from "lucide-react";
import { Metadata } from "next";
import { SanityDocument } from "next-sanity";
import Image from "next/image";

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
            "Technology evolves, and so do we. We value curiousity and invest in growth.",
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

const JOBS_QUERY = `*[
  _type == "job"
]`;

const options = { next: { revalidate: 30 } };

// const hiring = [
//     {
//         title: "CNC Milling Machinist",
//         description:
//             "Set up, operate and maintain CNC mills to produce precision parts.",
//         url: "https://malaysia.indeed.com/job/cnc-milling-machinist-5f572ade44170321",
//     },
//     {
//         title: "Grinding Machinist",
//         description:
//             "Set up and operate surface grinding machines to produce precision components.",
//         url: "https://malaysia.indeed.com/job/grinding-machinist-f9bb9da9bfea23fe",
//     },
//     {
//         title: "Profile Grinder Machinist",
//         description:
//             "Set up and operate profile grinding machines to manufacture precision parts according to drawings and specifications.",
//         url: "https://malaysia.indeed.com/job/profile-grinder-machinist-a4736cdf92dbd92f",
//     },
// ];

export const metadata: Metadata = {
    title: "Careers | K-Tool Engineering | Precision Engineering in Malaysia",
    description:
        "Explore key career opportunities at K-Tool Engineering and join our team of skilled precision engineering professionals in our headquarters in Malaysia and across the globe.",
};
export default async function CareersPage() {
    const jobs = await client.fetch<SanityDocument[]>(JOBS_QUERY, {}, options);

    return (
        <div className={SPACE_BETWEEN_SECTIONS}>
            <div className={CONTENT_LAYOUT}>
                <div className="flex flex-col gap-9 md:flex-row">
                    <FadeOnScroll className="md:max-w-[35%]">
                        <SectionLabel className="mb-3" icon={Briefcase}>
                            Careers
                        </SectionLabel>
                        <SectionHeading className="mb-6">
                            <span className="text-primary">Join us</span> in our
                            mission to{" "}
                            <span className="text-primary">elevate</span>{" "}
                            tooling innovation.
                        </SectionHeading>
                        <p className="mb-3">
                            We are always looking for new ways to improve and
                            grow.
                        </p>
                        <p className="mb-6">
                            At the forefront of making everything possible is
                            our team of people. Thus, we are always on the
                            lookout for new talented, driven individuals to join
                            us on our journey.
                        </p>
                        <AvailablePositionsButton />
                    </FadeOnScroll>

                    <FadeOnScroll className="grid grid-cols-3 grid-rows-2 gap-3 h-96 grow-1">
                        {gridImages.map((image, index) => (
                            <div
                                className={clsx(
                                    image.pos,
                                    "rounded-md bg-cover bg-center "
                                )}
                                key={index}
                                style={{
                                    backgroundImage: `url('${image.src}')`,
                                }}
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
                        We look for candidates that closely align with these
                        values, to ensure that they thrive in our company
                        culture.
                    </p>
                </FadeOnScroll>
                <FadeOnScroll className="columns-[300px]">
                    {values.map((value) => (
                        <div
                            className="border border-neutral bg-white rounded-md p-6 mb-3"
                            key={value.title}
                        >
                            <ContentHeading className="mb-3">
                                {value.title}
                            </ContentHeading>
                            <p>{value.description}</p>
                        </div>
                    ))}
                </FadeOnScroll>
            </div>

            <FadeOnScroll className={CONTENT_LAYOUT} id="available-positions">
                <div className="mb-6">
                    <SectionLabel className="mb-3" icon={BookOpen}>
                        Available positions
                    </SectionLabel>
                    <SectionHeading>
                        We are currently{" "}
                        <span className="text-primary">hiring for...</span>
                    </SectionHeading>
                </div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-9 justify-between">
                    <div className="flex flex-col md:w-[70%]">
                        {jobs.length === 0 && (
                            <p>No positions are open at the moment.</p>
                        )}
                        {jobs.length !== 0 &&
                            jobs.map((position) => (
                                <div key={position.title} className="mb-6">
                                    <Job {...position} />
                                </div>
                            ))}

                        <p>
                            Email your application with your CV to{" "}
                            <span className="text-primary">
                                inquiry@ktoolengineering.com.
                            </span>
                        </p>
                    </div>
                    {jobs.length !== 0 && (
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
