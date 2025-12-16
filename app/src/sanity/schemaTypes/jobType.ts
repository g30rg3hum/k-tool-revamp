import { defineField, defineType } from "sanity";

export const jobType = defineType({
    name: "job",
    title: "Job",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "salary",
            type: "number",
            description: "in MYR, thousands",
        }),
        defineField({
            name: "description",
            title: "Short description displayed in the list",
            type: "string",
            validation: (rule) => rule.required().max(100),
        }),
        defineField({
            name: "jobType",
            title: "Job Type",
            description: "Full-time, Part-time, Internship, etc.",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "location",
            type: "string",
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
            ],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "additionalLink",
            type: "url",
            description: "Link to external application page (if any)",
        }),
    ],
});
