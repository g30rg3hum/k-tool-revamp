import { CONTENT_HEADING } from "@/lib/constants/styles";
import clsx from "clsx";

interface Props {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}
export default function ContentHeading({
    children,
    className,
    onClick,
}: Props) {
    return (
        <h4 className={clsx(CONTENT_HEADING, className)} onClick={onClick}>
            {children}
        </h4>
    );
}
