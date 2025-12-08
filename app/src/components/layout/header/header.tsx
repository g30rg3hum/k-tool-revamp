"use client";

import clsx from "clsx";
import Button from "../../ui/button";
import DesktopLinkListItem from "./desktop-link-list-item";
import MobileMenu from "./mobile-menu";
import { CONTENT_LAYOUT, VERTICAL_PADDING } from "@/lib/constants/styles";
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
            <div
                className={clsx(
                    "flex justify-between items-center",
                    VERTICAL_PADDING,
                    CONTENT_LAYOUT
                )}
            >
                <FadeOnScroll direction="down">
                    <div className="flex flex-col">
                        <h1 className="font-logo text-4xl text-primary">
                            K-TOOL
                        </h1>
                        <p className="text-muted text-xs">199501021996</p>
                    </div>
                </FadeOnScroll>

                {/* Desktop navigation */}
                <FadeOnScroll direction="down">
                    <nav className="hidden lg:block">
                        <ul className="font-bold grid grid-cols-8 grid-rows-2 justify-items-center xl:flex gap-2 xl:gap-6">
                            {mainPages.map((page, idx) => {
                                return (
                                    <DesktopLinkListItem
                                        key={`desktop:${page.href}`}
                                        href={page.href}
                                        className={
                                            idx === 4
                                                ? "col-[2_/span_2]"
                                                : "col-[span_2]"
                                        }
                                    >
                                        {page.title}
                                    </DesktopLinkListItem>
                                );
                            })}
                        </ul>
                    </nav>
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
        </header>
    );
}
