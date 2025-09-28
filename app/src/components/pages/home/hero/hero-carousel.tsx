"use client";

import Button from "@/components/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const images = ["2.jpeg", "1.jpeg", "3.jpg"];

type Direction = "left" | "right";
export default function HeroCarousel() {
  const [currentImage, setCurrentImage] = useState(1);
  const [direction, setDirection] = useState<Direction>("right");
  const [timerKey, setTimerKey] = useState(0);
  const maxImages = 3;

  const buttonVariants = {
    initial: { opacity: 0.3 },
    whileHover: { opacity: 0.6 },
  };

  const slideAmount = 69;
  const slideVariants = {
    initial: (direction: Direction) => ({
      x: direction === "right" ? -slideAmount : slideAmount,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: Direction) => ({
      x: direction === "right" ? slideAmount : -slideAmount,
      opacity: 0,
    }),
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("right");
      setCurrentImage((prev) => (prev === maxImages ? 1 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [maxImages, timerKey]);

  return (
    <motion.div
      whileHover="whileHover"
      initial="initial"
      className="relative flex-1 w-full rounded-md min-h-[400px]"
    >
      <AnimatePresence mode="popLayout" custom={direction}>
        <motion.div
          key={currentImage}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          custom={direction}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-cover bg-center rounded-md"
          style={{
            backgroundImage: `url('/images/stock/home/hero/${images[currentImage - 1]}')`,
          }}
        />
      </AnimatePresence>
      <motion.div
        variants={buttonVariants}
        className="w-max absolute left-6 top-[45%] rounded-md"
      >
        <Button
          onClick={() => {
            setDirection("left");
            setCurrentImage((prev) => (prev === 1 ? maxImages : prev - 1));
            setTimerKey((prev) => prev + 1);
          }}
          variant="neutral"
        >
          <motion.div variants={{ initial: { x: 0 }, whileHover: { x: -2 } }}>
            <MoveLeft size={20} />
          </motion.div>
        </Button>
      </motion.div>
      <motion.div
        variants={buttonVariants}
        className="w-max absolute right-6 top-[45%] rounded-md"
      >
        <Button
          onClick={() => {
            setDirection("right");
            setCurrentImage((prev) => (prev === maxImages ? 1 : prev + 1));
            setTimerKey((prev) => prev + 1);
          }}
          variant="neutral"
        >
          <motion.div variants={{ initial: { x: 0 }, whileHover: { x: 2 } }}>
            <MoveRight size={20} />
          </motion.div>
        </Button>
      </motion.div>
    </motion.div>
  );
}
