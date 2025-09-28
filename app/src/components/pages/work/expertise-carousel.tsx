import SlidingCarousel from "@/components/ui/sliding-carousel";
import { technicalExpertisePoints } from "../home/technical-expertise/technical-expertise-carousel";
import ContentHeading from "@/components/layout/section/content/content-heading";

export default function ExpertiseCarousel() {
  return (
    <SlidingCarousel>
      {technicalExpertisePoints.map((point) => (
        <div
          key={point.title}
          className="w-xs bg-white rounded-md shrink-0 flex flex-col border border-neutral p-6"
        >
          <ContentHeading className="mb-3">{point.title}</ContentHeading>
          <p>{point.description}</p>
        </div>
      ))}
    </SlidingCarousel>
  );
}
