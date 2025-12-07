import FadeOnScroll from "@/components/animations/fade-on-scroll";
import SectionHeading from "@/components/layout/section/section-heading";
import SectionLabel from "@/components/layout/section/section-label";
import BlogPosts from "@/components/pages/blog/posts";
import GeneralContact from "@/components/pages/sections/general-contact";
import { CONTENT_LAYOUT, SPACE_BETWEEN_SECTIONS } from "@/lib/constants/styles";
import { client } from "@/sanity/lib/client";
import { BookText } from "lucide-react";
import { SanityDocument } from "next-sanity";

const POSTS_QUERY = `*[
  _type == "post"
 && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function BlogPage() {
    const posts = await client.fetch<SanityDocument[]>(
        POSTS_QUERY,
        {},
        options
    );

    return (
        <div className={SPACE_BETWEEN_SECTIONS}>
            {/* List of blog posts */}
            <FadeOnScroll className={CONTENT_LAYOUT}>
                <div className="mb-6">
                    <SectionLabel className="mb-3" icon={BookText}>
                        Blog
                    </SectionLabel>
                    <SectionHeading className="mb-6">
                        What's been going on at{" "}
                        <span className="text-primary">K-TOOL</span>?
                    </SectionHeading>
                    <p>
                        We post weekly about the latest updates on the
                        happenings in our company and community, and share
                        helpful insights about our industry and work.
                    </p>
                </div>
                <BlogPosts />
            </FadeOnScroll>
            <GeneralContact />
        </div>
    );
}
