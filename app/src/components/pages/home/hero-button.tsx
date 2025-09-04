"use client";

import Button from "@/components/ui/button";
import { MoveDown } from "lucide-react";
import { motion } from "motion/react";

export default function HeroButton() {
  return (
    <Button variant="primary" onClick={() => {}}>
      See what&apos;s possible{" "}
      <motion.div
        className="inline-block ml-1"
        variants={{ initial: { y: 0 }, whileHover: { y: 2 } }}
      >
        <MoveDown size={16} />
      </motion.div>
    </Button>
  );
}
