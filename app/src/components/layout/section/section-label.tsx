import { SECTION_LABEL } from "@/constants/styles";
import clsx from "clsx";
import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
}
export default function SectionLabel({
  icon: Icon,
  children,
  className,
}: Props) {
  return (
    <h3 className={clsx("flex gap-3", SECTION_LABEL, className)}>
      <Icon size={20} className="text-primary" /> {children}
    </h3>
  );
}
