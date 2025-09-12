"use client";

import Button from "@/components/ui/button";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import MobileLinkListItem from "./mobile-link-list-item";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { HORIZONTAL_PADDING } from "@/lib/constants/styles";
import { mainPages } from "@/lib/constants/nav";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Button variant="neutral" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Menu size={20} />
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
            className={clsx(
              "fixed inset-0 bg-background z-50 flex flex-col overflow-y-auto",
              HORIZONTAL_PADDING
            )}
          >
            <motion.div whileHover={{ rotate: 2 }} className="ml-auto my-12">
              <X
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
