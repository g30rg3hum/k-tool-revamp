"use client";

import FadeOnScroll from "@/components/animations/fade-on-scroll";
import ContentHeading from "@/components/layout/section/content/content-heading";
import { useState } from "react";
import { motion } from "motion/react";

const process = [
  {
    title: "Design & engineering",
    description:
      "We collaborate with you to understand your requirements, then proceed to precise CAD modeling and engineering analysis to optimise manufacturability.",
  },
  {
    title: "Prototyping",
    description:
      "Rapid prototyping and testing to validate design concepts before full production, ensuring optimal results.",
  },
  {
    title: "Manufacturing",
    description:
      "Precision manufacturing using the very best equipment and proven processes for consistent and high-quality results.",
  },
  {
    title: "Quality assurance",
    description:
      "Rigorous quality control at every stage to ensure all parts meet exact specifications and standards.",
  },
  {
    title: "Delivery",
    description:
      "Timely and reliable delivery, with comprehensive documentation and support to ensure complete satisfaction.",
  },
];

export default function Process() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <FadeOnScroll className="flex flex-col gap-6">
      <div className="flex gap-9 flex-wrap">
        {process.map((step, index) => (
          <motion.div
            whileHover={{ y: -2 }}
            key={step.title}
            className="cursor-pointer"
            onClick={() => setCurrentStep(index)}
          >
            <ContentHeading>
              <span className="w-8 h-8 bg-primary  rounded-full text-background mr-3 inline-flex items-center justify-center text-sm font-bold">
                {index + 1}
              </span>
              <span className={currentStep === index ? "text-primary" : ""}>
                {step.title}
              </span>
            </ContentHeading>
          </motion.div>
        ))}
      </div>

      <p>{process[currentStep].description}</p>
    </FadeOnScroll>
  );
}
