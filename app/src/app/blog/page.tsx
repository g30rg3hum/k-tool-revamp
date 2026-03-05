import FadeOnScroll from "@/components/animations/fade-on-scroll";
import SectionHeading from "@/components/layout/section/section-heading";
import SectionLabel from "@/components/layout/section/section-label";
import BlogPosts from "@/components/pages/blog/posts";
import GeneralContact from "@/components/pages/sections/general-contact";
import { CONTENT_LAYOUT, SPACE_BETWEEN_SECTIONS } from "@/lib/constants/styles";
import { BookText } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | K-TOOL Engineering | Precision Engineering in Malaysia",
  description:
    "Stay updated with the latest news, insights, and articles from K-TOOL Engineering. Explore our blog for expert perspectives on precision engineering, industry trends, and company updates from our headquarters in Malaysia.",
};

export default async function BlogPage() {
  return (
    <div className={SPACE_BETWEEN_SECTIONS}>
      {/* List of blog posts */}
      <div className={CONTENT_LAYOUT}>
        <FadeOnScroll className="mb-6">
          <SectionLabel className="mb-3" icon={BookText}>
            Blog
          </SectionLabel>
          <SectionHeading className="mb-6">
            What's been going on at{" "}
            <span className="text-primary font-logo ml-2 text-primary">
              K-TOOL
            </span>
            ?
          </SectionHeading>
          <p>
            We post weekly about the latest updates on the happenings in our
            company and community, and share helpful insights about our industry
            and work.
          </p>
        </FadeOnScroll>
        <BlogPosts />
      </div>
      <GeneralContact />
    </div>
  );
}
