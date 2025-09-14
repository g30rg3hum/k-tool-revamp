import { animationDuration, movementAmount } from "@/lib/constants/animations";
import * as motion from "motion/react-client";

interface Props {
  children: React.ReactNode;
  direction?: "up" | "down";
  margin?: boolean;
  className?: string;
}
export default function FadeOnScroll({
  children,
  direction = "up",
  margin = false,
  className,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: direction === "up" ? movementAmount : -movementAmount,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: margin ? "-10%" : undefined }}
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
