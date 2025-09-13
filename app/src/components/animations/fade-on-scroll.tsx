import { animationDuration, movementAmount } from "@/lib/constants/animations";
import * as motion from "motion/react-client";

interface Props {
  children: React.ReactNode;
  direction?: "up" | "down";
  className?: string;
}
export default function FadeOnScroll({
  children,
  direction = "up",
  className,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: direction === "up" ? movementAmount : -movementAmount,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: animationDuration,
        ease: "easeOut",
      }}
      style={{
        willChange: "transform, opacity",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
