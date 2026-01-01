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
                  15A, Hilir Sungai Keluang 1, Bayan Lepas Industrial Park Phase
                  4, 11900 Bayan Lepas, Penang, Malaysia
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <div>
                  <ContentHeading className="mb-3">Phone number</ContentHeading>
                  <p>+604 645 1518</p>
                </div>
                {/* <div>
                  <ContentHeading className="mb-3">Email</ContentHeading>
                  <p>sales@ktoolmalaysia.com</p>
                </div> */}
              </div>
            </div>
            <p className="mb-12 md:hidden">
              {" "}
              © 2025 K-Tool Engineering. All rights reserved. <br /> Company No:
              199501021996
            </p>
            <div className="flex justify-end md:justify-between items-end">
              <p className="pb-4 hidden md:block">
                © 2025 K-Tool Engineering Sdn Bhd.
                <br /> All rights reserved. <br /> Company No: 199501021996
              </p>
              <h1 className="self-end bottom-0 right-0 text-[5rem] sm:text-[6rem] lg:text-[9rem] leading-none font-logo m-0 p-0 opacity-20">
                K-TOOL
              </h1>
            </div>
          </div>
        </div>
      </FadeOnScroll>
    </footer>
  );
}
