import { defineField, defineType } from "sanity";

export const postType = defineType({
    name: "post",
    title: "Post",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "title",
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "description",
            title: "Short description displayed in previews",
            type: "string",
            validation: (rule) => rule.required().max(100),
        }),
        defineField({
            name: "publishedAt",
            type: "datetime",
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "mainImage",
            title: "Main Top Image",
            type: "image",
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alternative text",
                    validation: (rule) => rule.required(),
                },
                {
                    name: "caption",
                    type: "string",
                    title: "Caption",
                    validation: (rule) => rule.required(),
                },
            ],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "body",
            title: "Body",
            type: "array",
            of: [
                {
                    type: "block", // regular text blocks
                },
                {
                    type: "image",
                    options: {
                        hotspot: true, // allow cropping
                    },
                    fields: [
                        {
                            name: "alt",
                            type: "string",
                            title: "Alternative text",
                            validation: (rule) => rule.required(),
                        },
                        {
                            name: "caption",
                            type: "string",
                            title: "Caption",
                            validation: (rule) => rule.required(),
                        },
                    ],
                },
            ],
            validation: (rule) => rule.required(),
        }),
    ],
});
