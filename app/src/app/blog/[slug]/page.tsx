import FadeOnScroll from "@/components/animations/fade-on-scroll";
import ContentHeading from "@/components/layout/section/content/content-heading";
import SectionHeading from "@/components/layout/section/section-heading";
import SectionLabel from "@/components/layout/section/section-label";
import { CONTENT_LAYOUT, SPACE_BETWEEN_SECTIONS } from "@/lib/constants/styles";
import { client } from "@/sanity/lib/client";
import { Post } from "@/sanity/sanity.types";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableText, SanityDocument } from "next-sanity";
import { Metadata } from "next";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
    projectId && dataset
        ? imageUrlBuilder({ projectId, dataset }).image(source)
        : null;

const options = { next: { revalidate: 30 } };

// type of body blocks
type BodyBlock = NonNullable<Post["body"]>[number];

type TextBlock = Extract<BodyBlock, { _type: "block" }>;
type ImageBlock = Extract<BodyBlock, { _type: "image" }>;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const post = await client.fetch<SanityDocument>(
        POST_QUERY,
        await params,
        options
    );

    const ogImage = post.mainImage
        ? urlFor(post.mainImage)?.width(1200).height(630).url()
        : null;

    return {
        title: post.title,
        description:
            post.description || `Read about ${post.title} on K-TOOL blog`,
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            publishedTime: post.publishedAt,
            images: ogImage ? [{ url: ogImage }] : [],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
            images: ogImage ? [ogImage] : [],
        },
    };
}

export default async function PostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const post = await client.fetch<SanityDocument>(
        POST_QUERY,
        await params,
        options
    );
    const mainImageUrl = post.mainImage ? urlFor(post.mainImage)?.url() : null;

    return (
        <article className={SPACE_BETWEEN_SECTIONS}>
            <FadeOnScroll className={CONTENT_LAYOUT}>
                <a href="/blog" className="hover:underline block mb-6">
                    ← Back to posts
                </a>
                <header className="mb-9">
                    <SectionHeading className="mb-1">
                        {post.title}
                    </SectionHeading>
                    <h3 className="text-muted">{post.description}</h3>
                    <time dateTime={post.publishedAt}>
                        Published on{" "}
                        {new Date(post.publishedAt!).toLocaleDateString()}
                    </time>
                </header>
                <div className="flex justify-center mb-9">
                    {mainImageUrl && (
                        <div>
                            <img
                                src={mainImageUrl}
                                alt={post.mainImage!.alt}
                                className="rounded-md mb-2 w-full sm:max-w-lg "
                            />
                            <p className="text-muted text-sm text-center">
                                {post.mainImage!.caption}
                            </p>
                        </div>
                    )}
                </div>
                <div className="max-w-3xl mx-auto [&_a]:text-primary [&_a]:underline [&_a:hover]:text-blue-800">
                    {post.body &&
                        post.body.map((part: ImageBlock | TextBlock) => {
                            const isBlock = part._type === "block";
                            const isImage = part._type === "image";

                            if (isBlock) {
                                const text = part.children![0].text!;
                                if (text == "") return null;

                                const largerHeading = part.style === "h3";
                                const smallerHeading = part.style === "h4";

                                const bullet = part.listItem === "bullet";

                                if (largerHeading) {
                                    return (
                                        <h3
                                            key={part._key}
                                            className="text-2xl font-bold mt-9"
                                        >
                                            {text}
                                        </h3>
                                    );
                                }

                                if (smallerHeading) {
                                    return (
                                        <h4
                                            key={part._key}
                                            className="text-xl font-bold mt-9"
                                        >
                                            {text}
                                        </h4>
                                    );
                                }

                                if (bullet) {
                                    return (
                                        <li
                                            key={part._key}
                                            className="list-inside"
                                        >
                                            {text}
                                        </li>
                                    );
                                }

                                return (
                                    <div className="prose mt-6" key={part._key}>
                                        <PortableText value={part} />
                                    </div>
                                );
                            }

                            if (isImage) {
                                const imageUrl = urlFor(part!)?.url();
                                return (
                                    <div key={part._key} className="mt-9">
                                        <img
                                            src={imageUrl!}
                                            alt={part.alt!}
                                            className="rounded-md w-full md:max-w-lg mx-auto"
                                        />
                                        <p className="text-muted text-sm text-center mt-2">
                                            {part.caption}
                                        </p>
                                    </div>
                                );
                            }

                            return null;
                        })}
                </div>
            </FadeOnScroll>
            <div />
        </article>
    );
}
