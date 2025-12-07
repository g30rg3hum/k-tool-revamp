"use client";

import ContentHeading from "@/components/layout/section/content/content-heading";
import Input from "@/components/ui/form/input";
import { truncate } from "@/lib/helpers/text";
import { urlFor } from "@/sanity/lib/image";
import { Post } from "@/sanity/sanity.types";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { motion } from "motion/react";
import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
} from "lucide-react";

const schema = yup.object({
    search: yup.string(),
});

const MAX_PER_PAGE = 3;

export default function BlogPosts() {
    const { register, watch } = useForm({ resolver: yupResolver(schema) });
    const searchValue = watch("search");
    const [posts, setPosts] = useState<Post[]>([]);
    const [displayedPosts, setDisplayedPosts] = useState<Post[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch(
                "https://lborhvr3.api.sanity.io/v2025-12-07/data/query/production?query=*%5B_type+%3D%3D+%22post%22%5D%7B+_id%2C+title%2C+slug%2C+publishedAt%2C+body%2C+mainImage%2C+description+%7D+%7C+order%28publishedAt+desc%29%0A&perspective=published"
            );
            const data = await res.json();

            setPosts(data.result);
        };

        fetchPosts();
    }, []);

    useEffect(() => {
        if (searchValue && posts.length > 0) {
            const filteredPosts = posts.filter((post) =>
                post
                    .title!.toLowerCase()
                    .includes(searchValue.toLowerCase().trim())
            );
            setDisplayedPosts(filteredPosts);
        } else {
            setDisplayedPosts(posts);
        }
    }, [searchValue, posts]);

    const totalPages = Math.ceil(displayedPosts.length / MAX_PER_PAGE);
    const startIndex = (currentPage - 1) * MAX_PER_PAGE;
    const endIndex = startIndex + MAX_PER_PAGE;
    const paginatedPosts = displayedPosts.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    // Calculate which page numbers to show (max 3)
    const getPageNumbers = () => {
        const maxVisible = 3;
        let startPage = Math.max(1, currentPage - 1);
        let endPage = Math.min(totalPages, startPage + maxVisible - 1);

        // Adjust if we're near the end
        if (endPage - startPage < maxVisible - 1) {
            startPage = Math.max(1, endPage - maxVisible + 1);
        }

        return Array.from(
            { length: endPage - startPage + 1 },
            (_, i) => startPage + i
        );
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className="space-y-9">
            {/* Search */}
            <Input
                label="Search"
                placeholder="Latest machinery in precision engineering"
                {...register("search")}
                className="bg-white"
            />
            {/* Posts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedPosts ? (
                    paginatedPosts.map((post) => {
                        const imageUrl = post.mainImage
                            ? urlFor(post.mainImage).url()
                            : null;

                        return (
                            <motion.a
                                whileHover={{ y: -3 }}
                                key={post._id}
                                href={`/blog/${post.slug!.current}`}
                                className={clsx(
                                    "h-[25rem] sm:h-[30rem] md:h-[27rem] w-full bg-white rounded-md flex flex-col border border-neutral overflow-hidden cursor-pointer"
                                )}
                            >
                                <img
                                    className="rounded-md m-3 h-[50%] object-cover"
                                    src={imageUrl!}
                                    alt={post.mainImage!.alt!}
                                />
                                <div className="p-6 h-[50%]">
                                    <ContentHeading className="mb-3 border-b">
                                        {post.title}
                                    </ContentHeading>
                                    <p className="text-muted mb-3">
                                        {new Date(
                                            post.publishedAt!
                                        ).toLocaleDateString()}
                                    </p>
                                    <p>{truncate(post.description!, 100)}</p>
                                </div>
                            </motion.a>
                        );
                    })
                ) : (
                    <p>No posts found.</p>
                )}
            </div>
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-3">
                    {/* First page button */}
                    <button
                        onClick={() => handlePageChange(1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 rounded-md border border-neutral bg-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                        <ChevronsLeft size={20} />
                    </button>

                    {/* Previous button */}
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 rounded-md border border-neutral bg-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    {/* Page numbers (max 3 visible) */}
                    <div className="flex gap-3">
                        {pageNumbers.map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={clsx(
                                    "px-4 py-2 min-w-[3rem] rounded-md transition-colors",
                                    currentPage === page
                                        ? "bg-primary text-background"
                                        : "bg-white border border-neutral hover:bg-gray-50 cursor-pointer"
                                )}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    {/* Next button */}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 rounded-md border border-neutral bg-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                        <ChevronRight size={20} />
                    </button>

                    {/* Last page button */}
                    <button
                        onClick={() => handlePageChange(totalPages)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 rounded-md border border-neutral bg-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                        <ChevronsRight size={20} />
                    </button>
                </div>
            )}
        </div>
    );
}
