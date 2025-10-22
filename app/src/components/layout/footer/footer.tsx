import { CONTENT_LAYOUT } from "@/lib/constants/styles";
import clsx from "clsx";
import ContentHeading from "../section/content/content-heading";
import { mainPages } from "@/lib/constants/nav";
import FadeOnScroll from "@/components/animations/fade-on-scroll";

export default function Footer() {
  return (
    <footer className="bg-primary text-background overflow-hidden">
      <FadeOnScroll>
        <div
          className={clsx(
            "pt-15 sm:pt-18", // modified VERTICAL_PADDING
            CONTENT_LAYOUT
          )}
        >
          <div className="flex flex-col overflow-hidden">
            <div className="flex gap-6 mb-12">
              <div>
                <ContentHeading className="mb-3">Links</ContentHeading>
                <ul>
                  {mainPages.map((page) => (
                    <li key={page.title}>
                      <a href={page.href}>{page.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="max-w-xs">
                <ContentHeading className="mb-3">Location</ContentHeading>
                <p>
                  No. 8, Lintang Beringin, Beechwood Light Industrial, 11900
                  Batu Maung, Penang, Malaysia
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <div>
                  <ContentHeading className="mb-3">Phone number</ContentHeading>
                  <p>+604 645 1518</p>
                </div>
                <div>
                  <ContentHeading className="mb-3">Email</ContentHeading>
                  <p>sales@ktoolmalaysia.com</p>
                </div>
              </div>
            </div>
            <p className="mb-12 md:hidden">
              {" "}
              © 2025 K-Tool Engineering. All rights reserved.
            </p>
            <div className="flex justify-end md:justify-between items-end">
              <p className="pb-4 hidden md:block">
                © 2025 K-Tool Engineering Sdn Bhd.
                <br /> All rights reserved.
              </p>
              <h1 className="self-end bottom-0 right-0 text-[5rem] sm:text-[7rem] lg:text-[10rem] leading-none font-logo m-0 p-0 opacity-20">
                K-TOOL
              </h1>
            </div>
          </div>
        </div>
      </FadeOnScroll>
    </footer>
  );
}
