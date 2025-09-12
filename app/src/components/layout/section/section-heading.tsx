import { SECTION_HEADING } from "@/lib/constants/styles";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}
export default function SectionHeading({ children, className }: Props) {
  return <h2 className={clsx(SECTION_HEADING, className)}>{children}</h2>;
}
