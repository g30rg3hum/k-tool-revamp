"use client";

import { TextBlock } from "@/app/blog/[slug]/page";
import ContentHeading from "@/components/layout/section/content/content-heading";
import Modal from "@/components/ui/modal";
import { Info } from "lucide-react";
import { PortableText, SanityDocument } from "next-sanity";
import { useState } from "react";

export default function Job({
    title,
    description,
    jobType,
    location,
    salary,
    body,
    additionalLink,
}: SanityDocument) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div>
                <ContentHeading
                    className="cursor-pointer hover:underline w-max"
                    onClick={() => setIsOpen(true)}
                >
                    {title}{" "}
                    <Info
                        className="inline-block ml-1 text-primary"
                        size={20}
                    />
                </ContentHeading>
                <p>{description}</p>
            </div>

            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title={title}
                description={
                    salary
                        ? `${location} • ${jobType} • MYR ${salary}`
                        : `${location} • ${jobType}`
                }
                size="lg"
                link={additionalLink}
            >
                {body.map((part: TextBlock) => {
                    const text = part.children![0].text!;
                    if (text == "")
                        return <div className="p-2" key={part._key} />;
                    const bullet = part.listItem === "bullet";

                    if (bullet) {
                        return (
                            <li key={part._key} className="list-outside ml-4">
                                {text}
                            </li>
                        );
                    }

                    return (
                        <div className="prose" key={part._key}>
                            <PortableText value={part} />
                        </div>
                    );
                })}
            </Modal>
        </>
    );
}
