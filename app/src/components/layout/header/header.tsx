"use client";

import clsx from "clsx";
import Button from "../../ui/button";
import DesktopLinkListItem from "./desktop-link-list-item";
import MobileMenu from "./mobile-menu";
import { CONTENT_LAYOUT } from "@/lib/constants/styles";
import { mainPages } from "@/lib/constants/nav";
import FadeOnScroll from "@/components/animations/fade-on-scroll";
import { useEffect, useState } from "react";

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  // only show the bottom border when scrolled
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setHasScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-40 bg-background mb-6",
        hasScrolled && "border-b border-neutral"
      )}
    >
      {/* Top row: Logo + CTA buttons (+ mobile menu) */}
      <div
        className={clsx(
          "flex justify-between items-center pt-12 pb-3 lg:pb-0",
          CONTENT_LAYOUT
        )}
      >
        <FadeOnScroll direction="down">
          <div className="flex flex-col">
            <h1 className="font-logo text-4xl text-primary">K-TOOL</h1>
          </div>
        </FadeOnScroll>

        <FadeOnScroll direction="down">
          <div className="gap-6 hidden lg:flex">
            <Button variant="primary" href="/get-quote">
              Get quote
            </Button>
            <Button variant="outline" href="/contact">
              Contact us
            </Button>
          </div>
        </FadeOnScroll>

        {/* Smaller screens */}
        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>

      {/* Bottom row: Navigation links (desktop only) */}
      <FadeOnScroll direction="down">
        <nav
          className={clsx("hidden lg:block pb-6", CONTENT_LAYOUT)}
        >
          <ul className="font-bold flex items-center gap-6">
            {mainPages.map((page) => {
              return (
                <DesktopLinkListItem
                  key={`desktop:${page.href}`}
                  href={page.href}
                >
                  {page.title}
                </DesktopLinkListItem>
              );
            })}
          </ul>
        </nav>
      </FadeOnScroll>
    </header>
  );
}
