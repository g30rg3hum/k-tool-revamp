import { CONTENT_HEADING } from "@/constants/styles";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}
export default function ContentHeading({ children, className }: Props) {
  return <h4 className={clsx(CONTENT_HEADING, className)}>{children}</h4>;
}
