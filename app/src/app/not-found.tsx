import SectionHeading from "@/components/layout/section/section-heading";
import { CONTENT_LAYOUT } from "@/lib/constants/styles";
import clsx from "clsx";
import { Bomb, X } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className={clsx(
        "min-h-screen flex flex-col items-center",
        CONTENT_LAYOUT
      )}
    >
      <X className="mb-3" size={30} />
      <SectionHeading className="mb-6">Page not found.</SectionHeading>
      <p>The page you were looking for does not exist.</p>
      <p>Please navigate to another.</p>
    </div>
  );
}
