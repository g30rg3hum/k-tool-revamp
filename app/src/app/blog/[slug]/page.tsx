import ContentHeading from "@/components/layout/section/content/content-heading";
import SectionHeading from "@/components/layout/section/section-heading";
import { CONTENT_LAYOUT, SPACE_BETWEEN_SECTIONS } from "@/lib/constants/styles";
import { client } from "@/sanity/lib/client";
import { Post } from "@/sanity/sanity.types";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableText, SanityDocument } from "next-sanity";

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
        <div className={SPACE_BETWEEN_SECTIONS}>
            <div className={CONTENT_LAYOUT}>
                <a href="/blog" className="hover:underline block mb-6">
                    ← Back to posts
                </a>
                <div className="mb-9">
                    <SectionHeading>{post.title}</SectionHeading>
                    <p>{new Date(post.publishedAt!).toLocaleDateString()}</p>
                    <p className="text-muted">{post.description}</p>
                </div>
                <div className="flex justify-center mb-6">
                    {mainImageUrl && (
                        <div>
                            <img
                                src={mainImageUrl}
                                alt={post.mainImage!.alt}
                                className="rounded-md mb-2 w-full h-max sm:max-w-lg "
                            />
                            <p className="text-muted text-sm text-center">
                                {post.mainImage!.caption}
                            </p>
                        </div>
                    )}
                </div>
                <div>
                    {post.body &&
                        post.body.map((part: ImageBlock | TextBlock) => {
                            const isBlock = part._type === "block";
                            const isImage = part._type === "image";

                            if (isBlock) {
                                const text = part.children![0].text!;
                                if (text == "") return null;

                                const isHeading = part.style === "h3";

                                console.log(isHeading);

                                if (isHeading) {
                                    return (
                                        <ContentHeading
                                            key={part._key}
                                            className="mt-3 mb-3"
                                        >
                                            {text}
                                        </ContentHeading>
                                    );
                                }

                                return (
                                    <div className="prose mb-3" key={part._key}>
                                        <PortableText value={part} />
                                    </div>
                                );
                            }

                            if (isImage) {
                                const imageUrl = urlFor(part!)?.url();
                                return (
                                    <div key={part._key} className="mb-6">
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
            </div>
            <div />
        </div>
    );
}
