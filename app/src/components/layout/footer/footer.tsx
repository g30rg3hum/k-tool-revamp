import { CONTENT_LAYOUT, VERTICAL_PADDING } from "@/lib/constants/styles";
import clsx from "clsx";
import ContentHeading from "../section/content/content-heading";
import { mainPages } from "@/lib/constants/nav";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-background overflow-hidden">
      <div
        className={clsx(
          "pt-15 sm:pt-18", // modified VERTICAL_PADDING
          CONTENT_LAYOUT
        )}
      >
        <div className="flex flex-col gap-18 overflow-hidden">
          <div className="flex gap-6">
            <div>
              <ContentHeading className="mb-3">Links</ContentHeading>
              <ul>
                {mainPages.map((page) => (
                  <li key={page.title}>
                    <Link href={page.href}>{page.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="max-w-xs">
              <ContentHeading className="mb-3">Location</ContentHeading>
              <p>
                Plot 159, Jalan Sungai Kluang, Bayan Lepas Phase 1 FTZ, 11900
                Bayan Lepas, Penang, Malaysia
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <ContentHeading className="mb-3">Phone number</ContentHeading>
                <p>+604 645 1518</p>
              </div>
              <div>
                <ContentHeading className="mb-3">Email</ContentHeading>
                <p>contact@ktool.com</p>
              </div>
            </div>
          </div>
          <h1 className="self-end bottom-0 right-0 text-[5rem] md:text-[8rem] lg:text-[10rem] leading-none font-logo m-0 p-0">
            K-TOOL
          </h1>
        </div>
      </div>
    </footer>
  );
}
