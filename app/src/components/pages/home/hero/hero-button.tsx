"use client";

import Button from "@/components/ui/button";
import { MoveDown } from "lucide-react";
import { motion } from "motion/react";

export default function HeroButton() {
  const scrollToSection = () => {
    const element = document.getElementById("what-we-do");
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      console.log(elementPosition);
      console.log(window.pageYOffset);
      const offsetPosition = elementPosition + window.pageYOffset - 170;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Button variant="primary" onClick={scrollToSection}>
      See what&apos;s possible{" "}
      <motion.div
        className="inline-block ml-3"
        variants={{ initial: { y: 0 }, whileHover: { y: 2 } }}
      >
        <MoveDown size={20} />
      </motion.div>
    </Button>
  );
}
