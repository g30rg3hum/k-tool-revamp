"use client";

import ContentHeading from "@/components/layout/section/content/content-heading";
import Button from "@/components/ui/button";
import clsx from "clsx";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const projects = [
    {
        title: "Precision tooling for stamping applications",
        description: [
            "High-precision punches manufactured to strict tolerances for reliable, high-volume production.",
            "Engineered for durability and consistent performance in demanding industrial environments.",
        ],
        image: "stamping.png",
    },
    {
        title: "High-performance components for semiconductor manufacturing",
        description: [
            "Precision die sets designed for semiconductor fabrication applications.",
            "Manufactured to detailed specifications ensuring optimal performance, repeatability, and reliability in critical semiconductor manufacturing processes.",
        ],
        image: "semiconductor.png",
    },
    {
        title: "High-precision mold inserts for connector and housing production",
        description: [
            "Manufactured to tight tolerances ensuring consistent part quality and extended mold life in high-volume production runs.",
        ],
        image: "mold-inserts.png",
    },
    // {
    //   title: "Custom-designed jigs & fixtures built to your specifications",
    //   description: "[...]",
    //   image: "automotive.png",
    // },
];
export default function FeaturedProjectsStack() {
    const [currentProject, setCurrentProject] = useState(0);
    const [timerKey, setTimerKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentProject((prev) =>
                prev === projects.length - 1 ? 0 : prev + 1
            );
        }, 8000);

        return () => clearInterval(interval);
    }, [timerKey]); // Resets the useEffect when switching projects.

    return (
        <div className="flex flex-col md:flex-row gap-9">
            <div className="flex md:w-[60%] h-[20rem] relative">
                <AnimatePresence>
                    {projects.map((project, index) => {
                        // Only show projects up until the current project
                        if (index > currentProject) return null;

                        const rotation = index % 2 === 0 ? "" : "-";
                        const rotationAmount = 0.69 * index;

                        return (
                            <motion.div
                                key={`project-${index + 1}-image`}
                                className={clsx(
                                    `rounded-md absolute inset-0 md:inset-3 bg-center border border-neutral bg-no-repeat`,
                                    index === 0
                                        ? "bg-size-[400px] sm:bg-size-[550px] md:bg-size-[380px] lg:bg-size-[520px]"
                                        : "bg-cover"
                                )}
                                style={{
                                    backgroundImage: `url('/images/work/${project.image}')`,
                                }}
                                initial={{
                                    rotate: `${rotation}${rotationAmount}deg`,
                                    y: -9,
                                    scale: 0.95,
                                    opacity: 0,
                                }}
                                animate={{
                                    rotate: `${rotation}${rotationAmount}deg`,
                                    scale: 1,
                                    opacity: 1,
                                    y: 0,
                                }}
                                exit={{
                                    y: -9,
                                    opacity: 0,
                                    scale: 0.95,
                                    transition: {
                                        delay:
                                            (projects.length - 1 - index) * 0.1, // reverse order
                                    },
                                }}
                                transition={{
                                    duration: 0.2,
                                    ease: "easeInOut",
                                    delay: index * 0.1,
                                }}
                            />
                        );
                    })}
                </AnimatePresence>
            </div>
            <div className="w-full md:w-[40%]">
                <div className="flex flex-col justify-between h-full gap-6">
                    <div>
                        <ContentHeading className="mb-3">
                            {projects[currentProject].title}
                        </ContentHeading>
                        <div className="space-y-3">
                            {projects[currentProject].description.map(
                                (line, index) => (
                                    <p
                                        key={`${projects[currentProject]} - line ${index + 1}`}
                                    >
                                        {line}
                                    </p>
                                )
                            )}
                        </div>
                    </div>
                    <div className="flex gap-3">
                        {projects.map((_, index) => (
                            <Button
                                key={`project-${index + 1}-button`}
                                variant={
                                    index === currentProject
                                        ? "primary"
                                        : "neutral"
                                }
                                onClick={() => {
                                    setCurrentProject(index);
                                    setTimerKey((prev) => prev + 1);
                                }}
                                size="sm"
                                square
                            >
                                {index + 1}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
