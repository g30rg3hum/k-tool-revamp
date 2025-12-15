import { type SchemaTypeDefinition } from "sanity";
import { postType } from "./postType";
import { jobType } from "./jobType";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [postType, jobType],
};
