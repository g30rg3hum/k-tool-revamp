import clsx from "clsx";
import Button from "../../ui/button";
import DesktopLinkListItem from "./desktop-link-list-item";
import MobileMenu from "./mobile-menu";
import { CONTENT_STYLES } from "@/constants/styles";

export const mainPages = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  { href: "/projects", title: "Projects" },
  { href: "/equipment", title: "Equipment" },
  { href: "/quality-assurance", title: "Quality" },
];
export default function Header() {
  return (
    <header
      className={clsx(
        "py-12 flex justify-between items-center",
        CONTENT_STYLES
      )}
    >
      <h1 className="font-logo text-4xl">K-TOOL</h1>

      {/* Desktop navigation */}
      <nav className="hidden lg:block">
        <ul className="font-bold flex gap-6">
          {mainPages.map((page) => (
            <DesktopLinkListItem key={`desktop:${page.href}`} href={page.href}>
              {page.title}
            </DesktopLinkListItem>
          ))}
        </ul>
      </nav>
      <div className="gap-6 hidden lg:flex">
        <Button variant="primary" href="/get-quote">
          Get instant quote
        </Button>
        <Button variant="outline" href="/contact">
          Contact us
        </Button>
      </div>

      {/* Smaller screens */}
      <div className="lg:hidden">
        <MobileMenu />
      </div>
    </header>
  );
}
