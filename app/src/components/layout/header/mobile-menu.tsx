"use client";

import Button from "@/components/ui/button";
import { useState } from "react";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { mainPages } from "./header";
import { AnimatePresence, motion } from "motion/react";
import MobileLinkListItem from "./mobile-link-list-item";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Button variant="neutral" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <ListIcon size={20} />
      </Button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              type: "tween",
              duration: 0.6,
            }}
            className="fixed inset-0 bg-background z-50 flex flex-col px-9 overflow-y-auto"
          >
            <motion.div whileHover={{ rotate: 2 }} className="ml-auto my-12">
              <XIcon
                size={32}
                className="cursor-pointer flex-shrink-0"
                onClick={() => setIsMenuOpen(false)}
              />
            </motion.div>

            <nav className="mb-12">
              <ul className="flex flex-col gap-6 font-bold">
                {mainPages.map((page) => (
                  <MobileLinkListItem
                    key={`mobile:${page.href}`}
                    href={page.href}
                  >
                    {page.title}
                  </MobileLinkListItem>
                ))}
                <Button variant="primary" href="/get-quote">
                  Get instant quote
                </Button>
                <Button variant="outline" href="/contact">
                  Contact us
                </Button>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
