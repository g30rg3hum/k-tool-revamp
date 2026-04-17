import { client } from "@/sanity/lib/client";
import { MetadataRoute } from "next";

const ALL_POST_SLUGS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) { slug, publishedAt }`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await client.fetch<{ slug: { current: string }; publishedAt: string }[]>(
    ALL_POST_SLUGS_QUERY,
    {},
    { next: { revalidate: 3600 } }
  );

  const postUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://www.ktoolengineering.com/blog/${post.slug.current}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: "https://www.ktoolengineering.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.ktoolengineering.com/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://www.ktoolengineering.com/work",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.ktoolengineering.com/equipment",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.ktoolengineering.com/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://www.ktoolengineering.com/get-quote",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://www.ktoolengineering.com/careers",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://www.ktoolengineering.com/quality-assurance",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: "https://www.ktoolengineering.com/sustainability",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: "https://www.ktoolengineering.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...postUrls,
  ];
}
