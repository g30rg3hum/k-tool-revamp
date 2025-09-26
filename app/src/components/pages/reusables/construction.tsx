import SectionHeading from "@/components/layout/section/section-heading";
import { CONTENT_LAYOUT } from "@/lib/constants/styles";
import clsx from "clsx";
import { Construction as ConstructionIcon } from "lucide-react";

export default function Construction() {
  return (
    <div
      className={clsx(
        "min-h-screen flex flex-col items-center",
        CONTENT_LAYOUT
      )}
    >
      <ConstructionIcon className="mb-3" size={30} />
      <SectionHeading className="mb-6">
        This page is under construction.
      </SectionHeading>
      <p>The content of this page is currently being worked on.</p>
      <p>Please navigate to another and check back later.</p>
    </div>
  );
}
