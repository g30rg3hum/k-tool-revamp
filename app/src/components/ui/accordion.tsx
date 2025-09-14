"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import ContentHeading from "../layout/section/content/content-heading";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export default function Accordion({ items, className }: AccordionProps) {
  const [currentOpenIndex, setCurrentOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    if (currentOpenIndex === index) setCurrentOpenIndex(null);
    else setCurrentOpenIndex(index);
  };

  return (
    <div className={className}>
      {items.map((item, index) => {
        const isOpen = currentOpenIndex === index;

        return (
          <div key={index}>
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between p-3 text-left border-b cursor-pointer"
            >
              <ContentHeading>{item.title}</ContentHeading>
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                <ChevronDown size={20} />
              </motion.div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  <p className="p-3">{item.content}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
