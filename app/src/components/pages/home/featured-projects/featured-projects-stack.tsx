"use client";

import ContentHeading from "@/components/layout/section/content/content-heading";
import Button from "@/components/ui/button";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Precision tooling for stamping applications",
    description: "[...]",
    image: "1.jpg",
  },
  {
    title: "High-performance components for semiconductor manufacturing",
    description: "[...]",
    image: "2.jpg",
  },
  {
    title: "High-precision mold inserts for connector and housing production",
    description: "[...]",
    image: "3.jpg",
  },
  {
    title: "Custom tooling solutions for automotive parts manufacturing",
    description: "[...]",
    image: "4.jpg",
  },
];
export default function FeaturedProjectsStack() {
  const [currentProject, setCurrentProject] = useState(0);

  // run the animation every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) =>
        prev === projects.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
                className="rounded-md absolute inset-0 md:inset-3 bg-center bg-cover shadow-sm"
                style={{
                  backgroundImage: `url('/images/stock/home/featured-projects/${project.image}')`,
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
                    delay: (projects.length - 1 - index) * 0.1, // reverse order
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
            <p>{projects[currentProject].description}</p>
          </div>
          <div className="flex gap-3">
            {projects.map((_, index) => (
              <Button
                key={`project-${index + 1}-button`}
                variant={index === currentProject ? "primary" : "neutral"}
                onClick={() => setCurrentProject(index)}
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
