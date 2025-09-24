"use client";

import { useState } from "react";
import { Country } from "./global-outreach-map";
import { AnimatePresence, motion } from "motion/react";

interface CountryDotProps {
  country: Country;
}
export default function CountryDot({ country }: CountryDotProps) {
  // only want to display it if it is clicked and over it.
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      style={{
        position: "absolute",
        left: `${country.x}%`,
        top: `${country.y}%`,
      }}
    >
      <motion.div
        className="h-3 w-3 rounded-full bg-sky-600 cursor-pointer hidden md:block"
        whileHover={{ scale: 1.45 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsClicked(false);
        }}
        onClick={() => setIsClicked(true)}
      />

      <AnimatePresence>
        {isClicked && isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: -52 }}
            exit={{ opacity: 0, y: -40 }}
            className="bg-white border border-neutral px-3 py-1 rounded-md text-sm font-bold"
          >
            {country.name}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
